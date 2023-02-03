import React from 'react'
import { useState } from 'react'
import cancelLogo from './img/cancel.svg'
import plusLogo from './img/plus.svg'


const TrackerPage = () => {

	const Monday = ['жим ногами', 'разгибание ног', 'сгибание ног', 'армейский жим штанги стоя', 'подъем гантелей через стороны'];
	const Tuesday = ['Жим гантелей лежа', 'жим лежа на наклонной скамье ', 'отжимание от брусьев', 'французский жим штанги лежа'];
	const Friday = ['Подтягивание на турнике', 'тяга горизонтального блока к поясу сидя', 'тяги гантели одной рукой в наклоне', 'сгибание рук со штангой стоя']
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
	const plusClicked = 'plus-btn-clicked'
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
			<div className="mainpath">
				<div className="exname">{`${currentMass[massIndex]}(${massIndex + 1}/${currentMass.length})`}</div>
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
