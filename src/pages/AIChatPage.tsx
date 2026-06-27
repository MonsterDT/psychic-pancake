import { useState } from 'react';
import { Send, Sparkles, ChefHat, Clock, Apple, Cookie, Cake } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ChatMessage from '@/components/ai/ChatMessage';
import { recipes } from '@/data/recipes';
import type { Recipe } from '@/types';

interface Msg {
  id: string;
  role: 'user' | 'ai';
  content: string;
  recipe?: Recipe | null;
}

const quickPrompts = [
  { icon: Cake, text: '我想做一个生日蛋糕' },
  { icon: Cookie, text: '我有面粉鸡蛋牛奶，能做什么？' },
  { icon: Apple, text: '低糖低脂的烘焙推荐' },
  { icon: Clock, text: '30分钟内能完成的' },
];

export default function AIChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: '1',
      role: 'ai',
      content: '你好！我是烘焙AI助手 🍰\n告诉我你想做什么，我来帮你定制专属配方。\n你可以说："我想做一个巧克力蛋糕"，或者告诉我你有什么食材。',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateAIResponse = (userInput: string): { content: string; recipe?: Recipe | null } => {
    const lower = userInput.toLowerCase();

    if (lower.includes('蛋糕') || lower.includes('cake')) {
      const cakeRecipes = recipes.filter((r) => r.category === 'cake');
      const recipe = cakeRecipes[Math.floor(Math.random() * cakeRecipes.length)];
      return {
        content: `好的！为你推荐一款「${recipe.name}」🍰\n\n这款${recipe.difficulty === 'easy' ? '简单易上手' : recipe.difficulty === 'medium' ? '需要一些技巧' : '有一定挑战'}的${recipe.name}，\n大约需要 ${recipe.time} 分钟，评分 ${recipe.rating} 分。\n\n${recipe.description}\n\n点击下方卡片查看完整配方和详细步骤吧～`,
        recipe,
      };
    }

    if (lower.includes('面包') || lower.includes('吐司') || lower.includes('bread')) {
      const breadRecipes = recipes.filter((r) => r.category === 'bread');
      const recipe = breadRecipes[Math.floor(Math.random() * breadRecipes.length)];
      return {
        content: `来啦！为你找到一款超棒的「${recipe.name}」🥖\n\n${recipe.description}\n\n难度：${recipe.difficulty === 'easy' ? '简单' : recipe.difficulty === 'medium' ? '中等' : '困难'}\n时长：约 ${recipe.time} 分钟\n\n下面是完整配方，快试试看吧！`,
        recipe,
      };
    }

    if (lower.includes('饼干') || lower.includes('曲奇') || lower.includes('cookie')) {
      const cookieRecipes = recipes.filter((r) => r.category === 'cookie');
      const recipe = cookieRecipes[Math.floor(Math.random() * cookieRecipes.length)];
      return {
        content: `饼干爱好者集合！🍪\n\n推荐这款「${recipe.name}」给你～\n${recipe.description}\n\n只需要 ${recipe.time} 分钟，新手也能轻松成功！\n\n看看详细步骤吧 👇`,
        recipe,
      };
    }

    if (lower.includes('面粉') && (lower.includes('鸡蛋') || lower.includes('牛奶'))) {
      const recipe = recipes.find((r) => r.id === 'cake-001') || recipes[0];
      return {
        content: `用面粉、鸡蛋、牛奶可以做好多东西呢！🥳\n\n最经典的就是「${recipe.name}」了——\n✅ 食材简单，家里常备\n✅ 口感轻盈柔软\n✅ 是烘焙入门的必修课\n\n除了戚风蛋糕，你还可以试试：\n• 玛德琳蛋糕\n• 基础面包\n• 简单的饼干\n\n先来试试这款经典戚风吧 👇`,
        recipe,
      };
    }

    if (lower.includes('简单') || lower.includes('新手') || lower.includes('入门')) {
      const easyRecipes = recipes.filter((r) => r.difficulty === 'easy');
      const recipe = easyRecipes[Math.floor(Math.random() * easyRecipes.length)];
      return {
        content: `新手友好推荐来啦！🌟\n\n「${recipe.name}」是非常适合入门的选择：\n✅ 操作简单，不易失败\n✅ 食材常见，容易购买\n✅ ${recipe.time}分钟就能完成\n\n${recipe.description}\n\n快试试看，有任何问题随时问我～`,
        recipe,
      };
    }

    if (lower.includes('巧克力')) {
      const recipe = recipes.find((r) => r.id === 'cake-002') || recipes[0];
      return {
        content: `巧克力控狂喜！🍫\n\n必须试试这款「${recipe.name}」——\n切开瞬间爆浆的满足感，绝对是巧克力爱好者的终极享受！\n\n虽然有一点点挑战，但只要掌握好时间，成功率超高的。\n\n点击卡片看详细做法吧 👇`,
        recipe,
      };
    }

    const recipe = recipes[Math.floor(Math.random() * recipes.length)];
    return {
      content: `我来帮你想想看～ 🤔\n\n不如试试「${recipe.name}」？\n\n${recipe.description}\n\n难度：${recipe.difficulty === 'easy' ? '简单' : recipe.difficulty === 'medium' ? '中等' : '困难'}\n时长：约 ${recipe.time} 分钟\n\n如果这不是你想要的，可以告诉我你的口味偏好、食材限制，或者想要什么类型的烘焙，我再为你推荐！`,
      recipe,
    };
  };

  const handleSend = (text?: string) => {
    const msgText = text || input.trim();
    if (!msgText || isLoading) return;

    const userMsg: Msg = {
      id: Date.now().toString(),
      role: 'user',
      content: msgText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const response = generateAIResponse(msgText);
      const aiMsg: Msg = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: response.content,
        recipe: response.recipe,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsLoading(false);
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-6 h-[calc(100vh-64px)] flex flex-col">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-display text-2xl font-bold text-warm-900">AI 烘焙助手</h1>
          </div>
          <p className="text-sm text-warm-500">说出你的想法，为你定制专属烘焙方案</p>
        </div>

        <div className="flex-1 overflow-y-auto px-2 space-y-4 mb-4 scroll-smooth">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              role={msg.role}
              content={msg.content}
              recipe={msg.recipe}
            />
          ))}

          {isLoading && (
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="bg-white border border-warm-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {messages.length <= 1 && (
          <div className="mb-4">
            <p className="text-xs text-warm-500 mb-3 px-2">试试这些：</p>
            <div className="grid grid-cols-2 gap-2">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt.text)}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-warm-100 rounded-card text-sm text-warm-700 hover:border-primary hover:bg-warm-50 transition-colors text-left disabled:opacity-50"
                >
                  <prompt.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="truncate">{prompt.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-warm-100 shadow-sm p-2">
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="告诉我你想做什么..."
              className="flex-1 resize-none outline-none px-3 py-2 text-sm text-warm-800 max-h-32 min-h-[44px] bg-transparent"
              rows={1}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-warm-400 mt-3">
          免费用户每日 3 次 AI 生成 · 今日剩余 3 次
        </p>
      </div>
    </Layout>
  );
}
