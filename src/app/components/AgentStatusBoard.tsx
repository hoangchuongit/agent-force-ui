// components/AgentStatusBoard.tsx

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const agents = [
  { name: "PR Agent", role: "PR", status: "Đang phản biện", round: 3 },
  { name: "Legal Agent", role: "Legal", status: "Đã đồng thuận", round: 3 },
  { name: "Ops Agent", role: "Ops", status: "Đang xử lý action", round: 3 },
  { name: "Finance Agent", role: "Finance", status: "Phản đối", round: 3 },
  { name: "Critical Agent", role: "Critical", status: "Phản biện sâu", round: 3 },
]

export default function AgentStatusBoard() {
  return (
    <div className="space-y-3">
      {agents.map((agent, idx) => (
        <Card key={idx}>
          <CardContent className="flex items-center gap-4 p-4">
            <Avatar><AvatarFallback>{agent.role.charAt(0)}</AvatarFallback></Avatar>
            <div>
              <div className="font-medium text-sm">{agent.name}</div>
              <div className="text-xs text-muted-foreground">{agent.status} – vòng {agent.round}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}