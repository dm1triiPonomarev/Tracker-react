import React, { useState } from 'react'

import Records from './RecordsList'


const RecordsPage = () => {

	const exerisises = [
		{ id: 0, title: 'x', weight: '80' },
		{ id: 1, title: 'y', weight: '55' },
		{ id: 2, title: 'z', weight: '30' },


	]
	const [items, setItems] = useState(exerisises)


	//Подстановка измененного элемента
	function handleChangeWeight(newWeight) {

		setItems(items.map(i => {
			if (i.id === newWeight.id) {
				return newWeight;
			} else {
				return i;
			}
		}))


	}

	return (

		<Records items={items} onChange={handleChangeWeight} />

	)
}

export default RecordsPage
