export const INITIAL_STATE_VALID = {
	isValid: {
		title: true,
		date: true,
		text: true,
	},
	values: {
		title: '',
		date: new Date().toISOString().split('T')[0],
		text: '',
		tag: '',
	},
	isValidFormToSubmit: false,
};

export const formReducer = (state, action) => {
	switch (action.type) {
		case 'SET_VALUE':
			return {...state, values: {...state.values, ...action.payload}};
		case 'CLEAR':
			return {...INITIAL_STATE_VALID};
		case 'RESET':
			return {...state, isValid: INITIAL_STATE_VALID.isValid};
		case 'SUBMIT': {
			const isValid = {
				title: state.values.title?.trim().length > 0,
				date: !!state.values.date,
				text: state.values.text?.trim().length > 0,
			};

			return {
				isValid: {...isValid},
				values: state.values,
				isValidFormToSubmit: isValid.title && isValid.date && isValid.text,
			};
		}
	}
};