import { TokenColors } from '@/types';
import { Token } from './Token';
import classNames from 'classnames';
import { ColorSymbol } from '../ColorSymbol';
import { EmptyToken } from './EmptyToken';

interface Props {
  count: number;
  color: TokenColors;
}

const positionClassMap: Record<number, string> = {
  0: 'top-0 left-0',
  1: 'top-[6px] left-[6px]',
  2: 'top-3 left-3',
  3: 'top-[18px] left-[18px]',
  4: 'top-6 left-6',
  5: 'top-[30px] left-[30px]',
  6: 'top-9 left-9',
};

export function Tokens({ count, color }: Props) {
  return (
    <div className="relative w-[120px] h-[120px]">
      {count ? (
        Array(count)
          .fill(1)
          .map((_, i) => (
            <div
              key={i}
              className={classNames('absolute', `${positionClassMap[i]}`)}
            >
              <Token color={color} />
            </div>
          ))
      ) : (
        <EmptyToken color={color} />
      )}
    </div>
  );
}
