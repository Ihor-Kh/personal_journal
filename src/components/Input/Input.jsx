import styles from './Input.module.css';
import { forwardRef } from 'react';

const Input = forwardRef( function Input ({className, isValid = true, appearance, ...props}, ref) {
	return (
		<input
			{ ...props }
			ref={ ref }
			className={
						`${ className } 
						 ${ styles['input'] } 
						 ${ appearance === 'title' ? styles['title'] : '' } 
						 ${ isValid ? '' : styles['not-valid'] }`
					}
		/>
	);
});
export default Input;