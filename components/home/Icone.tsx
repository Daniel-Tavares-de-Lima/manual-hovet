// mesmos SVGs e mesma função svg() do sig-hovet-v3.html
const P = {
  pata: '<circle cx="7" cy="6" r="2"/><circle cx="12" cy="4.2" r="2"/><circle cx="17" cy="6" r="2"/><circle cx="4.5" cy="11" r="1.8"/><circle cx="19.5" cy="11" r="1.8"/><path d="M12 10c-3 0-6 3.6-6 6.6 0 2 1.6 3.4 3.5 3.4 1 0 1.7-.5 2.5-.5s1.5.5 2.5.5c1.9 0 3.5-1.4 3.5-3.4C18 13.6 15 10 12 10z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 21c0-3.5 3-5.5 7-5.5s7 2 7 5.5"/><path d="M16 4a3.5 3.5 0 0 1 0 7M18 15.5c2.5.5 4 2.5 4 5.5"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  plus: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 8v8M8 12h8"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M7.5 14h9"/>',
  send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 10v10"/>',
  docs: '<path d="M8 3h8l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M16 3v4h4M9.5 12h7M9.5 16h5"/>',
  dev: '<rect x="2" y="4" width="14" height="10" rx="1"/><rect x="17" y="8" width="5" height="12" rx="1"/><path d="M6 18h6"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01"/>',
  steto: '<path d="M5 3v6a5 5 0 0 0 10 0V3"/><path d="M10 14v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
  modelo: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  x: '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
  menos: '<path d="M6 12h12"/>',
};

export type NomeIcone = keyof typeof P;

export function Icone({ k, c = "#222", s = 20, w = 1.9 }: { k: NomeIcone; c?: string; s?: number; w?: number }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke={c}
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: P[k] }}
    />
  );
}
