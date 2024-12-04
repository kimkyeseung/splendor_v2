import { lobster } from '@/lib/font';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export function VictoryPoint({ children }: PropsWithChildren) {
  return (
    <div
      className={classNames(
        'text-white text-4xl text-stroke-1 text-stroke-gray-500',
        lobster.className,
      )}
    >
      {children}
    </div>
  );
}
