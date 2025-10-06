"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  total: number;
  page: number;
  perPage: number;
};

export default function Pagination({ total, page, perPage }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(total / perPage));

  const goto = (p: number) => {
    const next = Math.min(totalPages, Math.max(1, p));
    const newParams = new URLSearchParams(params.toString());
    newParams.set("page", String(next));
    router.push(`/?${newParams.toString()}`);
  };

  return (
    <div
      style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12 }}
    >
      <button onClick={() => goto(1)} disabled={page <= 1}>
        ≪
      </button>
      <button onClick={() => goto(page - 1)} disabled={page <= 1}>
        〈
      </button>
      <span>
        Page {page} / {totalPages}
      </span>
      <button onClick={() => goto(page + 1)} disabled={page >= totalPages}>
        〉
      </button>
      <button onClick={() => goto(totalPages)} disabled={page >= totalPages}>
        ≫
      </button>
    </div>
  );
}
