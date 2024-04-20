import Head from 'next/head';
import Navigation from '../pages/components/Navigation';
import Homepage from './components/Homepage';
import style from '../styles/components/_homepage.module.scss';
export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Room Homepage</title>
        <link rel="icon" href='/favicon-32x32.png' />
      </Head>
      <main className={style.main}> 
        <Navigation />
        <Homepage />
      </main>
    </div>
  )
}
