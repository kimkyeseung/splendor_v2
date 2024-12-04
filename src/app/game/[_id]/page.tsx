import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import GamePage from './GamePage';
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
      <GamePage _id={_id} />
    </HydrationBoundary>
  );
}
