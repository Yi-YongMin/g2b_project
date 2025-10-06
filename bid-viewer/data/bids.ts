// data/bids.ts
import { BidItem } from "../types";

function makeItem(n: number): BidItem {
  const day = String((n % 28) + 1).padStart(2, "0");
  return {
    id: String(100000 + n),
    title: `입찰공고 샘플 ${n}`,
    agency: ["조달청", "서울시", "부산시", "경기도"][n % 4],
    openDate: `2025-09-${day}`,
    budget: 10000000 + n * 123456,
  };
}

export const BID_LIST: BidItem[] = Array.from({ length: 57 }, (_, i) =>
  makeItem(i + 1)
).sort((a, b) => (a.openDate < b.openDate ? 1 : -1));
