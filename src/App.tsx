import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

import {
  NavBar,
  Hero,
  About,
  Experience,
  TechStack,
  Projects,
  // Testimonials,
  Contact,
  Stars,
} from "@/components";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <NavBar />
        <Hero />
        <Stars>
          <About />
          <Experience />
          <TechStack />
          <Projects />
          {/* <Testimonials /> Implement the Testimonials, once the correct data is availble.*/}
          <Contact />
        </Stars>
        <Toaster richColors />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
