interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`py-12 lg:py-16 ${className}`}
    >
      {children}
    </section>
  );
}