import { useMemo, useState } from 'react';
import { personal } from '../../../data/personal';
import { projects } from '../../../data/projects';
import { experience } from '../../../data/experience';
import { research } from '../../../data/research';
import { skillGroups } from '../../../data/skills';
import { useTheme } from '../../../hooks/useTheme';
import { AppHeader, AppShell } from './OsPrimitives';

const commands = ['help', 'whoami', 'about', 'projects', 'experience', 'skills', 'research', 'resume', 'contact', 'github', 'linkedin', 'clear', 'pwd', 'ls', 'cat profile', 'history', 'theme', 'easteregg'];
const commandDescriptions = {
  help: 'show the complete command index',
  whoami: 'show identity and current role',
  about: 'read the short profile brief',
  projects: 'list the selected case files',
  experience: 'show work history',
  skills: 'show the indexed skill groups',
  research: 'list research and credentials',
  resume: 'open resume-related information',
  contact: 'show direct contact details',
  github: 'print the GitHub profile URL',
  linkedin: 'print the LinkedIn profile URL',
  clear: 'clear the local terminal history',
  pwd: 'show the current workspace path',
  ls: 'list indexed workspace files',
  'cat profile': 'read the profile record',
  history: 'describe this session history',
  theme: 'toggle the portfolio theme',
  easteregg: 'show a small system note',
};

function outputFor(command, toggleTheme) {
  switch (command) {
    case 'help': return ['Available commands:', ...commands.map((item) => `  ${item}`), '', 'Tip: use Tab for completion.'];
    case 'whoami': return [`${personal.name} / ${personal.title}`];
    case 'about': return personal.bio;
    case 'projects': return projects.map((project) => `${project.id.padEnd(18)} ${project.title} / ${project.category}`);
    case 'experience': return experience.map((item) => `${item.period}  ${item.role} @ ${item.company}`);
    case 'skills': return skillGroups.map((group) => `${group.name}: ${group.skills.join(', ')}`);
    case 'research': return research.map((item) => `${item.year}  ${item.title}`);
    case 'resume': return ['Resume viewer is available from the Finder app.', `Contact: ${personal.email}`];
    case 'contact': return [`Email: ${personal.email}`, 'Location: Mohali, Punjab, India'];
    case 'github': return [personal.socials.find((social) => social.label === 'GitHub')?.href ?? 'GitHub link unavailable'];
    case 'linkedin': return [personal.socials.find((social) => social.label === 'LinkedIn')?.href ?? 'LinkedIn link unavailable'];
    case 'pwd': return ['/home/advitya/workspace'];
    case 'ls': return ['case-files/', 'research/', 'profile.md', 'skills.json', 'experience.log'];
    case 'cat profile': return [`name: ${personal.name}`, `role: ${personal.title}`, `location: ${personal.location}`];
    case 'history': return ['history is local to this session.'];
    case 'theme': toggleTheme(); return ['Theme toggled.'];
    case 'easteregg': return ['There is no hidden server room. The useful stuff is already indexed.'];
    default: return [`command not found: ${command}`];
  }
}

export function Terminal() {
  const { toggleTheme } = useTheme();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(['AdvityaOS terminal / local portfolio index', 'Type help to see available commands.']);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const slashQuery = input.startsWith('/') ? input.slice(1).toLowerCase() : null;
  const suggestions = useMemo(() => slashQuery === null ? [] : commands.filter((command) => command.startsWith(slashQuery)), [slashQuery]);

  const runCommand = (value) => {
    const command = value.trim().toLowerCase().replace(/^\//, '').trim();
    if (!command) return;
    const nextOutput = command === 'clear' ? [] : [`$ ${command}`, ...outputFor(command, toggleTheme)];
    setHistory((current) => command === 'clear' ? [] : [...current, ...nextOutput]);
    setCommandHistory((current) => [...current, command]);
    setHistoryIndex(-1);
    setSuggestionIndex(0);
    setInput('');
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setSuggestionIndex(0);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') { if (slashQuery !== null && suggestions.length) runCommand(`/${suggestions[suggestionIndex]}`); else runCommand(input); return; }
    if (event.key === 'Escape' && slashQuery !== null) { event.preventDefault(); setInput(''); setSuggestionIndex(0); }
    if (slashQuery !== null) {
      if (event.key === 'Tab') { event.preventDefault(); if (suggestions.length) setInput(`/${suggestions[suggestionIndex]}`); }
      if (event.key === 'ArrowDown' && suggestions.length) { event.preventDefault(); setSuggestionIndex((current) => (current + 1) % suggestions.length); }
      if (event.key === 'ArrowUp' && suggestions.length) { event.preventDefault(); setSuggestionIndex((current) => (current - 1 + suggestions.length) % suggestions.length); }
      return;
    }
    if (event.key === 'ArrowUp') { event.preventDefault(); const next = commandHistory.length - 1 - Math.max(historyIndex, 0); setHistoryIndex(Math.max(0, next)); setInput(commandHistory[next] ?? ''); }
    if (event.key === 'ArrowDown') { event.preventDefault(); const next = Math.min(commandHistory.length - 1, Math.max(0, historyIndex) + 1); setHistoryIndex(next); setInput(commandHistory[next] ?? ''); }
  };

  return <AppShell className="os-terminal-app"><AppHeader eyebrow="local shell / portfolio index" title="Terminal" meta="zsh-compatible" /><div className="os-terminal-output" role="log" aria-live="polite">{history.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div><div className="os-terminal-input-wrap">{slashQuery !== null && <div className="os-terminal-suggestions" role="listbox" aria-label="Available commands"><div className="os-terminal-suggestions-head"><span>COMMAND INDEX</span><span>{suggestions.length} matches</span></div>{suggestions.length ? suggestions.map((command, index) => <button key={command} type="button" role="option" aria-selected={index === suggestionIndex} className={index === suggestionIndex ? 'is-active' : ''} onMouseDown={(event) => event.preventDefault()} onClick={() => { setInput(`/${command}`); setSuggestionIndex(index); }}><strong>/{command}</strong><span>{commandDescriptions[command]}</span></button>) : <p className="os-terminal-no-match">No indexed command matches this prefix.</p>}</div>}<label className="os-terminal-prompt"><span>advitya@field-station:~$</span><input autoFocus value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} aria-label="Terminal command" autoComplete="off" /></label></div></AppShell>;
}
