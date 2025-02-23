import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';
import { ThemeProvider } from '@/components/theme-provider';

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="min-h-screen">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </ThemeProvider>
  );
}