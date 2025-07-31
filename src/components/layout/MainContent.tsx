interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main>
      <div>
        Main Content Wrapper - Coming Soon
      </div>
      {children}
    </main>
  );
}