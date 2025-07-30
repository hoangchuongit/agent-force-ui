"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface MessageProps {
  message: {
    role: "user" | "agent"
    name: string
    content: string
    timestamp?: string
  }
}

export default function ChatMessage({ message }: MessageProps) {
  const isUser = message.role === "user"

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={cn("flex items-end gap-3", isUser ? "justify-end" : "justify-start")}
    >
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
        </Avatar>
      )}

      <div className="flex flex-col max-w-[80%]">
        <div
          className={cn(
            "rounded-xl px-4 py-2 text-sm whitespace-pre-wrap",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          {message.content}
        </div>
        <span className="text-xs text-muted-foreground mt-1">
          {message.timestamp}
        </span>
      </div>

      {isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      )}
    </motion.div>
  )
}
