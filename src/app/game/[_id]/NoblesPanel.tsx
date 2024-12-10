import { Noble } from '@/components/Noble';
import { Section } from '@/components/Section';
import { NobleTile } from '@/types';

interface Props {
  nobles: NobleTile[];
}

export function NoblesPanel({ nobles }: Props) {
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
