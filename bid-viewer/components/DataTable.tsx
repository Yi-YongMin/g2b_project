"use client";

import Link from "next/link";
import { BidItem } from "../types";

type Props = {
  rows: BidItem[];
  startIndex?: number;
};

export default function DataTable({ rows, startIndex = 0 }: Props) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["#", "공고명", "기관", "공고일", "예산(원)"].map((h) => (
              <th
                key={h}
                style={{
                  borderBottom: "1px solid #ddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id}>
              <td
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  padding: "8px",
                  width: 60,
                }}
              >
                {startIndex + i + 1}
              </td>
              <td style={{ borderBottom: "1px solid #f0f0f0", padding: "8px" }}>
                <Link href={`/bid/${r.id}`} style={{ textDecoration: "none" }}>
                  {r.title}
                </Link>
              </td>
              <td
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  padding: "8px",
                  width: 140,
                }}
              >
                {r.agency}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  padding: "8px",
                  width: 120,
                }}
              >
                {r.openDate}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  padding: "8px",
                  width: 160,
                }}
              >
                {r.budget.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
