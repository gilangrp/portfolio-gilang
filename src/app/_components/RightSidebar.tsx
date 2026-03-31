import Image from "next/image";

export function RightSidebar() {
  return (
    <aside className="w-full md:w-1/2 bg-neutral-100 p-8 md:p-12 flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={'/Gilang.jpg'}
            alt="Profile photo"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-900 rounded-full -z-10"></div>
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-neutral-300 rounded-full -z-10"></div>
      </div>
    </aside>
  );
}
