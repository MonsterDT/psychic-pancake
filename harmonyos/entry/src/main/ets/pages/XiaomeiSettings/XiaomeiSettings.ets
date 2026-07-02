@Entry
@Component
struct XiaomeiSettings {
  @State personality: string = 'professional';
  @State professional: string = 'all';
  @State memory: boolean = true;
  @State style: string = 'detailed';
  private settingsService = XiaomeiSettingsService.getInstance();

  aboutToAppear(): void {
    const settings = this.settingsService.getSettings();
    this.personality = settings.personality;
    this.professional = settings.professional;
    this.memory = settings.memory;
    this.style = settings.style;
  }

  onPersonalityChange(value: string): void {
    this.personality = value;
    this.settingsService.setPersonality(value);
    promptAction.showToast({ message: '性格已切换为：' + this.getPersonalityName(value) });
  }

  onProfessionalChange(value: string): void {
    this.professional = value;
    this.settingsService.setProfessional(value);
    promptAction.showToast({ message: '专业领域已切换为：' + this.getProfessionalName(value) });
  }

  onMemoryChange(value: boolean): void {
    this.memory = value;
    this.settingsService.setMemory(value);
    promptAction.showToast({ message: value ? '记忆功能已开启' : '记忆功能已关闭' });
  }

  onStyleChange(value: string): void {
    this.style = value;
    this.settingsService.setStyle(value);
    promptAction.showToast({ message: '交互风格已切换为：' + this.getStyleName(value) });
  }

  getPersonalityName(value: string): string {
    const names: Record<string, string> = {
      gentle: '温柔贴心',
      professional: '专业严谨',
      cheerful: '活泼开朗'
    };
    return names[value] || value;
  }

  getProfessionalName(value: string): string {
    const names: Record<string, string> = {
      all: '全部',
      makeup: '彩妆',
      skincare: '护肤',
      hair: '发型',
      nails: '美甲'
    };
    return names[value] || value;
  }

  getStyleName(value: string): string {
    const names: Record<string, string> = {
      concise: '简洁明了',
      detailed: '详细丰富',
      humorous: '幽默风趣'
    };
    return names[value] || value;
  }

  build() {
    Column() {
      Row() {
        Button('←')
          .width(44)
          .height(44)
          .backgroundColor(Color.White)
          .opacity(0.3)
          .borderRadius(22)
          .onClick(() => {
            router.back();
          })

        Text('🌸 小美设置')
          .fontSize(20)
          .fontWeight(FontWeight.Medium)
          .fontColor(Color.White)

        Blank()
      }
      .width('100%')
      .padding({ left: 16, right: 16, top: 20, bottom: 16 })
      .backgroundColor($r('app.color.color_primary'))

      Scroll() {
        Column() {
          Column() {
            Text('AI性格特征')
              .fontSize(16)
              .fontWeight(FontWeight.Medium)
              .fontColor($r('app.color.color_text'))
              .margin({ bottom: 4 })
            Text('选择小美的互动性格')
              .fontSize(12)
              .fontColor($r('app.color.color_text_muted'))
              .margin({ bottom: 12 })

            Column({ space: 8 }) {
              ['gentle', 'professional', 'cheerful'].forEach((value) => {
                Row({ space: 12 }) {
                  Text(this.getPersonalityIcon(value))
                    .fontSize(24)
                  Column() {
                    Text(this.getPersonalityName(value))
                      .fontSize(14)
                      .fontWeight(FontWeight.Medium)
                      .fontColor($r('app.color.color_text'))
                    Text(this.getPersonalityDesc(value))
                      .fontSize(12)
                      .fontColor($r('app.color.color_text_muted'))
                  }
                  Blank()
                  if (this.personality === value) {
                    Text('✓')
                      .fontSize(18)
                      .fontColor($r('app.color.color_primary'))
                  }
                }
                .width('100%')
                .padding(16)
                .backgroundColor(Color.White)
                .borderRadius(12)
                .borderWidth(2)
                .borderColor(this.personality === value ? $r('app.color.color_primary') : Color.Transparent)
                .onClick(() => {
                  this.onPersonalityChange(value);
                })
              })
            }
          }
          .width('100%')
          .padding({ top: 16, bottom: 16 })
          .backgroundColor($r('app.color.color_bg'))

          Column() {
            Text('专业领域')
              .fontSize(16)
              .fontWeight(FontWeight.Medium)
              .fontColor($r('app.color.color_text'))
              .margin({ bottom: 4 })
            Text('专注的美妆专业方向')
              .fontSize(12)
              .fontColor($r('app.color.color_text_muted'))
              .margin({ bottom: 12 })

            Row({ space: 8 }) {
              ['all', 'makeup', 'skincare', 'hair', 'nails'].forEach((value) => {
                Text(this.getProfessionalName(value))
                  .padding({ left: 16, right: 16, top: 8, bottom: 8 })
                  .backgroundColor(this.professional === value ? $r('app.color.color_primary') : Color.White)
                  .fontColor(this.professional === value ? Color.White : $r('app.color.color_text_secondary'))
                  .borderRadius(20)
                  .fontSize(12)
                  .borderWidth(1)
                  .borderColor(this.professional === value ? $r('app.color.color_primary') : $r('app.color.color_border_light'))
                  .onClick(() => {
                    this.onProfessionalChange(value);
                  })
              })
            }
          }
          .width('100%')
          .padding({ top: 16, bottom: 16 })
          .backgroundColor($r('app.color.color_bg'))
          .margin({ top: 8 })

          Column() {
            Row() {
              Column() {
                Text('记忆功能')
                  .fontSize(16)
                  .fontWeight(FontWeight.Medium)
                  .fontColor($r('app.color.color_text'))
                  .margin({ bottom: 4 })
                Text('记住你的偏好和历史记录')
                  .fontSize(12)
                  .fontColor($r('app.color.color_text_muted'))
              }
              Blank()
              Switch({ selected: this.memory })
                .selectedColor($r('app.color.color_primary'))
                .onChange((value: boolean) => {
                  this.onMemoryChange(value);
                })
            }
            .width('100%')
          }
          .width('100%')
          .padding({ top: 16, bottom: 16, left: 16, right: 16 })
          .backgroundColor(Color.White)
          .margin({ top: 8 })

          Column() {
            Text('交互风格')
              .fontSize(16)
              .fontWeight(FontWeight.Medium)
              .fontColor($r('app.color.color_text'))
              .margin({ bottom: 4 })
            Text('小美的回复风格')
              .fontSize(12)
              .fontColor($r('app.color.color_text_muted'))
              .margin({ bottom: 12 })

            Row({ space: 8 }) {
              ['concise', 'detailed', 'humorous'].forEach((value) => {
                Text(this.getStyleName(value))
                  .flexGrow(1)
                  .padding({ top: 12, bottom: 12 })
                  .backgroundColor(this.style === value ? $r('app.color.color_primary') : Color.White)
                  .fontColor(this.style === value ? Color.White : $r('app.color.color_text_secondary'))
                  .borderRadius(8)
                  .fontSize(12)
                  .textAlign(TextAlign.Center)
                  .borderWidth(1)
                  .borderColor(this.style === value ? $r('app.color.color_primary') : $r('app.color.color_border_light'))
                  .onClick(() => {
                    this.onStyleChange(value);
                  })
              })
            }
          }
          .width('100%')
          .padding({ top: 16, bottom: 16 })
          .backgroundColor($r('app.color.color_bg'))
          .margin({ top: 8 })
        }
        .width('100%')
        .padding(16)
      }
      .layoutWeight(1)
    }
    .width('100%')
    .height('100%')
    .backgroundColor($r('app.color.color_bg'))
  }

  getPersonalityIcon(value: string): string {
    const icons: Record<string, string> = {
      gentle: '💖',
      professional: '🎓',
      cheerful: '🌟'
    };
    return icons[value] || '🌸';
  }

  getPersonalityDesc(value: string): string {
    const descs: Record<string, string> = {
      gentle: '像闺蜜一样温柔关怀',
      professional: '专业美妆顾问风格',
      cheerful: '元气满满正能量'
    };
    return descs[value] || '';
  }
}
