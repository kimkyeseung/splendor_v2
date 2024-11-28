import GameRoom from "@/app/components/GameRoom";

export default function GameRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  return <GameRoom params={params} />;
}
