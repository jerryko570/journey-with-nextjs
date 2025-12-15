"use client";

import Pagination from "../src/components/Pagination";
import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);

  return (
    <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
  );
}
