import { Download, MapPin, Mail, Printer } from 'lucide-react';
import { personal } from '../../../data/personal';
import { experience } from '../../../data/experience';
import { skillGroups } from '../../../data/skills';
import { AppHeader, AppShell, DataTag } from './OsPrimitives';

export function ResumeApp() {
  return <AppShell className="os-resume-app"><AppHeader eyebrow="profile packet / exportable" title="Resume"><div className="os-link-row"><button type="button" onClick={() => window.print()}><Printer size={14} /> Print</button>{personal.resumeUrl && personal.resumeUrl !== '#' ? <a href={personal.resumeUrl}><Download size={14} /> Download</a> : null}</div></AppHeader><article className="os-resume-paper"><div className="os-resume-intro"><div><p className="os-app-eyebrow">AI ENGINEER / BACKEND SYSTEMS / RESEARCH</p><h2>{personal.name}</h2><p>{personal.title}</p></div><div className="os-resume-contact"><span><MapPin size={13} /> {personal.location}</span><span><Mail size={13} /> {personal.email}</span></div></div><section><p className="os-section-label">Summary</p>{personal.bio.map((item) => <p className="os-resume-copy" key={item}>{item}</p>)}</section><section><p className="os-section-label">Experience</p>{experience.map((item) => <div className="os-resume-entry" key={item.company}><div><h3>{item.role}</h3><p>{item.company}</p></div><time>{item.period}</time><ul>{item.highlights.slice(0, 3).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>)}</section><section><p className="os-section-label">Stack</p><div className="os-chip-cloud">{skillGroups.flatMap((group) => group.skills).map((skill) => <DataTag key={skill}>{skill}</DataTag>)}</div></section></article></AppShell>;
}
