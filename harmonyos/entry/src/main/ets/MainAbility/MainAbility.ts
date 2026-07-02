import { UIAbility, AbilityStage, Context, Want, window } from '@kit.AbilityKit';
import { XiaomeiSettingsService } from '../services/XiaomeiSettingsService';

export default class MainAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityStage.LaunchParam): void {
    console.info('[小美] MainAbility onCreate');
    XiaomeiSettingsService.getInstance().loadSettings();
  }

  onDestroy(): void {
    console.info('[小美] MainAbility onDestroy');
    XiaomeiSettingsService.getInstance().saveSettings();
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('[小美] MainAbility onWindowStageCreate');
    windowStage.loadContent('pages/MainPage/MainPage', (err: Error) => {
      if (err) {
        console.error('[小美] Failed to load content:', err.message);
      }
    });
  }

  onWindowStageDestroy(): void {
    console.info('[小美] MainAbility onWindowStageDestroy');
  }

  onForeground(): void {
    console.info('[小美] MainAbility onForeground');
  }

  onBackground(): void {
    console.info('[小美] MainAbility onBackground');
    XiaomeiSettingsService.getInstance().saveSettings();
  }
}
