import { Navbar } from "@/components/shared/navbar";
import { Index } from "@/components/public/index";

export default function Home() {
  return (
    <div className="flex flex-col bg-primary">
      <Navbar />
      <main className="gap-[32px] row-start-2 items-center sm:items-start">
        <Index />
      </main>
    </div>
  );
}
