import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TopBar from './components/system/TopBar';
import Dock from './components/dock/Dock';
import Desktop from './components/desktop/Desktop';
import WindowManager from './components/window/WindowManager';
import BootScreen from './components/system/BootScreen';
import MobileWarning from './components/system/MobileWarning';

function App() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      <MobileWarning />

      <AnimatePresence>
        {booting && <BootScreen onComplete={() => setBooting(false)} />}
      </AnimatePresence>

      <div className="h-screen w-screen overflow-hidden bg-[url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center text-white hidden md:block">
        <TopBar />

        <Desktop />

        <WindowManager />

        <Dock />
      </div>
    </>
  );
}

export default App;