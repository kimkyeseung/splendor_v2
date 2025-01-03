import { lobster } from '@/app/lib/font';
import { CardValue } from '@/types';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  color: CardValue;
  size: 'medium' | 'large';
}

const colorMap = {
  red: `from-red-700 to-red-400`,
  green: `from-green-500 to-green-200`,
  blue: `from-blue-700 to-blue-400`,
  white: `from-gray-200 to-red-50`,
  black: `from-gray-800 to-gray-600`,
};

export function Color({ color, children, size }: Props) {
  return (
    <div
      className={classNames([
        'rounded p-1',
        'w-[20px] h-[24px]',
        'flex justify-center items-center',
        'bg-gradient-to-br',
        colorMap[color],
        lobster.className,
        'text-2xl stroke-gray-800 text-stroke-1 text-stroke-gray-700',
      ])}
    >
      {children}
    </div>
  );
}
