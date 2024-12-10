'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchGame } from './actions';
import { MyPanel } from './MyPanel';
import { PlayersPanel } from './PlayersPanel';
import { TokensPanel } from './TokensPanel';
import { NoblesPanel } from './NoblesPanel';
import { DevelopmentCardsPanel } from './DevelopmentCardsPanel';

const tokens = {
  yellow: 4,
  red: 0,
  green: 0,
  blue: 0,
  white: 6,
  black: 1,
};

export default function GamePage({ _id }: { _id: string }) {
  const { data: game } = useQuery<any>({
    queryKey: ['game', _id],
    queryFn: async () => await fetchGame(_id),
  });
  console.log(game)

  // TODO: markup here

  const [gameState, setGameState] = useState<any>(null);

  const handlePlayerMove = () => {};

  return (
    <div className="min-h-screen grid grid-rows-[1fr_200px] gap-x-4 gap-y-5 p-4">
      <div className="grid grid-cols-[280px_1fr_280px] gap-x-4 gap-y-5">
        <PlayersPanel />
        <div className="grid grid-rows-[200px_1fr] gap-x-4 gap-y-5">
          <NoblesPanel />
          <DevelopmentCardsPanel />
        </div>
        <TokensPanel tokens={tokens} />
      </div>
      <MyPanel />
    </div>
  );
}
