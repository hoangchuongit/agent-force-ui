// components/ActionTimeline.tsx

import { Card, CardContent } from "@/components/ui/card"

const mockActions = [
  {
    time: "12:45:23",
    agent: "Ops Agent",
    action: "create_ticket",
    content: "Tạo ticket phản ứng nhanh.",
    status: "✅ Hoàn tất",
  },
  {
    time: "12:45:25",
    agent: "PR Agent",
    action: "send_email",
    content: "Thông báo quy trình xử lý khủng hoảng.",
    status: "🕓 Đang xử lý",
  },
]

export default function ActionTimeline() {
  return (
    <div className="space-y-3">
      {mockActions.map((item, idx) => (
        <Card key={idx}>
          <CardContent className="p-4 space-y-1">
            <div className="text-sm text-muted-foreground">{item.time} – {item.agent}</div>
            <div className="text-sm font-medium">🔧 {item.action}: {item.content}</div>
            <div className="text-xs">{item.status}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}