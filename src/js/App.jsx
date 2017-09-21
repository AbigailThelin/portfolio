import React, { Component } from 'react'
import Home from './Home.js'
import Router from '../router.js'

export default class App extends Component {
	render(){
		return (
			<div className='App'>
				{Router}
			</div>
		)
	}
}