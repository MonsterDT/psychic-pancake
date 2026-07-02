import { speech, BusinessError } from '@kit.MultimediaKit';
import { promptAction } from '@kit.AbilityKit';

export class XiaomeiVoiceService {
  private static instance: XiaomeiVoiceService;
  private speechRecognizer: speech.SpeechRecognizer | null = null;
  private isListening: boolean = false;
  private wakeWord: string = '小美小美';
  private onWakeUpCallback: (() => void) | null = null;
  private onCommandCallback: ((command: string) => void) | null = null;

  private constructor() {}

  static getInstance(): XiaomeiVoiceService {
    if (!XiaomeiVoiceService.instance) {
      XiaomeiVoiceService.instance = new XiaomeiVoiceService();
    }
    return XiaomeiVoiceService.instance;
  }

  async initVoiceRecognizer(): Promise<boolean> {
    try {
      this.speechRecognizer = speech.createSpeechRecognizer();
      this.speechRecognizer.on('result', (result: speech.SpeechRecognizerResult) => {
        this.handleSpeechResult(result);
      });
      this.speechRecognizer.on('error', (error: BusinessError) => {
        console.error('[小美] Speech recognition error:', error);
        this.isListening = false;
      });
      this.speechRecognizer.on('start', () => {
        console.info('[小美] Speech recognition started');
        this.isListening = true;
      });
      this.speechRecognizer.on('stop', () => {
        console.info('[小美] Speech recognition stopped');
        this.isListening = false;
      });
      return true;
    } catch (err: unknown) {
      console.error('[小美] Failed to init speech recognizer:', err);
      return false;
    }
  }

  async startListening(): Promise<void> {
    if (!this.speechRecognizer) {
      const success = await this.initVoiceRecognizer();
      if (!success) {
        promptAction.showToast({ message: '语音识别初始化失败' });
        return;
      }
    }

    try {
      await this.speechRecognizer!.start({
        language: 'zh-CN',
        punctuationEnabled: true
      });
      promptAction.showToast({ message: `语音已开启，请说"${this.wakeWord}"唤醒我~` });
    } catch (err: unknown) {
      console.error('[小美] Failed to start listening:', err);
      promptAction.showToast({ message: '无法启动语音识别' });
    }
  }

  async stopListening(): Promise<void> {
    if (this.speechRecognizer && this.isListening) {
      try {
        await this.speechRecognizer.stop();
      } catch (err: unknown) {
        console.error('[小美] Failed to stop listening:', err);
      }
    }
  }

  isActive(): boolean {
    return this.isListening;
  }

  setOnWakeUpCallback(callback: () => void): void {
    this.onWakeUpCallback = callback;
  }

  setOnCommandCallback(callback: (command: string) => void): void {
    this.onCommandCallback = callback;
  }

  private handleSpeechResult(result: speech.SpeechRecognizerResult): void {
    const text = result.result;
    console.info('[小美] Recognized text:', text);

    if (text.includes(this.wakeWord)) {
      console.info('[小美] Wake word detected!');
      this.onWakeUpCallback?.();

      const remainingText = text.replace(this.wakeWord, '').trim();
      if (remainingText) {
        console.info('[小美] Command after wake word:', remainingText);
        this.onCommandCallback?.(remainingText);
      }
    } else if (this.isListening) {
      this.onCommandCallback?.(text);
    }
  }

  getWakeWord(): string {
    return this.wakeWord;
  }
}
