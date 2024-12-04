import { CardValue, DevelopmentCard } from '@/types';
import { Color } from './Color';

interface Props {
  cost: DevelopmentCard['cost'];
}

export function Cost({ cost }: Props) {
  const colors = Object.keys(cost) as Array<CardValue>;

  return (
    <div className="space-y-1 p-2 h-[130px] flex flex-col justify-end">
      {colors.map((k) => (
        <Color key={k} color={k} size={'medium'}>
          {cost[k]}
        </Color>
      ))}
    </div>
  );
}
