import { useEffect, useState } from 'react';

export function useLocalstorage(key) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const res = localStorage.getItem(key);
		if (res) {
			try {
				setData(JSON.parse(res));
			} catch (e) {
				console.log(e);
				setData([]);
			}
		}
	}, []);

	console.log(data);
	const saveData = (data) => {
		if (Array.isArray(data)) {
			console.log(data, '    data');
			localStorage.setItem(key, JSON.stringify(data));
			console.log(JSON.stringify(data));
			setData(data);
		}
	};

	return [data, saveData];
}