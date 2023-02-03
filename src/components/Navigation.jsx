import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav className='nav'>
			<span >

				<Link className='link' to={'/'}>Tracker</Link>
				<Link className='link' to={'/records'}>Records</Link>
				<Link className='link' to={'/about'}>About</Link>
			</span>


		</nav>
	)
}

export default Navigation
