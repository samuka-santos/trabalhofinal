import Head from 'next/head'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from '../../styles/Pages.module.css';

function Objeto ({objeto = {}}) {
    return (
        <div className={styles.body}>
        <Head>
          <title> {objeto.nome} - EmojInforma </title>
        </Head>
            <Header/>
            <Navbar/>

            <div className={styles.objeto}>
                <main className={styles.main}>
                    <p>{objeto.id}</p>
                    <h1>{objeto.nome}</h1>
                    <p><em>{objeto.usuario}</em></p>
                    <p>{objeto.descricao}</p>
                </main>
            </div>

            <Footer/>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch ('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()

    const objeto = await repo[context.params.id];
    return {
        props: {objeto}
    }
})

export async function getStaticPaths() {
    const res = await fetch ('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const objetos = await repo;
    const paths = objetos.map((objeto, index) => {
        return {params:{id:String(index)}};
    });
    return {
        paths,
        fallback: false,
    }
}

export default Objeto;