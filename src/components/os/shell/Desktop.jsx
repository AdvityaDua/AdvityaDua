import { useSystemStore } from '../../../store/systemStore';
import { osApps } from '../appRegistry';
import { DesktopIcon } from './DesktopIcon';

export function Desktop() {
  const openWindow = useSystemStore((state) => state.openWindow);

  return (
    <main className="absolute inset-0 z-0 grid content-start gap-2 px-4 pb-24 pt-14 sm:grid-flow-col sm:grid-rows-6 sm:content-start sm:gap-3">
      <div className="os-desktop-readout pointer-events-none absolute bottom-24 left-5 hidden lg:block">
        <p>FIELD STATION / 01</p>
        <p>LAT 28.6139 / LON 77.2090</p>
      </div>
      {osApps.slice(0, 5).map((app, index) => (
        <DesktopIcon
          key={app.id}
          label={app.label}
          icon={app.icon}
          index={index + 1}
          onOpen={() => openWindow(app.id, app.label, app.component, app.size)}
        />
      ))}
    </main>
  );
}
