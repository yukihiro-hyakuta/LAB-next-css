import Navbarlp from './navbar';

export default function lplayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-white">
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbarlp />
        this is lp layout page 
        {children}
      </section>
    )
  }