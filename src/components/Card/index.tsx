import { DevelopmentCard } from '@/types';
import classNames from 'classnames';
import { Cost } from './Cost';
import { Header } from './Header';
import { VictoryPoint } from '../VictoryPoint';
import { Color } from './Color';

interface Props {
  card: DevelopmentCard;
}

export function Card({ card: { cost, value, victoryPoint } }: Props) {
  return (
    <div
      className={classNames('h-[180px] w-[150px] rounded-xl overflow-hidden')}
    >
      <Header>
        <VictoryPoint>{victoryPoint}</VictoryPoint>
        <Color color={value} size={'large'} />
      </Header>
      <Cost cost={cost} />
    </div>
  );
}
