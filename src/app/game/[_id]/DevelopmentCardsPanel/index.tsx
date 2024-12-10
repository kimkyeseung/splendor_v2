import { Section } from '@/components/Section';
import { Row } from './Row';
import { DevelopmentCard } from '@/types';

interface Props {
  level3Cards: DevelopmentCard[];
  level2Cards: DevelopmentCard[];
  level1Cards: DevelopmentCard[];
}

export function DevelopmentCardsPanel({
  level3Cards,
  level2Cards,
  level1Cards,
}: Props) {
  const [lev3Card1, lev3Card2, lev3Card3, lev3Card4, ...lev3Deck] = level3Cards;
  const [lev2Card1, lev2Card2, lev2Card3, lev2Card4, ...lev2Deck] = level2Cards;
  const [lev1Card1, lev1Card2, lev1Card3, lev1Card4, ...lev1Deck] = level1Cards;

  return (
    <Section>
      <div className="grid grid-rows-3">
        <Row
          cards={[lev3Card1, lev3Card2, lev3Card3, lev3Card4]}
          deck={lev3Deck}
        />
        <Row
          cards={[lev2Card1, lev2Card2, lev2Card3, lev2Card4]}
          deck={lev2Deck}
        />
        <Row
          cards={[lev1Card1, lev1Card2, lev1Card3, lev1Card4]}
          deck={lev1Deck}
        />
      </div>
    </Section>
  );
}
