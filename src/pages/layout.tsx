export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full h-[100vh] bg-black text-white'>
      {children}
    </main>
  );
}
