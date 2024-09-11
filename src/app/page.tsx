"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold">Home</h1>
      <Link className="text-blue-600" href="/bar">Go to bar</Link>
    </>
  )
}
