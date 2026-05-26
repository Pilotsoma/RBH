"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  size?: number;
  className?: string;
}

export default function LogoImage({ size = 48, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className={`flex items-center justify-center text-2xl ${className}`} style={{ width: size, height: size }}>👑</span>;
  }

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/logo.png"
        alt="Royal Biryani House logo"
        fill
        className="object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
