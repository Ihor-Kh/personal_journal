import styles from './HeaderLeft.module.css';

function HeaderLeft() {
    return (
        <img className={styles.logo} src="/logo.svg" alt="logo"/>
    );
}

export default HeaderLeft;