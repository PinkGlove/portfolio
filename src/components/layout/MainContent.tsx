interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="lg:ml-[35%] min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-5xl px-8 lg:px-12">
        {children}
      </div>
    </main>
  );
}