import Image from "next/image";
import { LeftSidebar } from "./_components/LeftSidebar";
import { RightSidebar } from "./_components/RightSidebar";
import { Navbar } from "./_components/Navbar";

export default function Home() {
  return (
     <div className="size-full flex flex-col bg-neutral-50">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <LeftSidebar />
        <RightSidebar />
      </div>
    </div>
  );
}
