// components/FinalProposal.tsx

import { Card, CardContent } from "@/components/ui/card"

const finalProposal = `
1. Thành lập đội phản ứng nhanh.
2. Gửi thông báo cho khách hàng.
3. Tuân thủ quy trình báo cáo rò rỉ.
4. Giảm thiểu tổn thất và khôi phục hệ thống.`

export default function FinalProposal() {
  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <div className="font-semibold text-sm">📌 Đề xuất cuối cùng</div>
        <pre className="text-sm whitespace-pre-wrap text-muted-foreground">{finalProposal}</pre>
      </CardContent>
    </Card>
  )
}
