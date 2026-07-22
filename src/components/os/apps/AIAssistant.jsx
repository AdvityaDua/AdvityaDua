import { useState } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';
import { personal } from '../../../data/personal';
import { projects } from '../../../data/projects';
import { skillGroups } from '../../../data/skills';
import { AppHeader, AppShell } from './OsPrimitives';

const suggestions = ['What does Advitya build?', 'Show me the strongest project', 'What is the AI stack?', 'How can I get in touch?'];

function answerFor(question) {
  const input = question.toLowerCase();
  if (input.includes('project') || input.includes('build')) return `${personal.name} builds production AI systems, distributed backends, and clear product interfaces. The strongest case files are ${projects.slice(0, 2).map((project) => project.title).join(' and ')}.`;
  if (input.includes('stack') || input.includes('skill') || input.includes('ai')) return `The AI stack includes ${skillGroups.find((group) => group.name === 'AI / Machine Learning')?.skills.join(', ')}.`;
  if (input.includes('contact') || input.includes('reach')) return `The fastest path is email: ${personal.email}. You can also use the contact app in the dock.`;
  return `${personal.name} is an AI/ML engineer focused on production-grade intelligent systems, cloud-native deployment, and research.`;
}

export function AIAssistant() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'I can answer from the local portfolio index. Ask about projects, skills, background, or contact.' }]);
  const send = (value = question) => { if (!value.trim()) return; setMessages((current) => [...current, { role: 'user', text: value }, { role: 'assistant', text: answerFor(value) }]); setQuestion(''); };

  return <AppShell className="os-assistant-app"><AppHeader eyebrow="local intelligence / portfolio index" title="Assistant" meta="source: workspace data"><Bot size={17} className="text-emerald-300" /></AppHeader><div className="os-chat-suggestions">{suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => send(suggestion)}><Sparkles size={12} />{suggestion}</button>)}</div><div className="os-chat-log" role="log" aria-live="polite">{messages.map((message, index) => <div key={`${message.role}-${index}`} className={`os-chat-message ${message.role}`}><span>{message.role === 'assistant' ? 'OS' : 'YOU'}</span><p>{message.text}</p></div>)}</div><form className="os-chat-input" onSubmit={(event) => { event.preventDefault(); send(); }}><input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about Advitya" aria-label="Ask the portfolio assistant" /><button type="submit" aria-label="Send question"><Send size={15} /></button></form></AppShell>;
}
