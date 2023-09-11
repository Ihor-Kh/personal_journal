import './CardButton.css';

function CardButton({ children, className, onClick }) {
	const classes = 'card-button ' + (className ?? '');

	return (
		<button className={classes} onClick={onClick}>
			{ children }
		</button>
	);
}

export default CardButton;