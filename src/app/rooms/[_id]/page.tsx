import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import RoomPage from './RoomPage';
import { fetchRoom } from './actions';

export default async function Page({
  params,
}: {
  params: Promise<{ _id: string }>;
}) {
  const queryClient = new QueryClient();
  const _id = (await params)._id;

  await queryClient.prefetchQuery({
    queryKey: ['rooms', _id],
    queryFn: async () => await fetchRoom(_id),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <RoomPage _id={_id} />
    </HydrationBoundary>
  );
}
