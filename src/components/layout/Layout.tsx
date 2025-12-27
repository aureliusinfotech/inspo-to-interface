import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title = 'Delhi Public School Sursand', description = 'Delhi Public School Sursand provides best education to children, nurturing their unique potential in a liberal and enlightened environment.' }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[120px] md:pt-[130px]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
