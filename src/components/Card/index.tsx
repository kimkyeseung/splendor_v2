import { DevelopmentCard } from '@/types';
import classNames from 'classnames';
import { Cost } from './Cost';
import { Header } from './Header';
import { VictoryPoint } from '../VictoryPoint';
import { Color } from './Color';
import { cardImageMap } from './cardImageMap';

interface Props {
  card: DevelopmentCard;
}

export function Card({ card: { id, cost, value, victoryPoint } }: Props) {
  return (
    <div
      className={classNames(
        'h-[180px] w-[150px] rounded-xl overflow-hidden',
        cardImageMap[id],
        'bg-cover',
      )}
    >
      <Header>
        {victoryPoint ? (
          <VictoryPoint>{victoryPoint}</VictoryPoint>
        ) : (
          <span></span>
        )}
        <Color color={value} size={'large'} />
      </Header>
      <Cost cost={cost} />
    </div>
  );
}
