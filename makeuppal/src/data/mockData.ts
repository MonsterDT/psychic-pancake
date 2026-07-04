// ── Mock data for MakeupPal app ──

export const IMAGE = {
  banner: '/assets/image_0_yi19x4.jpg',
  tutorial: '/assets/image_1_yi19x4.jpg',
  avatar: '/assets/image_2_yi19x4.jpg',
  look3: '/assets/image_3_yi19x4.jpg',
  look4: '/assets/image_4_yi19x4.jpg',
  look5: '/assets/image_5_yi19x4.jpg',
  camera: '/assets/image_6_yi19x4.jpg',
  product: '/assets/image_7_yi19x4.jpg',
  aiAvatar: '/assets/image_8_yi19x4.jpg',
  userAvatar: '/assets/image_9_yi19x4.jpg',
}

export type Feed = {
  id: number
  title: string
  cover: string
  author: string
  avatar: string
  likes: string
}

export const FEEDS: Feed[] = [
  { id: 1, title: '秋冬暖色妆容教程', cover: IMAGE.tutorial, author: '美妆小鲸', avatar: IMAGE.avatar, likes: '2.3k' },
  { id: 2, title: '通勤自然底妆技巧', cover: IMAGE.tutorial, author: '桃子酱', avatar: IMAGE.avatar, likes: '1.8k' },
  { id: 3, title: '蜜桃腮红画法解析', cover: IMAGE.tutorial, author: '林小鹿', avatar: IMAGE.avatar, likes: '956' },
  { id: 4, title: '立体修容保姆级教程', cover: IMAGE.tutorial, author: '妆娘Yuki', avatar: IMAGE.avatar, likes: '3.1k' },
  { id: 5, title: '韩系清透底妆教程', cover: IMAGE.tutorial, author: '柠檬酱', avatar: IMAGE.avatar, likes: '1.4k' },
  { id: 6, title: '氛围感眼妆画法', cover: IMAGE.tutorial, author: '草莓喵', avatar: IMAGE.avatar, likes: '2.7k' },
]

export type Look = {
  id: number
  title: string
  cover?: string
  gradient?: string
  tags: { label: string; color: string }[]
  likes: string
  difficulty: '简单' | '中等' | '进阶'
  difficultyColor: string
  category: string
  isTutorial?: boolean
  author?: string
  views?: string
}

export const LOOKS: Look[] = [
  {
    id: 1, title: '春日桃花妆', cover: IMAGE.look5,
    tags: [{ label: '#桃花', color: 'sunset' }, { label: '#日常', color: 'rose-gold' }],
    likes: '2.3k', difficulty: '简单', difficultyColor: 'success', category: 'daily',
    author: '小桃老师', views: '2.3k',
  },
  {
    id: 2, title: '蜜桃甜心妆', cover: IMAGE.look5,
    tags: [{ label: '#蜜桃', color: 'sunset' }, { label: '#日常', color: 'rose-gold' }],
    likes: '2.3k', difficulty: '简单', difficultyColor: 'success', category: 'daily',
  },
  {
    id: 3, title: '晚霞玫瑰妆', cover: IMAGE.look4,
    tags: [{ label: '#玫瑰', color: 'sunset' }],
    likes: '1.8k', difficulty: '中等', difficultyColor: 'warning', category: 'sweet',
  },
  {
    id: 4, title: '复古红唇妆', cover: IMAGE.look3,
    tags: [{ label: '#复古', color: 'rose-gold' }, { label: '#红唇', color: 'sunset' }, { label: '#约会', color: 'champagne' }],
    likes: '4.1k', difficulty: '进阶', difficultyColor: 'error', category: 'retro',
  },
  {
    id: 5, title: '通勤裸妆教程', cover: IMAGE.tutorial,
    tags: [{ label: '#职场', color: 'sunset' }, { label: '#裸妆', color: 'rose-gold' }],
    likes: '956', difficulty: '简单', difficultyColor: 'success', category: 'work',
    isTutorial: true,
  },
  {
    id: 6, title: '元气满满妆', gradient: 'var(--mp-gradient-card-img)',
    tags: [{ label: '#元气', color: 'sunset' }],
    likes: '3.2k', difficulty: '简单', difficultyColor: 'success', category: 'fresh',
  },
  {
    id: 7, title: '派对女王妆', gradient: 'var(--mp-gradient-sunset)',
    tags: [{ label: '#派对', color: 'rose-gold' }, { label: '#闪亮', color: 'sunset' }],
    likes: '5.7k', difficulty: '进阶', difficultyColor: 'error', category: 'party',
  },
  {
    id: 8, title: '温柔奶茶妆', gradient: 'var(--mp-gradient-soft)',
    tags: [{ label: '#温柔', color: 'champagne' }, { label: '#约会', color: 'rose-gold' }],
    likes: '1.5k', difficulty: '简单', difficultyColor: 'success', category: 'date',
  },
  {
    id: 9, title: '酷辣机车妆', gradient: 'var(--mp-gradient-gp)',
    tags: [{ label: '#甜酷', color: 'rose-gold' }],
    likes: '2.8k', difficulty: '中等', difficultyColor: 'warning', category: 'sweet',
  },
  {
    id: 10, title: '清晨玫瑰妆', cover: IMAGE.look4,
    tags: [{ label: '#玫瑰', color: 'sunset' }, { label: '#元气', color: 'rose-gold' }],
    likes: '1.9k', difficulty: '简单', difficultyColor: 'success', category: 'fresh',
  },
]

export const LIBRARY_CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'daily', label: '日常' },
  { id: 'sweet', label: '甜酷' },
  { id: 'retro', label: '复古' },
  { id: 'fresh', label: '元气' },
  { id: 'work', label: '职场' },
  { id: 'date', label: '约会' },
  { id: 'party', label: '派对' },
] as const

export type Product = {
  id: number
  name: string
  cover: string
  price: number
  originalPrice?: number
  sold: string
  badge?: { label: string; gradient: string }
  category: 'skincare' | 'makeup' | 'perfume' | 'tools' | 'personal' | 'limited'
}

export const PRODUCTS: Product[] = [
  { id: 1, name: '光感透亮精华液 30ml', cover: IMAGE.product, price: 299, originalPrice: 459, sold: '2.3k', badge: { label: '热门', gradient: 'primary' }, category: 'skincare' },
  { id: 2, name: '丝绒雾面唇釉 蜜桃色', cover: IMAGE.product, price: 168, sold: '5.1k', badge: { label: '新品', gradient: 'sunset' }, category: 'makeup' },
  { id: 3, name: '玫瑰保湿面膜 10片装', cover: IMAGE.product, price: 89, originalPrice: 129, sold: '8.7k', badge: { label: 'GP专享', gradient: 'gp' }, category: 'skincare' },
  { id: 4, name: '落日晚霞九色眼影盘', cover: IMAGE.product, price: 239, originalPrice: 359, sold: '1.2k', badge: { label: '热门', gradient: 'primary' }, category: 'makeup' },
  { id: 5, name: '清透水感防晒霜 SPF50', cover: IMAGE.product, price: 199, sold: '3.6k', badge: { label: '新品', gradient: 'sunset' }, category: 'skincare' },
  { id: 6, name: '持久定妆喷雾 100ml', cover: IMAGE.product, price: 129, originalPrice: 189, sold: '4.0k', badge: { label: 'GP专享', gradient: 'gp' }, category: 'makeup' },
  { id: 7, name: '丝绒粉底气垫', cover: IMAGE.product, price: 219, originalPrice: 299, sold: '6.5k', badge: { label: '热门', gradient: 'primary' }, category: 'makeup' },
  { id: 8, name: '玫瑰香水 30ml', cover: IMAGE.product, price: 359, sold: '1.8k', badge: { label: '新品', gradient: 'sunset' }, category: 'perfume' },
]

export const MALL_CATEGORIES = [
  { id: 'skincare', label: '护肤', icon: 'droplets', active: true },
  { id: 'makeup', label: '彩妆', icon: 'sparkles', active: false },
  { id: 'perfume', label: '香水', icon: 'wind', active: false },
  { id: 'tools', label: '工具', icon: 'paintbrush', active: false },
  { id: 'personal', label: '个护', icon: 'heart', active: false },
  { id: 'limited', label: '限定', icon: 'gift', active: false },
] as const

export const MAKEUP_CATEGORIES = [
  { id: 'base', label: '底妆', icon: 'circle' },
  { id: 'eye', label: '眼妆', icon: 'eye' },
  { id: 'lip', label: '唇妆', icon: 'heart' },
  { id: 'blush', label: '腮红', icon: 'palette' },
  { id: 'contour', label: '修容', icon: 'sun' },
] as const

export const COLOR_SWATCHES = [
  { id: 1, color: '#F5D5C0', name: '丝绒粉底气垫', brand: 'MakeupPal Studio' },
  { id: 2, color: '#E8B89A', name: '蜜桃珊瑚唇釉', brand: 'Peach Lab' },
  { id: 3, color: '#D4966A', name: '焦糖奶茶唇泥', brand: 'Rose Atelier' },
  { id: 4, color: '#C07850', name: '复古红唇釉', brand: 'Velvet Co.' },
  { id: 5, color: '#A85E3A', name: '深棕玫瑰唇釉', brand: 'Sunset Studio' },
]

export const QUICK_REPLIES = ['自然妆', '裸妆', '通勤妆', '伪素颜', '元气妆']

// Pre-canned AI replies for the chat demo
export const AI_REPLIES = [
  '根据你的脸型分析，推荐你试试这几个清新自然的职场妆容 👇',
  '我帮你筛选了几个适合约会场合的妆容，看看喜不喜欢～',
  '这款妆容非常适合你的肤色哦！要不要试试焕新虚拟试妆？',
  '已为你保存到收藏夹，可以稍后在「我的」页面查看 💕',
  '这款产品的色号很适合你的肤色，自然又显气色～',
]

export const RECOMMEND_LOOKS = [
  { id: 1, title: '职场裸妆', cover: IMAGE.tutorial, rating: '4.8' },
  { id: 2, title: '清新通勤妆', cover: IMAGE.tutorial, rating: '4.8' },
  { id: 3, title: '优雅 OL 妆', cover: IMAGE.tutorial, rating: '4.8' },
]

export const PROFILE_ACTIVITIES = [
  { id: 1, icon: 'sparkles', gradient: 'linear-gradient(135deg, var(--mp-peach), var(--mp-rose-light))', iconColor: 'var(--mp-rose-dark)', text: '创建了新妆容「夏日蜜桃妆」', time: '3小时前' },
  { id: 2, icon: 'refresh-cw', gradient: 'linear-gradient(135deg, var(--mp-champagne), var(--mp-sunset))', iconColor: 'var(--mp-rose-dark)', text: '完成焕新体验「晚宴精致妆」', time: '昨天' },
  { id: 3, icon: 'heart', gradient: 'linear-gradient(135deg, var(--mp-sunset), var(--mp-peach))', iconColor: 'white', text: '收藏了「韩系清透底妆教程」', time: '3天前' },
]

export const PROFILE_MENU = [
  { id: 'my-looks', label: '我的妆容', icon: 'sparkles', gradient: 'linear-gradient(135deg, var(--mp-peach), var(--mp-rose-light))', iconColor: 'var(--mp-rose-dark)' },
  { id: 'refresh-history', label: '焕新记录', icon: 'refresh-cw', gradient: 'linear-gradient(135deg, var(--mp-champagne), var(--mp-rose-light))', iconColor: 'var(--mp-rose-dark)' },
  { id: 'favorites', label: '收藏夹', icon: 'heart', gradient: 'linear-gradient(135deg, var(--mp-sunset), var(--mp-peach))', iconColor: 'white' },
  { id: 'vip', label: '会员中心', icon: 'crown', gradient: 'linear-gradient(135deg, var(--mp-champagne), var(--mp-sunset))', iconColor: 'var(--mp-rose-dark)' },
  { id: 'skin', label: '皮肤档案', icon: 'scan-face', gradient: 'linear-gradient(135deg, var(--mp-rose-light), var(--mp-peach))', iconColor: 'var(--mp-rose-dark)' },
  { id: 'settings', label: '设置', icon: 'settings', gradient: 'linear-gradient(135deg, var(--mp-border-light), var(--mp-rose-light))', iconColor: 'var(--mp-text-tertiary)' },
] as const
