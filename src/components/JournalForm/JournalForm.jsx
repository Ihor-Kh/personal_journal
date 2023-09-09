import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import { useEffect, useReducer } from 'react';
import InputFormItem from '../InputFormItem/InputFormItem.jsx';
import { formReducer, INITIAL_STATE_VALID } from './JournalForm.state.js';

function JournalForm({onSubmit}) {

	const [formValid, dispatchValid] = useReducer(formReducer, {...INITIAL_STATE_VALID});
	const { isValid, isValidFormToSubmit, values } = formValid;

	const addJournalItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());

		dispatchValid({type: 'SUBMIT', payload: data});
	};

	useEffect(() => {
		if (isValidFormToSubmit) {
			onSubmit(formValid.values);
			dispatchValid({ type: 'CLEAR' });
		}
	}, [isValidFormToSubmit]);

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.date || !isValid.text) {
			timerId = setTimeout(() => {
				// setFormValid(INITIAL_STATE_VALID);
				dispatchValid({type: 'RESET'});
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [formValid]);

	const notValidClass = (nameInput) => {
		return isValid[nameInput] ? '' : styles['journal-form__input--not-valid'];
	};

	const onChangeInput = (event) => {
		// const { name, value } = event.target;
		dispatchValid({type: 'SET_VALUE', payload: {[event.target.name]: event.target.value}});
	};

	return (
		<form className={ styles['journal-form'] } onSubmit={ addJournalItem }>
			<div className={styles['journal-form__title']}>
				<input
					type='text'
					name='title'
					onChange={onChangeInput}
					value={ values.title }
					className={ `${ styles['input'] } ${ styles['title_journal'] } ${ notValidClass('title') }` }
				/>
				<div className={styles['journal-form__trash']}>
					<img src="/trash.svg" alt="trash"/>
				</div>
			</div>

			<div>
				<InputFormItem icon='calendar.svg' nameLabel='Дата' nameInput='date'>
					<input
						type='date'
						name='date'
						id='date'
						onChange={onChangeInput}
						value={ values.date }
						className={ `${ styles['input'] } ${ notValidClass('date') }` }
					/>
				</InputFormItem>
				<InputFormItem icon='folder.svg' nameLabel='Метки' nameInput='tag'>
					<input
						type='text'
						name='tag'
						id='tag'
						onChange={onChangeInput}
						value={ values.tag }
						className={ `${ styles['input'] }` }
					/>
				</InputFormItem>
			</div>
			<textarea
				rows='15'
				name='text'
				onChange={onChangeInput}
				value={ values.text }
				className={ `${ styles['input'] } ${ styles['input-textarea'] } ${ notValidClass('text') }` }
			/>
			<Button text='Сохранить'/>
		</form>
	);
}

export default JournalForm;


































