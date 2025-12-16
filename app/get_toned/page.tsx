import styles from './page.module.scss';
import { verifyAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const GetToned = async () => {
  const result = await verifyAuth();

  if(!result.user) {
    redirect('/login');
    return;
  }

  return (
    <h1>Get toned</h1>
  )
}

export default GetToned;
