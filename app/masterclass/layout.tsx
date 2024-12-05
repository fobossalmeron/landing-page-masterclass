"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { verifyToken } from "@/lib/auth";

export default function MasterClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isValid = await verifyToken();
        setIsAuthorized(isValid);
        
        if (!isValid) {
          router.push('/');
        }
      } catch (error) {
        console.error('Error verificando autenticación:', error);
        setIsAuthorized(false);
        router.push('/');
      }
    };
    
    checkAuth();
  }, [router]);

  // Mostrar nada mientras verificamos la autenticación
  if (isAuthorized === null) {
    return null;
  }

  // Solo renderizar los children si está autorizado
  return isAuthorized ? children : null;
}
