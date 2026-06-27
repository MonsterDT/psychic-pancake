import { ChefHat } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-semibold text-white">
                烘焙AI宝典
              </span>
            </div>
            <p className="text-warm-400 text-sm leading-relaxed max-w-sm">
              让每个人都能轻松享受烘焙的乐趣。AI智能配方定制，分步跟做引导，从新手到大师的成长之路。
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">探索</h4>
            <ul className="space-y-2 text-sm text-warm-400">
              <li><a href="#" className="hover:text-primary transition-colors">热门食谱</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">烘焙课堂</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI助手</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">社区作品</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">关于</h4>
            <ul className="space-y-2 text-sm text-warm-400">
              <li><a href="#" className="hover:text-primary transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">用户协议</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-800 mt-10 pt-8 text-center text-sm text-warm-500">
          <p>© 2026 烘焙AI宝典. 用AI点亮你的烘焙生活.</p>
        </div>
      </div>
    </footer>
  );
}
