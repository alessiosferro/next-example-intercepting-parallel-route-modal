"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-6xl font-bold">Casa</h1>
      <Link className="text-blue-600" href="/bar">Vai al bar</Link>
    </div>
  );
}
