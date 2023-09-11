import './App.css';
import LeftLayout from './layouts/LeftLayout/LeftLayout.jsx';
import BodyLayout from './layouts/BodyLayout/BodyLayout.jsx';
import HeaderLeft from './components/HeaderLeft/HeaderLeft.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useLocalstorage } from './hooks/use-localstorage.hook.js';
import { UserContextProvider } from './context/user.context.jsx';
import { useState } from 'react';


function mapItems(items) {
	if (!items.length) return [];
	return items.map(item => ({
		...item,
		date: new Date(item.date),
	}));
}

function App() {
	const [journalData, setJournalData] = useLocalstorage('journalData');
	const [selectedItem, setSelectedItem] = useState({});

	// useEffect(() => {
	// 	if (journalData.length) localStorage.setItem('journalData', JSON.stringify(journalData));
	// }, [journalData]);

	const resetSelectedItem = () => {
		setSelectedItem({});
	};

	const addJournalItemList = (data) => {
		console.log(data, '        data');
		if (data.id) {
			setJournalData(journalData.map(el => {
				if (el.id === data.id) {
					return {
						...el,
						title: data.title?.trim(),
						text: data.text?.trim(),
						tag: data.tag?.trim(),
						date: new Date(data.date),
					};
				}
				return el;
			}));
			resetSelectedItem();
		} else {
			setJournalData([...journalData, {
				title: data.title?.trim(),
				text: data.text?.trim(),
				tag: data.tag?.trim(),
				date: new Date(data.date),
				id: journalData.length > 0 ? Math.max(...journalData.map(el => el.id)) + 1 : 1,
				user: data.user,
			}]);
		}

	};

	const deleteJournalItemList = (id) => {
		setJournalData(journalData.filter(el => el.id !== id));
		resetSelectedItem();
	};



	// useEffect(() => {
	// 	console.log('App useEffect');
	// 	console.log(selectedItem, '    selectedItem');
	// }, [selectedItem]);

	console.log('App render');

	return (
		<UserContextProvider>
			<div className='app'>
				<LeftLayout>
					<HeaderLeft/>
					<JournalAddButton onClick={ resetSelectedItem }/>
					<JournalList items={ mapItems(journalData) } setItem={ setSelectedItem }/>
				</LeftLayout>
				<BodyLayout>
					<JournalForm onSubmit={ addJournalItemList } selectedItem={ selectedItem } deleteItem={deleteJournalItemList}/>
				</BodyLayout>
			</div>
		</UserContextProvider>
	);
}

export default App;
