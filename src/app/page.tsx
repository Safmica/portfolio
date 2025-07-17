import { Navbar } from "@/components/shared/navbar";
import { Index } from "@/components/public/index";

export default function Home() {
  return (
    <div className="flex h-[2000px]  flex-col">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Index />
      </main>
    </div>
  );
}
