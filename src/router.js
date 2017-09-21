import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from './js/Home'
import Portfolio from './js/Portfolio'
import About from './js/About'
import Contact from './js/Contact'



export default (
            <div>
                <Switch>
                    <Route component={Home} path='/' exact/>
                    <Route component={About} path='/About' />
                    <Route component={Portfolio} path='/portfolio' />
                    <Route component={Contact} path="/contact"/>
                </Switch>
            </div>
        )
