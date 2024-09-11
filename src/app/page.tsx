"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/login">Go to login page</Link>
      <p>This is the home page.</p>
    </div>
  )
}
