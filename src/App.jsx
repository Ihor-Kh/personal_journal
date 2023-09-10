import './App.css';
import LeftLayout from './layouts/LeftLayout/LeftLayout.jsx';
import BodyLayout from './layouts/BodyLayout/BodyLayout.jsx';
import HeaderLeft from './components/HeaderLeft/HeaderLeft.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useLocalstorage } from './hooks/use-localstorage.hook.js';

function mapItems (items) {
	if (!items.length) return [];
	return items.map(item => ({
		...item,
		date: new Date(item.date),
	}));
}

function App() {
	const [journalData, setJournalData] = useLocalstorage('journalData');


	// useEffect(() => {
	// 	if (journalData.length) localStorage.setItem('journalData', JSON.stringify(journalData));
	// }, [journalData]);


	const addJournalItemList = (data) => {
		setJournalData([...journalData, {
			title: data.title?.trim(),
			text: data.text?.trim(),
			tag: data.tag?.trim(),
			date: new Date(data.date),
			id: journalData.length > 0 ? Math.max(...journalData.map(el => el.id)) + 1 : 1,
		}]);
	};
	console.log(mapItems(journalData), '       journalData');
	return (
		<div className='app'>
			<LeftLayout>
				<HeaderLeft/>
				<JournalAddButton/>
				<JournalList items={ mapItems(journalData) }/>
			</LeftLayout>
			<BodyLayout>
				<JournalForm onSubmit={ addJournalItemList }/>
			</BodyLayout>
		</div>
	);
}

export default App;
