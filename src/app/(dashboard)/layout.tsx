import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex  overflow-hidden">
      <div className="w-1/6 md:w-[8%] lg:w-[16%] xl-[14%] p-4">
      <Link href="/" className="flex items-center justify-center gap-2">
      <Image src='/logo.png' alt='logo' width={32} height={32} />
      <span className="hidden lg:block font-bold">SchoolName</span>
      </Link>
      <div className="h-full  overflow-scroll">
      <Menu />
      </div>
      </div>
      <div className="w-5/6 md:w-[92%] lg:w-[84%] xl-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
      <Navbar />
      {children}
      </div>
    </div>
  );
}
