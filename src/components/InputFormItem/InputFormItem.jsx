import styles from './InputFormItem.module.css';

function InputFormItem({children, icon, nameLabel, nameInput}) {
	return (
		<div>
			<div className={ styles['input-form-item'] }>
				<label htmlFor={ nameInput } className={styles['input-form-item__label']}>
					<img src={ `/${ icon }` } alt={ icon }/>
					<div className={styles['input-form-item__name']}>{ nameLabel }</div>
				</label>
				{ children }
			</div>
			<div className={ styles['input-form-item__border'] }></div>
		</div>
	);
}

export default InputFormItem;