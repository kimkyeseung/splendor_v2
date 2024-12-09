import { TokenColors } from '@/types';
import classNames from 'classnames';
import { ColorSymbol } from '../ColorSymbol';

interface Props {
  color: TokenColors;
}

const colorMap = {
  red: 'border-red-500',
  green: 'border-green-500',
  blue: 'border-blue-500',
  white: 'border-gray-200',
  black: 'border-gray-700',
  yellow: 'border-yellow-700',
};

export function Token({ color }: Props) {
  return (
    <div
      className={classNames(
        'w-[96px] h-[96px] flex justify-center items-center rounded-full shadow-md',
        'before:absolute before:inset-0 before:rounded-full before:shadow-inner-glow',
        `bg-yellow-50 border-[12px] ${colorMap[color]}`,
      )}
    >
      <ColorSymbol size={52} color={color} />
    </div>
  );
}
