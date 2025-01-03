import { Card } from '@/components/Card';
import { DevelopmentCard } from '@/types';

interface Props {
  cards: DevelopmentCard[];
  deck: DevelopmentCard[];
}

export function Row({ cards, deck }: Props) {
  return (
    <div className="flex gap-2 justify-center">
      {cards.map((c) => (
        <Card key={c.id} card={c} />
      ))}
    </div>
  );
}
