// src/app/dashboard/page.tsx

import AgentChat from "@/app/components/AgentChat"
import ActionTimeline from "@/app/components/ActionTimeline"
import FinalProposal from "@/app/components/FinalProposal"
import AgentStatusBoard from "@/app/components/AgentStatusBoard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-muted p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left: Agent status */}
        <div className="lg:col-span-1">
          <AgentStatusBoard />
        </div>

        {/* Right: Main content */}
        <div className="lg:col-span-3 space-y-6">
          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="chat">🧠 Deliberation Chat</TabsTrigger>
              <TabsTrigger value="actions">⚙️ Action Timeline</TabsTrigger>
              <TabsTrigger value="proposal">📌 Final Proposal</TabsTrigger>
            </TabsList>

            <TabsContent value="chat">
              <AgentChat />
            </TabsContent>

            <TabsContent value="actions">
              <ActionTimeline />
            </TabsContent>

            <TabsContent value="proposal">
              <FinalProposal />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}