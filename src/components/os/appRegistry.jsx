import { Award, Bot, BriefcaseBusiness, FileText, FlaskConical, Mail, Monitor, PanelsTopLeft, Terminal as TerminalIcon } from 'lucide-react';
import { AIAssistant } from './apps/AIAssistant';
import { CertificatesApp } from './apps/CertificatesApp';
import { ContactApp } from './apps/ContactApp';
import { ProjectsApp } from './apps/ProjectsApp';
import { ResearchLab } from './apps/ResearchLab';
import { ResumeApp } from './apps/ResumeApp';
import { SystemMonitor } from './apps/SystemMonitor';
import { Terminal } from './apps/Terminal';
import { Timeline } from './apps/Timeline';

export const osApps = [
  { id: 'projects', label: 'Projects', icon: PanelsTopLeft, component: ProjectsApp, size: { width: 980, height: 650 } },
  { id: 'terminal', label: 'Terminal', icon: TerminalIcon, component: Terminal, size: { width: 760, height: 540 } },
  { id: 'research', label: 'Research Lab', icon: FlaskConical, component: ResearchLab, size: { width: 900, height: 610 } },
  { id: 'monitor', label: 'Monitor', icon: Monitor, component: SystemMonitor, size: { width: 820, height: 590 } },
  { id: 'timeline', label: 'Timeline', icon: BriefcaseBusiness, component: Timeline, size: { width: 820, height: 640 } },
  { id: 'assistant', label: 'Assistant', icon: Bot, component: AIAssistant, size: { width: 760, height: 600 } },
  { id: 'resume', label: 'Resume', icon: FileText, component: ResumeApp, size: { width: 860, height: 700 } },
  { id: 'contact', label: 'Contact', icon: Mail, component: ContactApp, size: { width: 760, height: 600 } },
  { id: 'certificates', label: 'Certificates', icon: Award, component: CertificatesApp, size: { width: 860, height: 600 } },
];
