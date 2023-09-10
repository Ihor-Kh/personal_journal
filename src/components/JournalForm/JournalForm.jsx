import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import { useEffect, useReducer, useRef } from 'react';
import InputFormItem from '../InputFormItem/InputFormItem.jsx';
import { formReducer, INITIAL_STATE_VALID } from './JournalForm.state.js';
import Input from '../Input/Input.jsx';

function JournalForm({onSubmit}) {

	const [formValid, dispatchValid] = useReducer(formReducer, {...INITIAL_STATE_VALID});
	const {isValid, isValidFormToSubmit, values} = formValid;

	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();

	const addJournalItem = (event) => {
		event.preventDefault();
		// const formData = new FormData(event.target);
		// const data = Object.fromEntries(formData.entries());

		dispatchValid({type: 'SUBMIT'});
	};

	useEffect(() => {
		if (isValidFormToSubmit) {
			onSubmit(formValid.values);
			dispatchValid({type: 'CLEAR'});
		}
	}, [isValidFormToSubmit]);

	const focusInput = (isValid) => {
		// if (!isValid.title) titleRef.current.focus();
		// else if (!isValid.date) dateRef.current.focus();
		// else if (!isValid.text) textRef.current.focus();

		switch (true) {
			case !isValid.title:
				titleRef.current.focus();
				break;
			case !isValid.date:
				dateRef.current.focus();
				break;
			case !isValid.text:
				textRef.current.focus();
				break;
			default:
				break;
		}

	};

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.date || !isValid.text) {
			focusInput(isValid);
			timerId = setTimeout(() => {
				dispatchValid({type: 'RESET'});
			}, 2000);
		}
		return () => {
			console.log('CLEAR TIMEOUT');
			clearTimeout(timerId);
		};
	}, [isValid]);

	const notValidClass = (nameInput) => {
		return isValid[nameInput] ? '' : styles['journal-form__input--not-valid'];
	};

	const onChangeInput = (event) => {
		// const { name, value } = event.target;
		dispatchValid({type: 'SET_VALUE', payload: {[event.target.name]: event.target.value}});
	};

	return (
		<form className={ styles['journal-form'] } onSubmit={ addJournalItem }>
			<div className={ styles['journal-form__title'] }>
				<Input
					ref={ titleRef }
					appearance='title'
					isValid={isValid.title}
					type='text'
					name='title'
					onChange={ onChangeInput }
					value={ values.title }
				/>
				<div className={ styles['journal-form__trash'] }>
					<img src="/trash.svg" alt="trash"/>
				</div>
			</div>

			<div>
				<InputFormItem icon='calendar.svg' nameLabel='Дата' nameInput='date'>
					<Input
						ref={ dateRef }
						isValid={isValid.date}
						type='date'
						name='date'
						id='date'
						onChange={ onChangeInput }
						value={ values.date }
					/>
				</InputFormItem>
				<InputFormItem icon='folder.svg' nameLabel='Метки' nameInput='tag'>
					<Input
						type='text'
						name='tag'
						id='tag'
						onChange={ onChangeInput }
						value={ values.tag }
					/>
				</InputFormItem>
			</div>
			<textarea
				ref={ textRef }
				rows='15'
				name='text'
				onChange={ onChangeInput }
				value={ values.text }
				className={ `${ styles['input'] } ${ styles['input-textarea'] } ${ notValidClass('text') }` }
			/>
			<Button text='Сохранить'/>
		</form>
	);
}

export default JournalForm;


































