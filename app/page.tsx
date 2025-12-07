import Dropdown from "@/src/components/Dropdown";

export default function Home() {
  return (
    <main className="space-y-3">
      <h1>TEST</h1>
      <div className="space-y-3">
        <button className="btn btn-primary btn-lg">큰 버튼</button>
        <button className="btn btn-disabled btn-md">중간 버튼</button>
        <button className="btn btn-outline btn-sm">작은 버튼</button>
      </div>

      <div className="space-y-3">
        <input className="input" placeholder="입력하세요"></input>
        <input className="input" disabled placeholder="입력하세요"></input>
        <input className="input input-error" placeholder="입력하세요"></input>
      </div>
      <Dropdown status="default" />
    </main>
  );
}
