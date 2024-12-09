import { TokenColors } from '@/types';
import {
  TbRectangleFilled,
  TbBrandSketchFilled,
  TbSquareRoundedFilled,
  TbOvalFilled,
  TbOctagonFilled,
  TbCoinFilled,
} from 'react-icons/tb';

interface Props {
  color: TokenColors;
  size?: number;
}

const symbolMap = {
  black: TbRectangleFilled,
  white: TbBrandSketchFilled,
  red: TbSquareRoundedFilled,
  blue: TbOvalFilled,
  green: TbOctagonFilled,
  yellow: TbCoinFilled,
};

const colorMap = {
  black: 'text-gray-800',
  white: 'text-gray-400',
  red: 'text-red-600',
  blue: 'text-blue-600',
  green: 'text-green-600',
  yellow: 'text-yellow-700',
};

export function ColorSymbol({ color, size = 24 }: Props) {
  const Component = symbolMap[color];

  return <Component size={size} className={colorMap[color]} />;
}
