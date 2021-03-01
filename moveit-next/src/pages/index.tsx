import { CompletedChallenges } from '../components/CompletedChallenges';
import { Coutdown } from '../components/Countdown';
import { Experiencebar } from '../components/Experiencebar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit | clone by Biguelini</title>
      </Head>
      <Experiencebar/>
      <CountdownProvider>
        <section>
          <div>
            <Profile/>
            <CompletedChallenges/>
            <Coutdown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
