"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

export function HomeAuthCta() {
  const { user, loading } = useAuth();

  if (loading || user) {
    return null;
  }

  return (
    <Link href="/signup" className="btn-light">
      Create Account
    </Link>
  );
}

