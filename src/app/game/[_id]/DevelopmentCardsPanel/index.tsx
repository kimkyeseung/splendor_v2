import { Section } from '@/components/Section';
import { Row } from './Row';
import { DevelopmentCard } from '@/types';

const level1Cards: DevelopmentCard[] = [
  {
    grade: 1,
    id: '105B',
    value: 'blue',
    valueAmount: 1,
    victoryPoint: 0,
    cost: {
      red: 1,
      green: 3,
      blue: 1,
    },
    set: 'original',
  },
  {
    grade: 1,
    id: '106B',
    value: 'blue',
    valueAmount: 1,
    victoryPoint: 0,
    cost: {
      red: 2,
      green: 2,
      white: 1,
    },
    set: 'original',
  },
  {
    grade: 1,
    id: '107B',
    value: 'blue',
    valueAmount: 1,
    victoryPoint: 0,
    cost: {
      red: 2,
      green: 1,
      white: 1,
      black: 1,
    },
    set: 'original',
  },
  {
    grade: 1,
    id: '108B',
    value: 'blue',
    valueAmount: 1,
    victoryPoint: 0,
    cost: {
      red: 1,
      green: 1,
      white: 1,
      black: 1,
    },
    set: 'original',
  },
];

const level2Cards: DevelopmentCard[] = [
  {
    grade: 2,
    id: '203B',
    value: 'blue',
    valueAmount: 1,
    victoryPoint: 2,
    cost: { blue: 3, white: 5 },
    set: 'original',
  },
  {
    grade: 2,
    id: '204B',
    value: 'blue',
    valueAmount: 1,
    victoryPoint: 1,
    cost: { red: 3, green: 2, blue: 2 },
    set: 'original',
  },
  {
    grade: 2,
    id: '205B',
    value: 'blue',
    valueAmount: 1,
    victoryPoint: 1,
    cost: { green: 3, blue: 2, black: 3 },
    set: 'original',
  },
  {
    grade: 2,
    id: '206B',
    value: 'blue',
    valueAmount: 1,
    victoryPoint: 2,
    cost: { red: 1, white: 2, black: 4 },
    set: 'original',
  },
];

const level3Cards: DevelopmentCard[] = [
  {
    grade: 3,
    id: '308G',
    value: 'green',
    valueAmount: 1,
    victoryPoint: 3,
    cost: { red: 3, blue: 3, white: 5, black: 3 },
    set: 'original',
  },
  {
    grade: 3,
    id: '309K',
    value: 'black',
    valueAmount: 1,
    victoryPoint: 4,
    cost: { red: 7 },
    set: 'original',
  },
  {
    grade: 3,
    id: '310K',
    value: 'black',
    valueAmount: 1,
    victoryPoint: 5,
    cost: { red: 7, black: 3 },
    set: 'original',
  },
  {
    grade: 3,
    id: '320W',
    value: 'white',
    valueAmount: 1,
    victoryPoint: 3,
    cost: { red: 5, green: 3, blue: 3, black: 3 },
    set: 'original',
  },
];

export function DevelopmentCardsPanel() {
  return (
    <Section>
      <div className="grid grid-rows-3">
        <Row cards={level3Cards} deck={level3Cards} />
        <Row cards={level2Cards} deck={level2Cards} />
        <Row cards={level1Cards} deck={level1Cards} />
      </div>
    </Section>
  );
}
