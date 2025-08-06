interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}