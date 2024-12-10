import { NobleTile } from '@/types';
import { Header } from './Header';
import { VictoryPoint } from '../VictoryPoint';
import classNames from 'classnames';
import { Condition } from './Condition';
import { nobleImageMap } from './nobleImageMap';

interface Props {
  noble: NobleTile;
}

export function Noble({ noble: { condition, id, victoryPoint } }: Props) {
  return (
    <div
      className={classNames(
        'h-[160px] w-[160px] rounded-xl overflow-hidden',
        nobleImageMap[id],
        'bg-cover',
      )}
    >
      <Header>
        <VictoryPoint>{victoryPoint}</VictoryPoint>
        <Condition condition={condition} />
      </Header>
    </div>
  );
}
