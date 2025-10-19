interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="lg:ml-[35%] min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-5xl px-8 sm:px-12 pt-6 pb-12 lg:px-12 lg:py-0">
        {children}
      </div>
    </main>
  );
}