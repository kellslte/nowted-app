export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full min-h-screen w-full min-w-screen">
      <main className="flex items-center justify-center px-8 w-full flex-grow flex-1 h-full">
        {children}
      </main>
    </div>
  );
}
