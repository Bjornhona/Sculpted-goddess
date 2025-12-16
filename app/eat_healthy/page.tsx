import { verifyAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import EatHealthyClient from './EatHealthyClient';
import { getAllUserLikes } from '@/actions/likes-actions';

const EatHealthy = async () => {
  const result = await verifyAuth();
  
  if(!result.user) {
    redirect('/login');
    return;
  }

  // Prefetch liked recipe IDs on the server
  const likedRecipeIds = await getAllUserLikes();

  return <EatHealthyClient initialLikedRecipeIds={likedRecipeIds} />;
}

export default EatHealthy;
