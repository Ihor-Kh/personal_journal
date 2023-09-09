export const INITIAL_STATE_VALID = {
	isValid: {
		title: true,
		date: true,
		text: true,
	},
	values: {
		title: 'Название записи',
		date: new Date().toISOString().split('T')[0],
		text: '',
		tag: '',
	},
	isValidFormToSubmit: false,
};

export const formReducer = (state, action) => {
	switch (action.type) {
		case 'SET_VALUE':
			console.log(action.payload);
			console.log(state.values, 'банан');
			return { ...state, values: { ...state.values, ...action.payload}};
		case 'CLEAR':
			console.log('чистим банан');
			return { ...state, values: { ...INITIAL_STATE_VALID.values} };
		case 'RESET':
			return { ...state, isValid: INITIAL_STATE_VALID.isValid };
		case 'SUBMIT':
			return {
				isValid: {
					title: action.payload.title?.trim().length > 0,
					date: !!action.payload.date,
					text: action.payload.text?.trim().length > 0,
				},
				values: action.payload,
				isValidFormToSubmit: Object.values(state.isValid).every((value) => value === true),
			};
	}
};