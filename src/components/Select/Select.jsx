import styles from './Select.module.css';

function Select({options, value, setValue, ...props}) {

	return (
		<select
			{ ...props }
			value={ value }
			onChange={ event => setValue(Number(event.target.value)) }
		>
			{
				options.map(option => {
					return (
						<option
							key={ option.value }
							value={ option.value }
						>
							{ option.label ?? option.value }
						</option>
					);
				})
			}

		</select>
	);
}

export default Select;