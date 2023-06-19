import Navbarui from './navbar';
import Sidebar from './sidebar';

export default function lplayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-white">
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbarui />
        <Sidebar />
        this is lp layout page 
        {children}
      </section>
    )
  }