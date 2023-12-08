import styles from '../styles/Components.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p> Desenvolvido por <a target='_blank' href="https://www.instagram.com/samuka112358/"><em>Samuel Santos Silva</em></a> </p>
            <p> Frameworks 2 - <a target='_blank' href="https://www.instagram.com/ricardo.nasc/"><em>Ricardo Nascimento</em></a></p>
            <p> IFMS Campus Dourados </p>
        </footer>
    )
}