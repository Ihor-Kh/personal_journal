import './Button.css';

function Button({children, ...props}) {
    return (
        <button {...props} className='button accept'>
            {children}
        </button>
    );
}

export default Button;