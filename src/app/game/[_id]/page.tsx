import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import GameRoom from './GameRoom';
import { fetchGame } from './actions';

export default async function Page({
  params,
}: {
  params: Promise<{ _id: string }>;
}) {
  const queryClient = new QueryClient();
  const _id = (await params)._id;

  await queryClient.prefetchQuery({
    queryKey: ['game', _id],
    queryFn: async () => await fetchGame(_id),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <GameRoom _id={_id} />;
    </HydrationBoundary>
  );
}
