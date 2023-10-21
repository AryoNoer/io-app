"use client";
import AnimatedText from "@/components/animatedtext/animatedText";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[url(/welcome-bg.jpg)] bg-cover flex min-h-screen flex-col items-center md:m-3 md:rounded-lg">
      <div>
        <AnimatedText />
      </div>
    </main>
  );
}
