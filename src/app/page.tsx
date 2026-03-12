import Header from '@/components/common/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}