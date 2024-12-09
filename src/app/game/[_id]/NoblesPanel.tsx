import { Noble } from '@/components/Noble';
import { Section } from '@/components/Section';

const nobles = [
  {
    id: 'NB01',
    victoryPoint: 3,
    condition: {
      red: 3,
      white: 3,
      black: 3,
    },
  },
  {
    id: 'NB02',
    victoryPoint: 3,
    condition: {
      red: 3,
      green: 3,
      blue: 3,
    },
  },
  {
    id: 'NB03',
    victoryPoint: 3,
    condition: {
      green: 4,
      blue: 4,
    },
  },
];

export function NoblesPanel() {
  return (
    <Section>
      <div className="flex gap-2 justify-center">
        {nobles.map((n) => (
          <Noble key={n.id} noble={n} />
        ))}
      </div>
    </Section>
  );
}
