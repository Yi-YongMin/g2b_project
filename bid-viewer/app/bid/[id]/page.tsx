// app/bid/[id]/page.tsx
import Link from "next/link";
import { BID_LIST } from "../../../data/bids";

export default function BidDetailPage({ params }: { params: { id: string } }) {
  const item = BID_LIST.find((x) => x.id === params.id);

  if (!item) {
    return (
      <main style={{ padding: 24 }}>
        존재하지 않는 공고입니다. <Link href="/">목록</Link>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <Link href="/">← 목록</Link>
      <h1 style={{ marginTop: 12 }}>{item.title}</h1>
      <ul style={{ lineHeight: 1.8 }}>
        <li>공고 ID: {item.id}</li>
        <li>기관: {item.agency}</li>
        <li>공고일: {item.openDate}</li>
        <li>예산: {item.budget.toLocaleString()} 원</li>
      </ul>
    </main>
  );
}
