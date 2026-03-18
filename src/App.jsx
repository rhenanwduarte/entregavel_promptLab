// ─── Promptpack Dashboard ────────────────────────────────────────────────────
// To restore the original landing page, comment out the dashboard import/export
// and uncomment the landing page block below.

import Dashboard from './promptpack/Dashboard';

function App() {
  return <Dashboard />;
}

export default App;

// ─── Original Landing Page (preserved) ───────────────────────────────────────
// import clsx from 'clsx';
// import { twMerge } from 'tailwind-merge';
// window.cn = function cn(...inputs) { return twMerge(clsx(inputs)); }
//
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import PainSection from './components/PainSection';
// import Filosofia from './components/Filosofia';
// import SobreAutor from './components/SobreAutor';
// import Protocolo from './components/Protocolo';
// import ProvasSociais from './components/ProvasSociais';
// import CallToAction from './components/CallToAction';
// import Footer from './components/Footer';
//
// function App() {
//   return (
//     <div className="min-h-screen bg-background text-text selection:bg-accent/30 overflow-x-hidden relative font-heading">
//       <div className="noise-overlay" />
//       <Navbar />
//       <main>
//         <Hero />
//         <PainSection />
//         <Filosofia />
//         <SobreAutor />
//         <Protocolo />
//         <ProvasSociais />
//         <CallToAction />
//       </main>
//       <Footer />
//     </div>
//   );
// }

