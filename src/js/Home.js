import React, { Component } from 'react'
import menu from './../assests/align-justify.svg'

export default class App extends Component {

	constructor(){
		super()

		this.state={

		}
		this.toggle = this.toggle.bind(this)
	}

		toggle(){
			
		}

    
	render(){
		return (
			<div className='App'>
				<img onClick={this.toggle} className="threeLines" src={menu} alt="menu"/> 
				<div className="menu">
					<ul>
						<li>ABOUT</li>
						<li>PROJECTS</li>
						<li>CONTACT</li>
					</ul>
				</div>

                <div className="front_text">
                    {/* <p className="name">ABIGAIL,</p>
                    <p className="job">WEB DEV</p> */}
                </div>
			</div>
		)
	}
}