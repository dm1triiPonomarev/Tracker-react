import React from 'react'
import { useState } from 'react';
import MyModal from '../components/MyModal/MyModal';


export default function Records({ items, onChange }) {
	const [isAdmin, setIsAdmin] = useState(null)
	const [god, setGod] = useState('')
	return (
		<>
			<div>
				<h1 className='records-title'>My Records</h1>
				<ul className="records-ul">
					{
						items.map((item) => (
							<li className='records-li'>
								<RecordsList setGod={setGod} setIsAdmin={setIsAdmin} isAdmin={isAdmin} item={item} onChangeFunction={onChange} />
							</li>
						)
						)
					}
				</ul>
				{god === 'god' && (
					<div className={god}></div>
				)}
			</div>
		</>
	)
}


const RecordsList = ({ item, onChangeFunction, setIsAdmin, isAdmin, setGod }) => {

	if (localStorage.getItem('isAdmin') === 'true') {
		setGod('god')
		setIsAdmin(true)
	}

	const [isEditing, setIsEditing] = useState(false)
	const [modal, setModal] = useState(false)



	let content;
	if (isEditing) {
		content = (
			<>
				{item.title}  |  {item.weight}
				<input id='input' className='records-input' type={'number'} value={item.weight}
					onChange={e => {
						onChangeFunction({
							...item,
							weight: e.target.value
						})
					}} />
				<button className='records-btn' onClick={() => setIsEditing(false)}>save</button>

			</>
		)
	} else {


		content = (
			<>
				{item.title}  |  {item.weight}
				{(isAdmin === true) ? (
					<>
						<button className='records-btn' onClick={() => setIsEditing(true)}>edit</button>
					</>
				)
					:
					(
						<>
							<button className='records-btn' onClick={() => setModal(true)}>closed
							</button>
							<div>
								{modal && (
									<MyModal visible={modal} setVisible={setModal} onChangeFunction={onChangeFunction} />
								)}

							</div>
						</>

					)
				}
			</>
		)
	}

	return (
		<>
			{content}
		</>
	)
}



