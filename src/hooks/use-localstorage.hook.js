import { useEffect, useState } from 'react';

export function useLocalstorage(key) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const res = localStorage.getItem(key);
		if (res) {
			try {
				setData(JSON.parse(res));
			} catch (e) {
				setData([]);
			}
		}
	}, []);

	const saveData = (data) => {
		if (Array.isArray(data)) {
			localStorage.setItem(key, JSON.stringify(data));
			setData(data);
		}
	};

	return [data, saveData];
}