import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 bg-cyan-950">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={200}
        height={200}
        className="w-36 animate-spin"
      />
      <div className="text-white text-4xl text-center">IPTV Player</div>
    </main>
  );
}
