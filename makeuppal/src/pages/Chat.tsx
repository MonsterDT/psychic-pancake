import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Clock, Sparkles, Star, Send, Plus, type LucideIcon } from 'lucide-react'
import { useApp } from '../components/AppState'
import { IMAGE, QUICK_REPLIES, RECOMMEND_LOOKS, AI_REPLIES } from '../data/mockData'

type Msg =
  | { id: number; role: 'ai'; kind: 'text'; text: string }
  | { id: number; role: 'user'; kind: 'text'; text: string }
  | { id: number; role: 'ai'; kind: 'cards'; text: string }

let msgId = 0

const INITIAL_MESSAGES: Msg[] = [
  { id: ++msgId, role: 'ai', kind: 'text', text: '嗨～我是你的美妆闺蜜！今天想尝试什么新妆容呢？我可以根据你的脸型和肤色为你推荐哦 💕' },
  { id: ++msgId, role: 'user', kind: 'text', text: '我想找一个适合上班的日常妆容，不要太浓' },
  { id: ++msgId, role: 'ai', kind: 'cards', text: '根据你的脸型分析，推荐你试试这几个清新自然的职场妆容 👇' },
]

export default function Chat() {
  const navigate = useNavigate()
  const { toast } = useApp()
  const [messages, setMessages] = useState<Msg[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const sendAiReply = (userText: string) => {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      // Pick a reply — if user mentions makeup keywords, send cards; otherwise text
      const isMakeupQuery = /妆|脸|色|好看|推荐|适合/.test(userText)
      const reply = AI_REPLIES[Math.floor(Math.random() * AI_REPLIES.length)]
      setMessages((prev) => [
        ...prev,
        { id: ++msgId, role: 'ai', kind: isMakeupQuery ? 'cards' : 'text', text: reply },
      ])
    }, 1100)
  }

  const handleSend = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((prev) => [...prev, { id: ++msgId, role: 'user', kind: 'text', text: trimmed }])
    setInput('')
    sendAiReply(trimmed)
  }

  return (
    <div className="device-frame">
      <main className="flex flex-col flex-1 overflow-hidden">
        {/* Chat Header */}
        <header
          className="sticky top-0 z-50 flex items-center justify-between px-4 shrink-0"
          style={{
            height: 'var(--mp-header-height)',
            background: 'var(--mp-bg-white)',
            borderBottom: '1px solid var(--mp-border-light)',
          }}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center w-9 h-9 rounded-lg"
            style={{ color: 'var(--mp-text-primary)' }}
            aria-label="返回"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[15px]" style={{ fontFamily: 'var(--mp-font-cn)', color: 'var(--mp-text-primary)' }}>
              美妆闺蜜
            </span>
            <Sparkles size={18} style={{ color: 'var(--mp-rose-gold)' }} />
          </div>
          <button
            onClick={() => toast('打开历史会话')}
            className="flex items-center justify-center w-9 h-9 rounded-lg"
            style={{ color: 'var(--mp-text-secondary)' }}
            aria-label="会话历史"
          >
            <Clock size={20} />
          </button>
        </header>

        {/* Chat Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 pt-4 pb-4" style={{ background: 'var(--mp-bg)' }}>
          {messages.map((m) => {
            if (m.role === 'user') {
              return (
                <div key={m.id} className="flex justify-end mb-5 mp-fade-in">
                  <div
                    className="max-w-[75%] px-3.5 py-2.5"
                    style={{
                      background: 'var(--mp-gradient-primary)',
                      borderRadius: 'var(--mp-radius-xl) 4px var(--mp-radius-xl) var(--mp-radius-xl)',
                    }}
                  >
                    <p className="text-[13px] leading-[1.65]" style={{ fontFamily: 'var(--mp-font-cn)', color: 'var(--mp-bg-white)' }}>
                      {m.text}
                    </p>
                  </div>
                </div>
              )
            }
            // AI message
            return (
              <div key={m.id} className="flex gap-2.5 mb-4 mp-fade-in">
                <div className="shrink-0 w-9 h-9 rounded-full overflow-hidden p-[2px]" style={{ background: 'var(--mp-gradient-primary)' }}>
                  <img src={IMAGE.aiAvatar} alt="AI Assistant" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="max-w-[80%]">
                  <div
                    className="px-3.5 py-2.5"
                    style={{
                      background: 'var(--mp-bg-white)',
                      borderRadius: '4px var(--mp-radius-xl) var(--mp-radius-xl) var(--mp-radius-xl)',
                      boxShadow: 'var(--mp-shadow-xs)',
                    }}
                  >
                    <p className="text-[13px] leading-[1.65]" style={{ fontFamily: 'var(--mp-font-cn)', color: 'var(--mp-text-primary)' }}>
                      {m.text}
                    </p>
                  </div>
                  {m.kind === 'cards' && (
                    <div className="flex gap-3 mt-2 overflow-x-auto no-scrollbar pb-1">
                      {RECOMMEND_LOOKS.map((look) => (
                        <div
                          key={look.id}
                          className="shrink-0 overflow-hidden"
                          style={{
                            width: 140,
                            borderRadius: 'var(--mp-radius-lg)',
                            background: 'var(--mp-bg-white)',
                            boxShadow: 'var(--mp-shadow-sm)',
                          }}
                        >
                          <div className="overflow-hidden" style={{ height: 80 }}>
                            <img src={look.cover} alt={look.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-2.5">
                            <p className="text-[12px] font-medium leading-tight mb-1 truncate" style={{ fontFamily: 'var(--mp-font-cn)', color: 'var(--mp-text-primary)' }}>
                              {look.title}
                            </p>
                            <div className="flex items-center gap-0.5 mb-2">
                              <Star size={12} style={{ color: '#E8A838', fill: '#E8A838' }} />
                              <span className="text-[11px]" style={{ fontFamily: 'var(--mp-font-body)', color: 'var(--mp-text-tertiary)' }}>
                                {look.rating}
                              </span>
                            </div>
                            <button
                              onClick={() => navigate('/mirror')}
                              className="w-full text-center text-[11px] font-medium text-white active:scale-95"
                              style={{
                                background: 'var(--mp-gradient-primary)',
                                borderRadius: 'var(--mp-radius-pill)',
                                padding: '5px 0',
                                fontFamily: 'var(--mp-font-cn)',
                                transition: 'transform 0.15s',
                              }}
                            >
                              试试
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {/* Typing indicator */}
          {typing && (
            <div className="flex gap-2.5 mb-4 mp-fade-in">
              <div className="shrink-0 w-9 h-9 rounded-full overflow-hidden p-[2px]" style={{ background: 'var(--mp-gradient-primary)' }}>
                <img src={IMAGE.aiAvatar} alt="AI Assistant" className="w-full h-full rounded-full object-cover" />
              </div>
              <div
                className="px-4 py-3 flex items-center gap-1"
                style={{
                  background: 'var(--mp-bg-white)',
                  borderRadius: '4px var(--mp-radius-xl) var(--mp-radius-xl) var(--mp-radius-xl)',
                  boxShadow: 'var(--mp-shadow-xs)',
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: 'var(--mp-rose-gold)',
                      animation: 'mp-bounce-soft 1s infinite',
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quick Reply Chips */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mt-1">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="shrink-0 text-[12px] whitespace-nowrap px-3.5 py-1.5 active:scale-95"
                style={{
                  fontFamily: 'var(--mp-font-cn)',
                  color: 'var(--mp-text-secondary)',
                  background: 'var(--mp-bg-white)',
                  border: '1px solid var(--mp-border)',
                  borderRadius: 'var(--mp-radius-pill)',
                  transition: 'transform 0.15s',
                }}
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input Bar */}
        <div
          className="sticky bottom-0 flex items-center gap-2.5 px-4 shrink-0"
          style={{
            background: 'var(--mp-bg-white)',
            borderTop: '1px solid var(--mp-border-light)',
            paddingTop: 10,
            paddingBottom: 'calc(10px + var(--mp-safe-bottom))',
          }}
        >
          <button
            onClick={() => toast('添加图片或附件')}
            className="flex items-center justify-center shrink-0 w-11 h-11 rounded-full active:scale-90"
            style={{ background: 'var(--mp-bg)', color: 'var(--mp-rose-gold)', transition: 'transform 0.15s' }}
            aria-label="添加附件"
          >
            <Plus size={20} />
          </button>
          <div
            className="flex-1 flex items-center"
            style={{ height: 50, background: 'var(--mp-bg)', borderRadius: 'var(--mp-radius-pill)', padding: '0 16px' }}
          >
            <input
              type="text"
              placeholder="问我任何美妆问题..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend(input)
              }}
              className="flex-1 bg-transparent text-[13px] outline-none"
              style={{ fontFamily: 'var(--mp-font-cn)', color: 'var(--mp-text-primary)' }}
            />
          </div>
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim()}
            className="flex items-center justify-center shrink-0 w-11 h-11 rounded-full text-white active:scale-90 disabled:opacity-50"
            style={{
              background: 'var(--mp-gradient-primary)',
              transition: 'all 0.15s',
            }}
            aria-label="发送"
          >
            <Send size={20} />
          </button>
        </div>
      </main>
    </div>
  )
}
