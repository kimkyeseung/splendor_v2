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

export function EmptyToken({ color }: Props) {
  return (
    <div
      className={classNames(
        'w-[96px] h-[96px] flex justify-center items-center',
        'border-4 border-dashed rounded-full',
        `${colorMap[color]} saturate-[.25] opacity-75`,
      )}
    >
      <ColorSymbol size={52} color={color} />
    </div>
  );
}
