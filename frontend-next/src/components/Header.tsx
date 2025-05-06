"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="p-5 border-b-2">
      <nav className="flex flex-row justify-between w-52">
        <button type="button" onClick={() => router.push("/")}>
          Home
        </button>
        <button type="button" onClick={() => router.push("/trpc")}>
          TRPC
        </button>
      </nav>
    </div>
  );
}
