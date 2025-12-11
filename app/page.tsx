import Modal from "@/src/components/Modal";

export default function Home() {
  return (
    <main className="space-y-3">
      <h1>TEST</h1>
      <Modal
        title="회원가입 완료"
        btnText="완료"
        cancelText="취소"
        type="one-btn"
      ></Modal>
    </main>
  );
}
