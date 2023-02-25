import React, { useState } from 'react'

import classes from './MyModal.css'
localStorage.setItem('isAdmin', null)



const MyModal = ({ visible, setVisible }) => {


	let modal = (
		<>
			< div className='myModal' onClick={() => setVisible(false)}>
				<div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
					<p style={{ color: '#fff', flexWrap: 'wrap', fontSize: '30px' }}>Enter the password to change</p>

					<input type="number" onChange={(e) => handleInputCheck(e)} /><p></p>
					<button type='submit' onClick={() => { setVisible(false); adminCheck(); }}>Sumbit</button>
				</div>
			</div >

		</>
	)


	const [password, setPassword] = useState(0)
	let rootClasses = [classes.MyModal]

	if (visible) {
		rootClasses.push(classes.active)
	}

	async function handleInputCheck(e) {
		e.preventDefault()
		setPassword(e.target.value)
		try {
			await submitForm(password)
		} catch (err) {
			console.log(err)
		}
	}

	function submitForm(password) {
		return new Promise((resolve, reject) => {
			let result = Number(password) === 111
			if (result) {
				resolve()
			}
		})
	}


	function adminCheck() {

		if (Number(password) === 111) {

			localStorage.setItem('isAdmin', 'true')


		}
	}


	return (
		<>

			{modal}

		</>

	)

}

export default MyModal









