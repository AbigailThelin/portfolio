import React, { Component } from 'react'
import menu from './../assests/align-justify.svg'

export default class App extends Component {



    
	render(){
		return (
			<div className='App'>
                <div className="front_text">
                    <img className="menu" src={menu} alt="menu"/>
                    <p className="name">Abigail,</p>
                    <p className="job">Web Dev</p>
                </div>
			</div>
		)
	}
}