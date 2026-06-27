import { Clock, CheckCircle2, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Step {
  order: number;
  title: string;
  description: string;
  duration?: number;
}

interface StepListProps {
  steps: Step[];
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function StepList({ steps }: StepListProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [timerLeft, setTimerLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isRunning && timerLeft > 0) {
      interval = setInterval(() => {
        setTimerLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000) as unknown as number;
    }
    return () => clearInterval(interval);
  }, [isRunning, timerLeft]);

  const startTimer = (stepIndex: number) => {
    const step = steps[stepIndex];
    if (step.duration) {
      setActiveStep(stepIndex);
      setTimerLeft(step.duration);
      setIsRunning(true);
    }
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    if (activeStep !== null && steps[activeStep].duration) {
      setTimerLeft(steps[activeStep].duration!);
      setIsRunning(false);
    }
  };

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={step.order}
          className={`bg-white rounded-card p-6 shadow-sm border border-warm-100 transition-all duration-300 ${
            activeStep === index ? 'ring-2 ring-primary/30 shadow-md' : ''
          }`}
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
              {step.order}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-warm-900 mb-2">{step.title}</h4>
              <p className="text-warm-600 text-sm leading-relaxed">{step.description}</p>

              {step.duration && (
                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-sm text-warm-500">
                    <Clock className="w-4 h-4" />
                    约 {Math.ceil(step.duration / 60)} 分钟
                  </span>
                  <button
                    onClick={() => startTimer(index)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-btn hover:bg-primary/20 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    开始计时
                  </button>
                </div>
              )}
            </div>
          </div>

          {activeStep === index && step.duration && (
            <div className="mt-4 ml-14 bg-warm-50 rounded-btn p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-warm-600">智能计时器</span>
                {timerLeft === 0 && (
                  <span className="text-sm text-green-600 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    计时结束
                  </span>
                )}
              </div>
              <div className="text-3xl font-display font-bold text-primary mb-3">
                {formatTime(timerLeft)}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={toggleTimer}
                  className="flex-1 py-2 text-sm font-medium bg-primary text-white rounded-btn hover:bg-primary-dark transition-colors"
                >
                  {isRunning ? '暂停' : '继续'}
                </button>
                <button
                  onClick={resetTimer}
                  className="flex-1 py-2 text-sm font-medium bg-warm-200 text-warm-700 rounded-btn hover:bg-warm-300 transition-colors"
                >
                  重置
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
