import { User, Heart, Settings, Bell, ChevronRight, Star, Sparkles, BookOpen } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useFavoritesStore } from '@/store/favorites';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { favorites } = useFavoritesStore();

  const menuItems = [
    { icon: Heart, label: '我的收藏', value: `${favorites.length} 个`, onClick: () => navigate('/favorites') },
    { icon: BookOpen, label: '烘焙课堂', value: '免费课程', onClick: () => {} },
    { icon: Star, label: '我的作品', value: '0 个', onClick: () => {} },
    { icon: Sparkles, label: '会员中心', value: '免费版', onClick: () => {} },
    { icon: Bell, label: '消息通知', value: '', onClick: () => {} },
    { icon: Settings, label: '设置', value: '', onClick: () => {} },
  ];

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-8 animate-fade-in">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-container p-8 text-white mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold mb-1">烘焙爱好者</h2>
              <p className="text-white/80 text-sm">免费版 · 每日 3 次 AI 生成</p>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
            <div className="text-center">
              <p className="text-2xl font-bold">{favorites.length}</p>
              <p className="text-xs text-white/70">收藏</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-white/70">已完成</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-white/70">AI次数</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-card shadow-sm border border-warm-100 overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full flex items-center gap-4 px-6 py-4 hover:bg-warm-50 transition-colors border-b border-warm-50 last:border-0 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-warm-600" />
              </div>
              <span className="flex-1 font-medium text-warm-800">{item.label}</span>
              {item.value && (
                <span className="text-sm text-warm-500">{item.value}</span>
              )}
              <ChevronRight className="w-4 h-4 text-warm-400" />
            </button>
          ))}
        </div>

        <div className="mt-6 bg-warm-50 rounded-card p-6 border border-warm-100">
          <h3 className="font-semibold text-warm-900 mb-2">升级会员</h3>
          <p className="text-sm text-warm-600 mb-4">
            解锁无限AI生成、设备温度适配、失败诊断等高级功能
          </p>
          <button className="w-full btn-primary">
            立即升级 ¥19.9/月
          </button>
        </div>

        <p className="text-center text-xs text-warm-400 mt-8">
          烘焙AI宝典 v1.0.0 · Demo版本
        </p>
      </div>
    </Layout>
  );
}
