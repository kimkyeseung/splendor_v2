'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchGame } from './actions';

export default function GamePage({ _id }: { _id: string }) {
  const { data: game } = useQuery<any>({
    queryKey: ['game', _id],
    queryFn: async () => await fetchGame(_id),
  });

  // TODO: markup here

  const [gameState, setGameState] = useState<any>(null);

  const handlePlayerMove = () => {};

  return (
    <div className="p-4">
      <h1>Game Room: {_id}</h1>
      <button
        onClick={handlePlayerMove}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Make a Move
      </button>
    </div>
  );
}
