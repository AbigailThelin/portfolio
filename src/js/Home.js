import React, { Component } from 'react'
import menu from './../assests/align-justify.svg'
// import me from '../assests/IMG_5070.svg'
import x from '../assests/X.svg'
// import { slide as Menu } from 'react-burger-menu'


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

				{
				this.state.showModal
				?
				<div className="menu">
					<menu className="menu">
						<img onClick={this.exit} className="x" src={x} alt=""/>
						<a id="li_items" className="home" href="/">Home</a>
						<a id="li_items" className="about" href="/about">About</a>
						<a id="li_items" className="contact" href="/contact">Contact</a>
						<a id="li_items" className="settings" href="/settings">Settings</a>
					</menu>
				</div> 
				:
				null
				}
				<img onClick={this.showSettings} className="threeLines" src={menu} alt="menu"/>
				

				<div className="front-text">
					<p className="name">YOOO</p>
				</div>


				</div>
		)
	}
} 