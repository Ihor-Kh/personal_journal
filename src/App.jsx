import './App.css';
import LeftLayout from './layouts/LeftLayout/LeftLayout.jsx';
import BodyLayout from './layouts/BodyLayout/BodyLayout.jsx';
import HeaderLeft from './components/HeaderLeft/HeaderLeft.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useState } from 'react';

function App() {
	const [journalData, setJournalData] = useState([
		{
			id: 1,
			title: 'First title',
			text: 'First text',
			date: new Date(),
		},
		{
			id: 2,
			title: 'Second title',
			text: 'Second text',
			date: new Date(),
		},

	]);

	const addJournalItemList = (data) => {
		setJournalData((oldItems) => [...oldItems, {
			...data,
			date: new Date(data.date),
			id: oldItems.length > 0 ? Math.max(...oldItems.map(el => el.id)) + 1 : 1,
		}]);
	};

	return (
		<div className='app'>
			<LeftLayout>
				<HeaderLeft/>
				<JournalAddButton/>
				<JournalList items={journalData} />
			</LeftLayout>
			<BodyLayout>
				<JournalForm onSubmit={addJournalItemList}/>
			</BodyLayout>
		</div>
	);
}

export default App;
