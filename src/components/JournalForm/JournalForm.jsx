import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import { useState } from 'react';
import InputFormItem from '../InputFormItem/InputFormItem.jsx';

function JournalForm({onSubmit}) {

	const [formValid, setFormValid] = useState({
		title: true,
		date: true,
		text: true,
	});

	const addJournalItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());

		let validForm = true;
		console.log(data);

		Object.keys(formValid).forEach((key) => {
			if (!data[key] && !data[key]?.trim()) {
				setFormValid((prev) => ({...prev, [key]: false}));
				validForm = false;
			} else {
				setFormValid((prev) => ({...prev, [key]: true}));
			}
		});

		if (!validForm) return;
		onSubmit(data);
		console.log(data);
	};

	const notValidClass = (nameInput) => {
		return formValid[nameInput] ? '' : styles['journal-form__input--not-valid'];
	};

	return (
		<form className={ styles['journal-form'] } onSubmit={ addJournalItem }>
			<div className={styles['journal-form__title']}>
				<input
					type='text'
					defaultValue="My default value"
					name='title'
					className={ `${ styles['input'] } ${ styles['title_journal'] } ${ notValidClass('title') }` }
				/>
				<div className={styles['journal-form__trash']}>
					<img src="/trash.svg" alt="trash"/>
				</div>
			</div>

			<div>
				<InputFormItem icon='calendar.svg' name='Дата'>
					<input
						type='date'
						defaultValue={ new Date().toISOString().split('T')[0] }
						name='date'
						className={ `${ styles['input'] } ${ notValidClass('date') }` }
					/>
				</InputFormItem>
				<InputFormItem icon='folder.svg' name='Метки'>
					<input
						type='text'
						name='tag'
						className={ `${ styles['input'] }` }
					/>
				</InputFormItem>
			</div>
			<textarea
				rows='6'
				name='text'
				className={ `${ styles['input'] } ${ notValidClass('text') }` }
			/>
			<Button text='Сохранить'/>
		</form>
	);
}

export default JournalForm;


































