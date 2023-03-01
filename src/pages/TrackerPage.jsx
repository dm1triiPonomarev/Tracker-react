import React from 'react'
import { useState } from 'react'
import cancelLogo from './img/cancel.svg'
import plusLogo from './img/plus.svg'


const TrackerPage = () => {
	const defaultDayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']






	let currrentDay = new Date()
	let day = currrentDay.getDay()
	const [massIndex, setMassIndex] = useState(0)

	let currentMass = [defaultDayArray[day] + " 1", defaultDayArray[day] + " 2", defaultDayArray[day] + " 3"]


	function SkipIndex() {
		if (massIndex === currentMass.length - 1) {
			setMassIndex(0)
		} else {
			setMassIndex(() => massIndex + 1)

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
