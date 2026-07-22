import { Award } from 'lucide-react';
import { credentials } from '../../../data/credentials';
import { AppHeader, AppShell, DataTag } from './OsPrimitives';

export function CertificatesApp() {
  const records = credentials;
  return <AppShell className="os-certificates-app"><AppHeader eyebrow="verified records / achievements" title="Certificates" meta={`${records.length} records`}><Award size={17} className="text-amber-300" /></AppHeader><div className="os-certificate-grid">{records.map((record) => <article key={record.title} className="os-certificate-card">{record.image ? <img src={record.image} alt={`${record.title} certificate`} className="mb-4 aspect-[16/10] w-full rounded-md border border-white/10 object-contain" /> : <div className="os-certificate-icon"><Award size={20} /></div>}<p className="os-app-eyebrow">{record.publication} / {record.year}</p><h2>{record.title}</h2><p>{record.abstract}</p><div className="os-chip-cloud">{record.tags.map((tag) => <DataTag key={tag} tone="warn">{tag}</DataTag>)}</div></article>)}</div></AppShell>;
}
