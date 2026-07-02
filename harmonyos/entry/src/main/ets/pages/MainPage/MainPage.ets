@Entry
@Component
struct MainPage {
  @State currentIndex: number = 0;
  private tabs: Array<{ name: string; icon: string; page: string }> = [
    { name: '市集', icon: '🏪', page: '' },
    { name: '魔镜', icon: '🪞', page: '' },
    { name: '闺蜜', icon: '🌸', page: 'pages/XiaomeiChat/XiaomeiChat' },
    { name: '我的', icon: '👤', page: '' }
  ];

  build() {
    Column() {
      Stack() {
        Image($r('app.media.app_icon'))
          .width(100)
          .height(100)
          .margin({ top: 60 })
        Text('妆伴')
          .fontSize(32)
          .fontWeight(FontWeight.Bold)
          .margin({ top: 180 })
          .fontColor($r('app.color.color_text'))
        Text('MakeupPal')
          .fontSize(16)
          .fontColor($r('app.color.color_text_muted'))
          .margin({ top: 220 })
      }
      .layoutWeight(1)

      Column() {
        Column() {
          Text('🌸 美妆闺蜜 - 小美')
            .fontSize(18)
            .fontWeight(FontWeight.Medium)
            .fontColor($r('app.color.color_text'))
            .margin({ bottom: 8 })
          Text('你的专属美妆顾问，随时为你解答')
            .fontSize(14)
            .fontColor($r('app.color.color_text_secondary'))
            .margin({ bottom: 16 })

          Button('开始聊天')
            .width('80%')
            .height(48)
            .backgroundColor($r('app.color.color_primary'))
            .fontColor(Color.White)
            .borderRadius($r('app.float.radius_lg'))
            .onClick(() => {
              router.pushUrl({ url: 'pages/XiaomeiChat/XiaomeiChat' });
            })

          Button('语音唤醒')
            .width('80%')
            .height(48)
            .backgroundColor(Color.White)
            .fontColor($r('app.color.color_primary'))
            .borderRadius($r('app.float.radius_lg'))
            .margin({ top: 12 })
            .borderWidth(2)
            .borderColor($r('app.color.color_primary'))
            .onClick(() => {
              router.pushUrl({ url: 'pages/XiaomeiChat/XiaomeiChat' });
            })
        }
        .backgroundColor($r('app.color.color_bg_card'))
        .padding(24)
        .borderRadius($r('app.float.radius_xl'))
        .shadow({ radius: 8, color: '#00000010', offsetY: 4 })
        .margin({ bottom: 32 })
      }

      TabBar() {
        ForEach(this.tabs, (tab, index) => {
          TabBarItem() {
            Column() {
              Text(tab.icon)
                .fontSize(24)
              Text(tab.name)
                .fontSize(10)
                .margin({ top: 4 })
            }
          }
          .onClick(() => {
            this.currentIndex = index;
            if (tab.page) {
              router.pushUrl({ url: tab.page });
            }
          })
        })
      }
      .backgroundColor(Color.White)
      .height(56)
      .borderRadius({ topLeft: 20, topRight: 20 })
    }
    .width('100%')
    .height('100%')
    .backgroundColor($r('app.color.color_bg'))
  }
}
