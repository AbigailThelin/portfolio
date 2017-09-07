import React, { Component } from 'react'
import menu from './../assests/align-justify.svg'


export default class App extends Component {

	constructor(){
		super()

		this.state={

		}
	}

    
	render(){
		return (
			<div className='App'>
				 <img className="threeLines" src={menu} alt="menu"/>
				 <div className="menu">
					<ul>
						<li>ABOUT</li>
						<li>PROJECTS</li>
						<li>CONTACT</li>
					</ul>
				</div> 

	
                 <div className="front_text">
                     <p className="name">a</p>

				<div className="rightSide"></div>
				<div className="rightSideTop"></div>
                </div> 
			</div>
		)
	}
} 