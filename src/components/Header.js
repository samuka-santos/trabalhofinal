import styles from '../styles/Components.module.css'

export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <a href="/">
                    <h1> &#x1F601;EmojInforma</h1>
                </a>
            </header>
        </div>
    )
}