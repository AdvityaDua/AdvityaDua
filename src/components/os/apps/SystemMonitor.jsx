import { Activity, Cpu, Database, Globe2, Layers3, Server } from 'lucide-react';
import { personal } from '../../../data/personal';
import { projects } from '../../../data/projects';
import { research } from '../../../data/research';
import { skillGroups } from '../../../data/skills';
import { AppHeader, AppShell, DataTag } from './OsPrimitives';

const signals = [
  { label: 'Projects indexed', value: projects.length, icon: Layers3, tone: 'emerald' },
  { label: 'Research records', value: research.length, icon: Database, tone: 'amber' },
  { label: 'Skill clusters', value: skillGroups.length, icon: Cpu, tone: 'cyan' },
  { label: 'Years coding', value: personal.stats.find((stat) => stat.label === 'Years Coding')?.value ?? 0, icon: Activity, tone: 'emerald' },
];

export function SystemMonitor() {
  return <AppShell className="os-monitor-app"><AppHeader eyebrow="system telemetry / profile" title="Monitor" meta="all services nominal" /><div className="os-signal-grid">{signals.map((signal) => { const Icon = signal.icon; return <div className={`os-signal-card tone-${signal.tone}`} key={signal.label}><Icon size={16} /><strong>{signal.value}{signal.label === 'Years coding' ? '+' : ''}</strong><span>{signal.label}</span></div>; })}</div><section className="os-monitor-section"><div className="os-section-label"><Server size={14} /> Runtime surface</div><div className="os-runtime-list"><div><span>AI inference / RAG</span><DataTag tone="accent">online</DataTag></div><div><span>Distributed backends</span><DataTag tone="accent">online</DataTag></div><div><span>Cloud deployment layer</span><DataTag tone="warn">tracked</DataTag></div><div><span>Public interface</span><DataTag tone="accent">online</DataTag></div></div></section><section className="os-monitor-section"><div className="os-section-label"><Globe2 size={14} /> Core stack</div><div className="os-chip-cloud">{skillGroups.flatMap((group) => group.skills).slice(0, 18).map((skill) => <DataTag key={skill}>{skill}</DataTag>)}</div></section></AppShell>;
}
