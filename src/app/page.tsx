import { verifySession } from './lib/dal';
import MainPage from './MainPage';

export default async function Page() {
  const session = await verifySession();
  console.log(session);
  return <MainPage isAuth={session.isAuth} />;
}
