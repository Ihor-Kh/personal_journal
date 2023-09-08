import './JournalItem.css';

function JournalItem({title, text, date}) {
	const formatDate = new Intl.DateTimeFormat('ru-RU').format(date);
	// const formatDate = new Date().toLocaleString();

	return (
		// <div className="journal-item">
		<>
			<div className="journal-item__header">{ title }</div>
			<div className="journal-item__body">
				<div className="journal-item__date">{ formatDate }</div>
				<div className="journal-item__text">{ text }</div>
			</div>
		</>
		// </div>
	);
}

export default JournalItem;