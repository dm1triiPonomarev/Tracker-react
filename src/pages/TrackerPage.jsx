import React from 'react'
import { useState } from 'react'
import cancelLogo from './img/cancel.svg'
import plusLogo from './img/plus.svg'


const TrackerPage = () => {

	const Monday = ['monday 1 ', 'monday 2', 'monday 3', 'monday 4'];
	const Tuesday = ['tuesday1', 'tuesday2', 'tuesday 3'];
	const Friday = ['friday 1', 'friday 2 ', 'friday 3']
	let currrentDay = new Date()
	let day = currrentDay.getDay()
	let currentMass = Friday
	const [massIndex, setMassIndex] = useState(0)

	if (day === 1) {
		currentMass = Monday
	} else if (day === 3) {
		currentMass = Tuesday
	} else {
		currentMass = Friday
	}

	function SkipIndex() {

		if (massIndex === currentMass.length - 1) {
			setMassIndex(0)
		} else {
			setMassIndex(() => massIndex + 1)
			console.log(massIndex);
		}
	}

	const cancel = cancelLogo
	const plus = plusLogo
	const [count, setCount] = useState(0)
	const [plusClasses, setPlusClasses] = useState(['plus-btn'])
	const [cancelClasses, setCancelClasses] = useState(['cancel-btn'])


	function Increment() {
		setCount(() => count + 1)
	}

	function Decrement() {
		setCount(0)
	}


	function SwitchPlusColor() {
		setPlusClasses('plus-btn-clicked')
		setTimeout(() => {
			setPlusClasses(['plus-btn'])
		}, 400)
	}

	function SwitchCacncelColor() {
		setCancelClasses('cancel-btn-clicked')
		setTimeout(() => {
			setCancelClasses(['cancel-btn'])
		}, 400)
	}

	return (
		<>
			<div className='container'>
				<div className="title">ПОДХОДО
					-
					TRACKER</div>
			</div>
			<div className="exname"><p>{currentMass[massIndex]}</p>  <p>({massIndex + 1}/{currentMass.length})</p></div>
			<div className="mainpath">
				<div className="counter">{count}</div>
				<div className="btns">
					<button onClick={() => { Increment(); SwitchPlusColor() }} className={plusClasses}>
						<img className='plus-img' src={plus} alt="plus" />
					</button>
					<button onClick={() => { Decrement(); SwitchCacncelColor(); SkipIndex() }} className={cancelClasses}>
						<img className='cancel-img' src={cancel} alt="cancel" />
					</button>
				</div>
			</div>
		</>
	)
}

export default TrackerPage
