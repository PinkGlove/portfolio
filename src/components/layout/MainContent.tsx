interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="lg:ml-[40%] min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 lg:px-16">
        {children}
      </div>
    </main>
  );
}