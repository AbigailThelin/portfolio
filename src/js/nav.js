import React, {Component} from 'react'
import x from '../assests/X.svg'
import {Link} from 'react-router-dom'
import menu from './../assests/align-justify.svg'



export default class nav extends Component{

	constructor(){
		super()

		this.state={
			showModal: false,
			transistion: false,
			changing: false
		}
		this.showSettings = this.showSettings.bind(this)
		this.exit = this.exit.bind(this)
		this.transistion = this.transistion.bind(this)
	}

	showSettings(event){
		this.setState({
			showModal: true
		})
	}

	exit(){
		this.setState({
			showModal: false,
			transistion: true
		})
	}
	
	transistion(){
		this.setState({
			transistion: true
		})
	}
    


    render(){
        return(
            <div className='nav' >
        {
				this.state.showModal
				?
				<div className="menu">
					<menu className="menu">
						<img onClick={this.exit} className="x" src={x} alt=""/>
						<Link id="li_items" className="home" to='/' onClick={this.transistion}>Home</Link>
						<Link id="li_items" className="about" to='/About' onClick={this.transistion}>About</Link>
						<Link id="li_items" className="contact" to='/portfolio' onClick={this.transistion}>Portfolio</Link>
						<Link id="li_items" className="settings"to='/contact' onClick={this.transistion}>Contact</Link>
					</menu>
				</div> 
				:
				null
		}
				<img onClick={this.showSettings} className="threeLines" src={menu} alt="menu"/>

		{
			this.state.transistion
			?
			null
			:
			<div className="transistion">
				<div className="top"></div>
				<div className="bottom"></div>
			</div>
		}
            </div>
        )
    }
}