import { CardValue, NobleTile } from '@/types';
import { Color } from './Color';

interface Props {
  condition: NobleTile['condition'];
}

export function Condition({ condition }: Props) {
  const colors = Object.keys(condition) as Array<CardValue>;

  return (
    <div className="space-y-1 p-2 h-[130px] flex flex-col justify-end">
      {colors.map((k) => (
        <Color key={k} color={k} size={'medium'}>
          {condition[k]}
        </Color>
      ))}
    </div>
  );
}
