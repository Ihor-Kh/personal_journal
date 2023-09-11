import styles from './SelectUser.module.css';
import Select from '../Select/Select.jsx';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context.jsx';

function SelectUser() {

	const { userId, setUserId } = useContext(UserContext);

	return (
		<Select
			value={userId}
			setValue={setUserId}
			options={[{value: 1, label: 'Один'},{value: 2, label: 'Два'}]}
		/>
	);
}

export default SelectUser;