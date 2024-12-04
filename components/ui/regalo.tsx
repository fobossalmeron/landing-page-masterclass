"use client";

import Image from "next/image";

export function Regalo() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src="/img/regalo.png"
          alt="Design guide preview"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="absolute -right-6 -top-6 bg-blue-600 text-white w-32 h-32 rounded-full flex items-center justify-center text-xl font-bold border-4 border-white text-center p-6">
        Regalo extra
      </div>
    </div>
  );
} 