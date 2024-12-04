"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { verifyToken } from "@/lib/auth";

export default function MasterClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const isValid = await verifyToken();
      if (!isValid) {
        router.push('/');
      }
    };
    
    checkAuth();
  }, [router]);

  return <>{children}</>;
}
