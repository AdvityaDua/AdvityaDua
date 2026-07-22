import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { personal } from '../../../data/personal';
import { AppHeader, AppShell } from './OsPrimitives';

export function ContactApp() {
  const [sent, setSent] = useState(false);
  return <AppShell className="os-contact-app"><AppHeader eyebrow="open channel / collaboration" title="Contact" meta="response path: email"><Mail size={17} className="text-emerald-300" /></AppHeader><div className="os-contact-layout"><div className="os-contact-copy"><p>Have a system to build, a research question to explore, or a product surface that needs clarity?</p><a className="os-contact-email" href={`mailto:${personal.email}`}>{personal.email}</a><div className="os-link-row">{personal.socials.filter((social) => social.label !== 'Email').map((social) => <a key={social.label} href={social.href}>{social.label === 'GitHub' ? <Github size={14} /> : <Linkedin size={14} />}{social.label}</a>)}</div></div><form className="os-contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>Name<input required name="name" /></label><label>Email<input required type="email" name="email" /></label><label>Message<textarea required name="message" rows="5" /></label><button type="submit"><Send size={14} /> {sent ? 'Draft ready' : 'Prepare message'}</button>{sent ? <p className="os-form-status">Your message is ready to send via {personal.email}.</p> : null}</form></div></AppShell>;
}
