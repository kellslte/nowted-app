import Notenav from "@/components/dashboard/notenav";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full min-h-screen w-screen min-w-screen">
      <main className="flex items-center justify-start w-full flex-grow flex-1 text-base-text">
        <Sidebar />
        <Notenav />
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
}
