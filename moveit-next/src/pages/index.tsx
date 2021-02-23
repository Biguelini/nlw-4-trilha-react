import { CompletedChallenges } from '../components/CompletedChallenges';
import { Coutdown } from '../components/Countdown';
import { Experiencebar } from '../components/Experiencebar';
import { Profile } from '../components/Profile';

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit | clone by Biguelini</title>
      </Head>
      <Experiencebar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Coutdown/>
        </div>
        <div></div>
      </section>
    </div>
  )
}
