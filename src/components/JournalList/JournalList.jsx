import './JournalList.css';
import CardButton from '../CardButton/CardButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';
import { UserContext } from '../../context/user.context.jsx';
import { useContext, useMemo } from 'react';
import { formReducer } from '../JournalForm/JournalForm.state.js';

function JournalList({ items, setItem }) {

	const { userId } = useContext(UserContext);

	const sortJournalData = (a,b) => {
		if (a.date > b.date) {
			return 1;
		} else if (a.date < b.date) {
			return -1;
		}
	};

	const filterJournalData = (item) => {
		return +item.user === userId;
	};

	const computedFilteredItems = useMemo(() => items
			.filter(filterJournalData)
			.sort(sortJournalData)
	, [items, userId]);

    if (!items.length) {
        return (
            <div className='journal-list'>
                <p>Записей нет, создайте первую!</p>
            </div>
        );
    }

	return (
		<div className='journal-list'>
			{ computedFilteredItems.map(el => {
				return (
					<CardButton key={ el.id } onClick={ () => setItem(el) }>
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