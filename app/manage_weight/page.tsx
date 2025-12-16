import Image from 'next/image';
import styles from './page.module.scss';
import manageWeightImage from '/public/images/manage-weight.png';
import { verifyAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import ManageWeightClient from './ManageWeightClient';
import { WeightProvider } from '@/components/macro-calculator/WeightContext';
import { getDietProfile } from '@/actions/macro-actions';

const ManageWeight = async () => {
  const result = await verifyAuth();

  if(!result.user) {
    redirect('/login');
    return;
  }

  const dietProfile = await getDietProfile();

  return (
    <>
      <header className={styles.manageWeightHeader}>
        <div className={styles.manageWeightHeaderBox}>
          <h1><span>Weightloss</span> Program</h1>
          <div className={styles.textBox}>
            <h3>We help you create your personally adapted meal plans so that you can achieve your goals.</h3>
          </div>
        </div>
        <div className={styles.manageWeightHeaderImage}>
          <Image id="header-image" src={manageWeightImage} alt="Manage weight" />
        </div>
      </header>

      <main>
        <WeightProvider
          initialValues={{
            gender: dietProfile?.gender ?? null,
            weight: dietProfile?.weight ?? null,
            height: dietProfile?.height ?? null,
            age: dietProfile?.age ?? null,
            activity: dietProfile?.activity ?? null,
            desiredWeight: dietProfile?.desired_weight ?? null,
            action: dietProfile?.action ?? null,
          }}
        >
          <ManageWeightClient />
        </WeightProvider>
      </main>
    </>
  )
}

export default ManageWeight;
