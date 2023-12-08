import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Pages.module.css'

import Link from 'next/link';

function Objetos({objetos}) {
  return (
    <div  className={styles.body}>
      <Head>
        <title> Objetos - EmojInforma </title>
      </Head>
      <Header/>
      <Navbar/>
      <div className={styles.objetos}>
        <main className={styles.main}><ul>
          
            {objetos.map((objeto, index) =>(
              <Link href='/objeto/[id]' as = {`/objeto/${index}`}>
              <div key = {objetos.id}>
                  <li>
                    {objeto.nome}
                  </li>
              </div>
              </Link>
            ))}
        </ul>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()

    const objetos = await repo;
    return { props: {objetos} }
}

export default Objetos;