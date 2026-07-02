import { preferences, BusinessError } from '@kit.CoreKit';

export interface XiaomeiSettings {
  personality: string;
  professional: string;
  memory: boolean;
  style: string;
}

export class XiaomeiSettingsService {
  private static instance: XiaomeiSettingsService;
  private settings: XiaomeiSettings;
  private preferences: preferences.Preferences | null = null;

  private constructor() {
    this.settings = {
      personality: 'professional',
      professional: 'all',
      memory: true,
      style: 'detailed'
    };
  }

  static getInstance(): XiaomeiSettingsService {
    if (!XiaomeiSettingsService.instance) {
      XiaomeiSettingsService.instance = new XiaomeiSettingsService();
    }
    return XiaomeiSettingsService.instance;
  }

  async loadSettings(): Promise<void> {
    try {
      this.preferences = await preferences.getPreferences(this.getPreferencesContext(), 'xiaomei_settings');
      const saved = this.preferences.get('settings', '');
      if (saved) {
        this.settings = JSON.parse(saved);
        console.info('[小美] Settings loaded:', this.settings);
      }
    } catch (err: unknown) {
      console.error('[小美] Failed to load settings:', err);
    }
  }

  async saveSettings(): Promise<void> {
    try {
      if (!this.preferences) {
        this.preferences = await preferences.getPreferences(this.getPreferencesContext(), 'xiaomei_settings');
      }
      await this.preferences.put('settings', JSON.stringify(this.settings));
      await this.preferences.flush();
      console.info('[小美] Settings saved:', this.settings);
    } catch (err: unknown) {
      console.error('[小美] Failed to save settings:', err);
    }
  }

  getSettings(): XiaomeiSettings {
    return { ...this.settings };
  }

  setPersonality(personality: string): void {
    this.settings.personality = personality;
    this.saveSettings();
  }

  setProfessional(professional: string): void {
    this.settings.professional = professional;
    this.saveSettings();
  }

  setMemory(memory: boolean): void {
    this.settings.memory = memory;
    this.saveSettings();
  }

  setStyle(style: string): void {
    this.settings.style = style;
    this.saveSettings();
  }

  private getPreferencesContext(): preferences.PreferencesContext {
    return {
      filePath: '',
      mode: preferences.ContextMode.MODE_PRIVATE,
      name: 'xiaomei_settings',
      bundleName: 'com.monsterdt.makeuppal'
    };
  }
}
