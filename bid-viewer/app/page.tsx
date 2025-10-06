"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { BID_LIST } from "../data/bids";
import DataTable from "../components/DataTable";
import Pagination from "../components/Pagination";

const PER_PAGE = 10;

export default function HomePage() {
  const params = useSearchParams();
  const page = Math.max(1, parseInt(params.get("page") ?? "1", 10) || 1);

  const { slice, startIndex } = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return { slice: BID_LIST.slice(start, end), startIndex: start };
  }, [page]);

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>입찰공고 목록 (더미)</h1>
      <p style={{ color: "#666", marginBottom: 16 }}>
        총 {BID_LIST.length}건 · 페이지당 {PER_PAGE}건 · 쿼리스트링{" "}
        <code>?page={page}</code>
      </p>

      <DataTable rows={slice} startIndex={startIndex} />
      <Pagination total={BID_LIST.length} page={page} perPage={PER_PAGE} />
    </main>
  );
}
