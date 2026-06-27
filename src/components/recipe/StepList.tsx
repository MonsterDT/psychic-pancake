import { useState, useEffect, useMemo } from 'react';
import {
  Clock,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  X,
  Scale,
  ThermometerSun,
  Lightbulb,
  PartyPopper,
  ListTodo,
  Timer,
} from 'lucide-react';
import type { Step, Ingredient } from '@/types';
import ScaleCalculator from './ScaleCalculator';
import TempConverter from './TempConverter';

interface StepListProps {
  steps: Step[];
  ingredients: Ingredient[];
  ratio: number;
  bakeMode: boolean;
  onExitBakeMode: () => void;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export default function StepList({
  steps,
  ingredients,
  ratio,
  bakeMode,
  onExitBakeMode,
}: StepListProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timerLeft, setTimerLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTool, setActiveTool] = useState<'timer' | 'scale' | 'temp' | null>(null);

  const currentStep = steps[currentStepIndex];
  const progress = useMemo(
    () => Math.round((completedSteps.size / steps.length) * 100),
    [completedSteps.size, steps.length],
  );

  useEffect(() => {
    if (bakeMode) {
      setCompletedSteps(new Set());
      setCurrentStepIndex(0);
      setTimerLeft(0);
      setIsRunning(false);
      setActiveTool(null);
    }
  }, [bakeMode]);

  useEffect(() => {
    let interval: number;
    if (isRunning && timerLeft > 0) {
      interval = setInterval(() => {
        setTimerLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            if ('Notification' in window && Notification.permission === 'granted') {
              new Notification('烘焙提醒', { body: '计时结束啦！' });
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000) as unknown as number;
    }
    return () => clearInterval(interval);
  }, [isRunning, timerLeft]);

  const startTimer = () => {
    if (currentStep?.duration) {
      setTimerLeft(currentStep.duration);
      setIsRunning(true);
      setActiveTool('timer');
    }
  };

  const toggleTimer = () => {
    if (timerLeft > 0) {
      setIsRunning(!isRunning);
    }
  };

  const resetTimer = () => {
    if (currentStep?.duration) {
      setTimerLeft(currentStep.duration);
      setIsRunning(false);
    }
  };

  const toggleStepComplete = (index: number) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      if (!completedSteps.has(currentStepIndex)) {
        setCompletedSteps((prev) => new Set([...prev, currentStepIndex]));
      }
      setCurrentStepIndex((prev) => prev + 1);
      setTimerLeft(0);
      setIsRunning(false);
      setActiveTool(null);
    }
  };

  const goToPrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      setTimerLeft(0);
      setIsRunning(false);
      setActiveTool(null);
    }
  };

  const allCompleted = completedSteps.size === steps.length;

  if (!bakeMode) {
    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.order}
            className="bg-white rounded-card p-6 shadow-sm border border-warm-100 transition-all duration-300"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                {step.order}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-warm-900 mb-2">{step.title}</h4>
                <p className="text-warm-600 text-sm leading-relaxed">{step.description}</p>

                {step.tips && (
                  <div className="mt-3 flex items-start gap-2 p-3 bg-amber-50 rounded-btn border border-amber-100">
                    <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">{step.tips}</p>
                  </div>
                )}

                {step.duration && (
                  <div className="mt-4 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-sm text-warm-500">
                      <Clock className="w-4 h-4" />
                      约 {Math.ceil(step.duration / 60)} 分钟
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (allCompleted) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center animate-fade-in">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <PartyPopper className="w-12 h-12 text-white" />
          </div>
          <h2 className="font-display text-3xl font-bold text-warm-900 mb-3">
            太棒了！全部完成！
          </h2>
          <p className="text-warm-600 mb-8">
            恭喜你完成了所有制作步骤，享受你的烘焙成果吧！
          </p>
          <div className="bg-warm-50 rounded-card p-4 mb-8">
            <p className="text-sm text-warm-500 mb-1">完成进度</p>
            <p className="text-2xl font-bold text-primary">
              {completedSteps.size} / {steps.length} 步
            </p>
          </div>
          <button
            onClick={onExitBakeMode}
            className="btn-primary w-full"
          >
            返回食谱
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col animate-fade-in">
      <div className="bg-white border-b border-warm-100 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between mb-3">
          <button
            onClick={onExitBakeMode}
            className="w-10 h-10 rounded-full bg-warm-100 text-warm-600 flex items-center justify-center hover:bg-warm-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <ListTodo className="w-5 h-5 text-primary" />
            <span className="font-semibold text-warm-900">跟做模式</span>
          </div>
          <div className="w-10 h-10" />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-warm-500">
              第 {currentStepIndex + 1} 步 / 共 {steps.length} 步
            </span>
            <span className="text-primary font-medium">{progress}%</span>
          </div>
          <div className="h-2 bg-warm-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="bg-white rounded-card shadow-sm border border-warm-100 overflow-hidden mb-6">
            <div className="p-6 pb-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-display text-xl font-bold shadow-lg">
                  {currentStep.order}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-display text-xl font-bold text-warm-900 mb-1">
                    {currentStep.title}
                  </h3>
                  {currentStep.duration && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-warm-500">
                      <Clock className="w-4 h-4" />
                      预计 {Math.ceil(currentStep.duration / 60)} 分钟
                    </span>
                  )}
                </div>
                <button
                  onClick={() => toggleStepComplete(currentStepIndex)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    completedSteps.has(currentStepIndex)
                      ? 'bg-green-500 text-white'
                      : 'bg-warm-100 text-warm-400 hover:bg-warm-200'
                  }`}
                >
                  <CheckCircle2 className="w-6 h-6" />
                </button>
              </div>

              <p className="text-warm-700 leading-relaxed text-base">
                {currentStep.description}
              </p>

              {currentStep.tips && (
                <div className="mt-4 flex items-start gap-3 p-4 bg-amber-50 rounded-card border border-amber-100">
                  <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-800 mb-1">小贴士</p>
                    <p className="text-sm text-amber-700">{currentStep.tips}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-warm-100 px-6 py-3 flex gap-2">
              <button
                onClick={() => setActiveTool(activeTool === 'timer' ? null : 'timer')}
                className={`flex-1 py-2.5 text-sm font-medium rounded-btn inline-flex items-center justify-center gap-1.5 transition-colors ${
                  activeTool === 'timer'
                    ? 'bg-primary text-white'
                    : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                }`}
              >
                <Timer className="w-4 h-4" />
                计时器
              </button>
              <button
                onClick={() => setActiveTool(activeTool === 'scale' ? null : 'scale')}
                className={`flex-1 py-2.5 text-sm font-medium rounded-btn inline-flex items-center justify-center gap-1.5 transition-colors ${
                  activeTool === 'scale'
                    ? 'bg-primary text-white'
                    : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                }`}
              >
                <Scale className="w-4 h-4" />
                克重秤
              </button>
              <button
                onClick={() => setActiveTool(activeTool === 'temp' ? null : 'temp')}
                className={`flex-1 py-2.5 text-sm font-medium rounded-btn inline-flex items-center justify-center gap-1.5 transition-colors ${
                  activeTool === 'temp'
                    ? 'bg-primary text-white'
                    : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                }`}
              >
                <ThermometerSun className="w-4 h-4" />
                温度
              </button>
            </div>

            {activeTool === 'timer' && (
              <div className="border-t border-warm-100 p-6 bg-warm-50/50 animate-slide-up">
                <div className="text-center mb-4">
                  <p className="text-sm text-warm-500 mb-2">智能计时器</p>
                  <div className="text-5xl font-display font-bold text-primary mb-4">
                    {formatTime(timerLeft > 0 ? timerLeft : currentStep.duration || 0)}
                  </div>
                  {timerLeft === 0 && !isRunning && currentStep.duration && (
                    <p className="text-sm text-green-600 inline-flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      计时结束
                    </p>
                  )}
                </div>
                <div className="flex gap-3">
                  {timerLeft === 0 && !isRunning ? (
                    <button
                      onClick={startTimer}
                      className="flex-1 py-3 font-medium bg-primary text-white rounded-btn hover:bg-primary-dark transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Play className="w-5 h-5" />
                      开始计时
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={toggleTimer}
                        className="flex-1 py-3 font-medium bg-primary text-white rounded-btn hover:bg-primary-dark transition-colors inline-flex items-center justify-center gap-2"
                      >
                        {isRunning ? (
                          <>
                            <Pause className="w-5 h-5" />
                            暂停
                          </>
                        ) : (
                          <>
                            <Play className="w-5 h-5" />
                            继续
                          </>
                        )}
                      </button>
                      <button
                        onClick={resetTimer}
                        className="px-6 py-3 font-medium bg-warm-200 text-warm-700 rounded-btn hover:bg-warm-300 transition-colors inline-flex items-center justify-center"
                      >
                        <RotateCcw className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeTool === 'scale' && (
              <div className="border-t border-warm-100 p-4 animate-slide-up">
                <ScaleCalculator ingredients={ingredients} ratio={ratio} />
              </div>
            )}

            {activeTool === 'temp' && (
              <div className="border-t border-warm-100 p-4 animate-slide-up">
                <TempConverter defaultCelsius={currentStep.temperature?.celsius} />
              </div>
            )}
          </div>

          <div>
            <p className="text-sm text-warm-500 mb-3">全部步骤</p>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <button
                  key={step.order}
                  onClick={() => {
                    setCurrentStepIndex(index);
                    setTimerLeft(0);
                    setIsRunning(false);
                    setActiveTool(null);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-btn text-left transition-all ${
                    currentStepIndex === index
                      ? 'bg-primary/10 border border-primary/20'
                      : completedSteps.has(index)
                      ? 'bg-green-50 border border-green-100'
                      : 'bg-white border border-warm-100 hover:border-warm-200'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${
                      completedSteps.has(index)
                        ? 'bg-green-500 text-white'
                        : currentStepIndex === index
                        ? 'bg-primary text-white'
                        : 'bg-warm-100 text-warm-500'
                    }`}
                  >
                    {completedSteps.has(index) ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      step.order
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium truncate ${
                        completedSteps.has(index)
                          ? 'text-green-700 line-through'
                          : currentStepIndex === index
                          ? 'text-primary'
                          : 'text-warm-700'
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  {step.duration && (
                    <span className="text-xs text-warm-400 flex-shrink-0">
                      {Math.ceil(step.duration / 60)} 分钟
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-warm-100 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <button
            onClick={goToPrevStep}
            disabled={currentStepIndex === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              currentStepIndex === 0
                ? 'bg-warm-100 text-warm-300 cursor-not-allowed'
                : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNextStep}
            className="flex-1 py-4 font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-btn hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
          >
            {currentStepIndex === steps.length - 1 ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                完成全部
              </>
            ) : (
              <>
                下一步
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
