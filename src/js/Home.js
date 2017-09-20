import React, { Component } from 'react'
import menu from './../assests/align-justify.svg'
import me from '../assests/IMG_5070.svg'
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
					<menu>
						<img src={x} alt=""/>
						<a id="home" className="menu-item" href="/">Home</a>
						<a id="about" className="menu-item" href="/about">About</a>
						<a id="contact" className="menu-item" href="/contact">Contact</a>
						<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
					</menu>
				</div> 
				:
				null
				}

				<img onClick={this.showSettings} className="threeLines" src={menu} alt="menu"/>
                <div className="front_text">
                     <p className="name">a</p>

				<div className="rightSide"></div>
				<div className="rightSideTop">
					<img className="mee" src={me} alt="me"/>
				</div>
                </div> 
			</div>
		)
	}
} 