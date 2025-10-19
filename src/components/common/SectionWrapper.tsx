interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-8 lg:py-10 ${className}`}
    >
      {children}
    </section>
  );
}