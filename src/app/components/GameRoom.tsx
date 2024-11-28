"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001"); // WebSocket 서버 URL

export default function GameRoom({ params }: { params: { roomId: string } }) {
  const { roomId } = params;
  const [gameState, setGameState] = useState<any>(null);

  useEffect(() => {
    // 방에 참가
    socket.emit("joinRoom", { roomId });

    // 게임 상태 업데이트 수신
    socket.on("updateGameState", (state) => {
      setGameState(state);
    });

    return () => {
      // 컴포넌트 언마운트 시 소켓 연결 해제
      socket.disconnect();
    };
  }, [roomId]);

  const handlePlayerMove = () => {
    // 플레이어의 움직임 전송
    socket.emit("playerMove", {
      roomId,
      playerId: "player1",
      action: "addToken",
    });
  };

  if (!gameState) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1>Game Room: {roomId}</h1>
      <pre>{JSON.stringify(gameState, null, 2)}</pre>
      <button
        onClick={handlePlayerMove}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Make a Move
      </button>
    </div>
  );
}
