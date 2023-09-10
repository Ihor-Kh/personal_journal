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
			return { ...state, values: { ...state.values, ...action.payload}};
		case 'CLEAR':
			console.log('чистим банан');
			return { ...INITIAL_STATE_VALID };
		case 'RESET':
			return { ...state, isValid: INITIAL_STATE_VALID.isValid };
		case 'SUBMIT':
			console.log(state.isValidFormToSubmit, '    state.isValidFormToSubmit');
			return {
				isValid: {
					title: state.values.title?.trim().length > 0,
					date: !!state.values.date,
					text: state.values.text?.trim().length > 0,
				},
				values: state.values,
				isValidFormToSubmit: state.isValid.title && state.isValid.date && state.isValid.text,
			};
	}
};