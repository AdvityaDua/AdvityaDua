import { useSystemStore } from '../../store/systemStore';
import WindowFrame from './WindowFrame';

export default function WindowManager() {
    const { windows } = useSystemStore();

    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            {/* Windows container - pointer-events-auto is set on individual windows */}
            {windows.map((window) => (
                <WindowFrame key={window.id} window={window} />
            ))}
        </div>
    );
}
