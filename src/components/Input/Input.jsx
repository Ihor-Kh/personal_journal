import styles from './Input.module.css';
import { forwardRef } from 'react';

const Input = forwardRef( function Input ({className, isValid, appearance, ...props}, ref) {
	return (
		<input
			{ ...props }
			ref={ ref }
			className={
						`${className} 
						 ${ styles['input'] } 
						 ${ appearance === 'title' ? styles['title'] : '' } 
						 ${ isValid === false ? styles['not-valid'] : '' }`
					}
		/>
	);
});
export default Input;