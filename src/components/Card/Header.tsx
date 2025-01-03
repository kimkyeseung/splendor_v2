import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren) {
  return (
    <div
      className={classNames(
        'h-[50px] px-2 bg-white/80',
        'flex items-center justify-between',
      )}
    >
      {children}
    </div>
  );
}
