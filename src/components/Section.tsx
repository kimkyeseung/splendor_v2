import { PropsWithChildren } from 'react';

export function Section({ children }: PropsWithChildren) {
  return <div className="rounded-xl bg-slate-800 p-4">{children}</div>;
}
