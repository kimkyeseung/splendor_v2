import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren) {
  return (
    <div
      className={classNames(
        'h-full w-[42px] bg-white/80',
        'flex flex-col items-center justify-between',
      )}
    >
      {children}
    </div>
  );
}
