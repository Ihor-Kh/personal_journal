import styles from './HeaderLeft.module.css';
import SelectUser from '../SelectUser/SelectUser.jsx';

function HeaderLeft() {
	return (
		<>
			<img className={ styles.logo } src="/logo.svg" alt="logo"/>
			<SelectUser/>
		</>
	);
}

export default HeaderLeft;