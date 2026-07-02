@Entry
@Component
struct XiaomeiChat {
  @State messages: Array<{ type: string; content: string }> = [];
  @State inputText: string = '';
  @State isVoiceActive: boolean = false;
  private voiceService = XiaomeiVoiceService.getInstance();
  private settingsService = XiaomeiSettingsService.getInstance();

  aboutToAppear(): void {
    this.messages = [
      { type: 'ai', content: '你好呀！我是小美，你的美妆闺蜜~ 有什么可以帮你的？🌸' }
    ];
    this.setupVoiceCallbacks();
  }

  aboutToDisappear(): void {
    this.voiceService.stopListening();
  }

  setupVoiceCallbacks(): void {
    this.voiceService.setOnWakeUpCallback(() => {
      promptAction.showToast({ message: '小美已唤醒！' });
    });

    this.voiceService.setOnCommandCallback((command: string) => {
      this.sendMessage(command);
    });
  }

  sendMessage(content: string): void {
    if (!content.trim()) return;

    this.messages.push({ type: 'user', content });
    this.inputText = '';

    setTimeout(() => {
      const reply = this.generateReply(content);
      this.messages.push({ type: 'ai', content: reply });
    }, 800);
  }

  generateReply(input: string): string {
    const settings = this.settingsService.getSettings();
    const personality = settings.personality;

    const replies: Record<string, Record<string, string>> = {
      gentle: {
        default: '亲爱的，别担心~ 小美来帮你分析一下！💕',
        makeup: '亲爱的，妆容方面我可以给你一些温柔的建议哦~ 🌸',
        skincare: '护肤要慢慢来，小美陪你一起变美！🧴',
        help: '有什么困扰都可以告诉我，小美会一直陪着你的~ 💖'
      },
      professional: {
        default: '好的，让我为你提供专业的美妆建议。🎓',
        makeup: '根据你的需求，我推荐以下彩妆方案：💄',
        skincare: '从专业角度分析，你的护肤方案应该这样调整：🧴',
        help: '我可以为你提供专业的美妆咨询服务。需要哪方面的帮助？'
      },
      cheerful: {
        default: '好嘞！让我们一起美美哒！🌟',
        makeup: '哇，化妆好有趣！让我来教你几招！💄',
        skincare: '护肤是变美的第一步，冲鸭！🧴',
        help: '哈哈，有什么尽管问！小美随时待命！✨'
      }
    };

    const keywords = ['彩妆', '化妆', '妆容', '口红', '眼影', '粉底'];
    if (keywords.some(k => input.includes(k))) {
      return replies[personality]?.makeup || replies[personality]?.default;
    }

    const skinKeywords = ['护肤', '保湿', '补水', '面霜', '精华', '洗面奶'];
    if (skinKeywords.some(k => input.includes(k))) {
      return replies[personality]?.skincare || replies[personality]?.default;
    }

    if (input.includes('帮助') || input.includes('帮我')) {
      return replies[personality]?.help || replies[personality]?.default;
    }

    return replies[personality]?.default || '好的，我来帮你分析一下~ 🌸';
  }

  build() {
    Column() {
      Row() {
        Image($r('app.media.app_icon'))
          .width(48)
          .height(48)
          .borderRadius(24)

        Column() {
          Text('🌸 小美')
            .fontSize(18)
            .fontWeight(FontWeight.Medium)
            .fontColor(Color.White)
          Text('美妆闺蜜')
            .fontSize(12)
            .fontColor(Color.White)
            .opacity(0.8)
        }
        .margin({ left: 12 })

        Blank()

        Button('⚙️')
          .width(44)
          .height(44)
          .backgroundColor(Color.White)
          .opacity(0.3)
          .borderRadius(22)
          .onClick(() => {
            router.pushUrl({ url: 'pages/XiaomeiSettings/XiaomeiSettings' });
          })

        Button(this.isVoiceActive ? '🔇' : '🎤')
          .width(44)
          .height(44)
          .backgroundColor(Color.White)
          .opacity(0.3)
          .borderRadius(22)
          .margin({ right: 12 })
          .onClick(async () => {
            if (this.isVoiceActive) {
              await this.voiceService.stopListening();
              this.isVoiceActive = false;
            } else {
              await this.voiceService.startListening();
              this.isVoiceActive = true;
            }
          })
      }
      .width('100%')
      .padding({ left: 16, right: 16, top: 20, bottom: 12 })
      .backgroundColor($r('app.color.color_primary'))

      Scroll() {
        Column() {
          ForEach(this.messages, (msg, index) => {
            Row({ space: 12 }) {
              if (msg.type === 'ai') {
                Image($r('app.media.app_icon'))
                  .width(40)
                  .height(40)
                  .borderRadius(20)
                Column() {
                  Text(msg.content)
                    .padding({ left: 16, right: 16, top: 10, bottom: 10 })
                    .backgroundColor(Color.White)
                    .borderRadius({ topLeft: 4, topRight: 16, bottomLeft: 16, bottomRight: 16 })
                    .fontColor($r('app.color.color_text'))
                    .maxWidth('75%')
                }
                .alignItems(HorizontalAlign.Start)
              } else {
                Blank()
                Column() {
                  Text(msg.content)
                    .padding({ left: 16, right: 16, top: 10, bottom: 10 })
                    .backgroundColor($r('app.color.color_primary'))
                    .borderRadius({ topLeft: 16, topRight: 4, bottomLeft: 16, bottomRight: 16 })
                    .fontColor(Color.White)
                    .maxWidth('75%')
                }
                .alignItems(HorizontalAlign.End)
              }
            }
            .width('100%')
            .margin({ bottom: 16 })
          })
        }
        .width('100%')
        .padding(16)
      }
      .layoutWeight(1)

      Row({ space: 12 }) {
        TextField({ placeholder: '和小美聊聊...' })
          .width('70%')
          .height(48)
          .backgroundColor(Color.White)
          .borderRadius(24)
          .padding({ left: 20, right: 20 })
          .onChange((value: string) => {
            this.inputText = value;
          })
          .onSubmit(() => {
            this.sendMessage(this.inputText);
          })

        Button('发送')
          .width(80)
          .height(48)
          .backgroundColor($r('app.color.color_primary'))
          .fontColor(Color.White)
          .borderRadius(24)
          .onClick(() => {
            this.sendMessage(this.inputText);
          })
      }
      .width('100%')
      .padding({ left: 16, right: 16, bottom: 20 })
    }
    .width('100%')
    .height('100%')
    .backgroundColor($r('app.color.color_bg'))
  }
}
