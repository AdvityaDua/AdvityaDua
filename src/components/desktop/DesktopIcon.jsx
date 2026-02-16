export default function DesktopIcon({ label, icon: Icon, onDoubleClick }) {
    return (
        <div
            className="flex flex-col items-center justify-center w-24 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition-colors group"
            onDoubleClick={onDoubleClick}
        >
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:bg-white/20 mb-1">
                <Icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-xs text-white drop-shadow-md text-center font-medium px-1 rounded leading-tight">
                {label}
            </span>
        </div>
    );
}
