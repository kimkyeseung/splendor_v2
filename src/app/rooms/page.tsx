import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import RoomsPage from './RoomsPage';
import { fetchRooms } from './actions';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['rooms'],
    queryFn: async () => await fetchRooms(),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <RoomsPage />;
    </HydrationBoundary>
  );
}
