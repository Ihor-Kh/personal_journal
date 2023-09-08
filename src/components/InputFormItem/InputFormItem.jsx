import styles from './InputFormItem.module.css';

function InputFormItem({children, icon, name}) {
	return (
		<div>
			<div className={ styles['input-form-item'] }>
				<img src={ `/${ icon }` } alt={ icon }/>
				<div>{ name }</div>
				{ children }

			</div>
			<div className={ styles['input-form-item__border'] }></div>
		</div>
	);
}

export default InputFormItem;