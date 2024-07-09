import styles from "./Header.module.css"

export default function Header(){
    return(
        <header className={styles.header}>
            <span>VideoTeca</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    )
}