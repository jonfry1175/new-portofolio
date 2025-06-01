import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import StructuredData from "./components/StructuredData";

// Lazy-loaded components
const About = lazy(() => import("./components/About"));
const Technologies = lazy(() => import("./components/Technologies"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-10 w-10 rounded-full bg-purple-600/40"></div>
      <div className="mt-2 text-sm text-purple-500">Loading...</div>
    </div>
  </div>
);

const App = () => {
  return (
    <>
      <StructuredData />
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <div className="container mx-auto px-8">
          <NavBar />
          <Hero />

          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Technologies />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default App;
