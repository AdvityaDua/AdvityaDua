import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { OSLayout } from './components/os/OSLayout';
import { PortfolioLayout } from './components/portfolio/PortfolioLayout';
import { useMediaQuery } from './hooks/useMediaQuery';
import { useTheme } from './hooks/useTheme';

const MotionDiv = motion.div;

function App() {
  const [mode, setMode] = useState('portfolio');
  const [booting, setBooting] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useTheme();

  useEffect(() => {
    if (!isDesktop && mode === 'os') {
      setBooting(false);
      setMode('portfolio');
    }
  }, [isDesktop, mode]);

  const launchOS = () => {
    if (!isDesktop) return;
    setBooting(true);
    setMode('os');
  };

  const exitOS = () => {
    setBooting(false);
    setMode('portfolio');
  };

  return (
    <AnimatePresence mode="wait">
      {mode === 'portfolio' ? (
        <MotionDiv
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <PortfolioLayout onLaunchOS={launchOS} />
        </MotionDiv>
      ) : (
        <MotionDiv
          key="os"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="h-screen w-screen overflow-hidden"
        >
          <OSLayout booting={booting} onBootComplete={() => setBooting(false)} onExitPortfolio={exitOS} />
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}

export default App;
