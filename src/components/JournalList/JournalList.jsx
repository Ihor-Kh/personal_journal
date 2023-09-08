import './JournalList.css';
import CardButton from '../CardButton/CardButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';

function JournalList({ items }) {

    if (!items.length) {
        return (
            <div className='journal-list'>
                <p>Записей нет, создайте первую!</p>
            </div>
        );
    }

    const sortJournalData = (a,b) => {
		if (a.date > b.date) {
			return 1;
		} else if (a.date < b.date) {
			return -1;
		}
	};

	return (
		<div className='journal-list'>
			{ items.sort(sortJournalData).map(el => {
				return (
					<CardButton key={ el.id }>
						<JournalItem
							title={ el.title }
							text={ el.text }
							date={ el.date }
						/>
					</CardButton>
				);
			}) }
		</div>
	);

	// return (
	// 	<div className='journal-list'>
	// 		{ children }
	// 	</div>
	// );
}

export default JournalList;