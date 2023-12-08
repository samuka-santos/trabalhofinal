import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Pages.module.css'

export default function Home() {
  return (
    <div  className={styles.body}>
      <Head>
        <title> EmojInforma </title>
      </Head>
      <Header/>
      <Navbar/>
      <div className={styles.home}>
        <main className={styles.main}>
          <h1>O que é BocaWeb?</h1>
            <p>
              O BocaWeb é um portal inovador desenvolvido como resultado da pesquisa de doutorado de Ricardo Nascimento, no Programa de Pós-Graduação em Educação da UFGD (Universidade Federal da Grande Dourados). Este projeto, em parceria com o IFMS (Instituto Federal do Mato Grosso do Sul), visa proporcionar acessibilidade a pessoas com deficiência visual. O BocaWeb funciona como um repositório de Objetos Digitais em Audiodescrição (ODAs), permitindo que usuários tenham acesso a informações contidas em imagens por meio de audiodescrição.
              </p>
          <h1>Para que serve o BocaWeb?</h1>
          <p>
            O BocaWeb tem um propósito fundamental: tornar as informações visuais disponíveis na internet acessíveis para pessoas com deficiência visual. Os Objetos Digitais em Audiodescrição (ODAs) consistem em imagens estáticas, textos descritivos e arquivos de áudio que oferecem uma experiência completa para os usuários que dependem de audiodescrição. Além de ser uma fonte gratuita para consulta de ODAs, o BocaWeb incentiva a colaboração da comunidade, permitindo que usuários se envolvam no projeto, avaliando, cadastrando ou revisando ODAs.
          </p>
          <h1>Como funciona o BocaWeb?</h1>
          <p>
            O BocaWeb opera como um portal que proporciona consultas gratuitas a um banco de dados de Objetos Digitais em Audiodescrição. Os usuários podem navegar pelo portal, realizar buscas e ter acesso a informações contidas em imagens por meio de audiodescrição. Além disso, o BocaWeb convida a comunidade a participar ativamente do projeto, possibilitando que os usuários se tornem colaboradores. Esses colaboradores têm a oportunidade de avaliar, cadastrar ou revisar ODAs, contribuindo assim para o crescimento e a qualidade do banco de dados. O portal é uma ferramenta valiosa não apenas para o acesso à informação, mas também para promover a inclusão e participação ativa na criação de um ambiente online mais acessível.
          </p>
          <p className={styles.link}><a href="/objetos"> Clique aqui para acessar a lista de alguns objetos. </a></p>
        </main>
        </div>
      <Footer/>
    </div>
  )
}
