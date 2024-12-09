import { Section } from '@/components/Section';
import { Tokens } from '@/components/Tokens';
import { BoardState, TokenColors } from '@/types';

interface Props {
  tokens: BoardState['tokens'];
}

const tokenOrder: TokenColors[] = [
  'yellow',
  'black',
  'red',
  'green',
  'blue',
  'white',
];

export function TokensPanel({ tokens }: Props) {
  return (
    <Section>
      <div className="flex flex-col gap-1 items-center">
        {tokenOrder.map((c) => (
          <Tokens key={c} color={c} count={tokens[c]} />
        ))}
      </div>
    </Section>
  );
}
