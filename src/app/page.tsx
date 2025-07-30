"use client"

// src/app/page.tsx

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import ChatMessage from "@/components/chat-message"

interface Message {
  role: "user" | "agent"
  name: string
  content: string
  timestamp?: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const sendMessage = async () => {
    if (!input.trim()) return
    const newMessage: Message = {
      role: "user",
      name: "Bạn",
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages((prev) => [...prev, newMessage])
    setInput("")
    setLoading(true)
    setIsTyping(true)

    const res = await fetch("/api/send-prompt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    })
    const data = await res.json()
    const typedMessages = data.messages.map((m: any) => ({
      ...m,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }))
    setMessages((prev) => [...prev, ...typedMessages])
    setLoading(false)
    setIsTyping(false)
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  return (
    <main className="flex h-screen overflow-hidden">
      {/* Sidebar toggleable sau này */}
      <aside className="hidden md:block w-64 border-r bg-muted px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">AgentForce</h2>
        <ul className="space-y-2 text-sm">
          <li className="text-muted-foreground">New chat</li>
          <li className="text-muted-foreground">Lịch sử...</li>
        </ul>
      </aside>

      <div className="flex flex-col flex-1 bg-background">
        {/* Intro message nếu chưa chat */}
        {messages.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <h1 className="text-2xl font-semibold text-center mb-4">Chào bạn 👋<br />Tôi có thể giúp gì cho bạn?</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="w-full max-w-xl flex gap-2"
            >
              <Input
                className="h-12"
                placeholder="Nhập tình huống..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button type="submit" className="h-12 px-6" disabled={loading || !input.trim()}>
                Gửi
              </Button>
            </form>
          </div>
        )}

        {/* Tin nhắn sau khi gửi */}
        {messages.length > 0 && (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-6" ref={scrollRef}>
              <div className="max-w-2xl mx-auto space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((msg, idx) => (
                    <ChatMessage key={idx} message={msg} />
                  ))}
                </AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end gap-3 justify-start"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>B</AvatarFallback>
                    </Avatar>
                    <div className="rounded-xl px-4 py-2 bg-muted max-w-[80%]">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:.1s]" />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:.3s]" />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:.5s]" />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={bottomRef} />
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="border-t bg-background px-4 py-3"
            >
              <div className="max-w-2xl mx-auto flex gap-2">
                <Input
                  className="flex-1 h-10"
                  placeholder="Nhập tình huống khủng hoảng..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                />
                <Button type="submit" className="h-10 px-6" disabled={loading || !input.trim()}>
                  Gửi
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  )
}
