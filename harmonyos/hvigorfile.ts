import { HvigorPlugin, HvigorBuildService } from '@ohos/hvigor';
import { ohosPlugin } from '@ohos/hvigor-ohos-plugin';

export default {
  plugins: [ohosPlugin],
  build: {
    tasks: {},
    buildService: HvigorBuildService,
    defaultTask: 'assembleHap'
  }
};
