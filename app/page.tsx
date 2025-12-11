import Badge from "@/src/components/Badge";

export default function Home() {
  return (
    <main className="space-y-3">
      <h1>TEST</h1>
      <div className="flex items-center gap-2">
        <Badge status="success" label="승인완료" />
        <Badge status="pending" label="대기중" />
        <Badge status="reject" label="승인거절" />
      </div>
    </main>
  );
}
