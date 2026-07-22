import { useEffect } from 'react';
import { useSystemStore } from '../../store/systemStore';
import { BootSequence } from './BootSequence';
import { Dock } from './dock/Dock';
import { Desktop } from './shell/Desktop';
import { TopBar } from './shell/TopBar';
import { WindowManager } from './window/WindowManager';
import topographicField from '../../assets/advityaos-topographic-field.png';

export function OSLayout({ booting, onBootComplete, onExitPortfolio }) {
  const resetWindows = useSystemStore((state) => state.resetWindows);

  useEffect(() => () => resetWindows(), [resetWindows]);

  return (
    <div className="os-shell dark relative h-screen w-screen overflow-hidden text-white" style={{ '--os-wallpaper': `url(${topographicField})` }}>
      <div className="os-shell-grid absolute inset-0" aria-hidden="true" />
      {booting ? (
        <BootSequence onComplete={onBootComplete} />
      ) : (
        <>
          <TopBar onExitPortfolio={onExitPortfolio} />
          <Desktop />
          <WindowManager />
          <Dock />
        </>
      )}
    </div>
  );
}
