import React, { Component } from 'react'
import menu from './../assests/align-justify.svg'
import x from '../assests/X.svg'
import {Link} from 'react-router-dom'
import Nav from './nav'


export default class App extends Component {

	constructor(){
		super()

		this.state={
			showModal: false
		}
		this.showSettings = this.showSettings.bind(this)
		this.exit = this.exit.bind(this)
	}

	showSettings(event){
		this.setState({
			showModal: true
		})
	}

	exit(){
		this.setState({
			showModal: false
		})
	}

    
	render(){
		return (
			<div className='App'>

				<Nav/>
				<div className="front-text">
					<p className="name">YOOO</p>
				</div>


				</div>
		)
	}
} 