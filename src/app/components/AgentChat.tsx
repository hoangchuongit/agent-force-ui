// components/AgentChat.tsx

import { Card, CardContent } from "@/components/ui/card"

const mockMessages = [
  {
    agent: "PR Agent",
    round: 3,
    message: "Chúng ta cần minh bạch, thấu cảm và hướng dẫn rõ ràng cho khách hàng.",
  },
  {
    agent: "Finance Agent",
    round: 3,
    message: "Chi phí xử lý cần hợp lý, tránh gây hoang mang kéo dài.",
  },
]

export default function AgentChat() {
  return (
    <div className="space-y-3">
      {mockMessages.map((msg, idx) => (
        <Card key={idx}>
          <CardContent className="p-4 space-y-1">
            <div className="text-sm font-medium">{msg.agent} – Vòng {msg.round}</div>
            <p className="text-sm text-muted-foreground">{msg.message}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
