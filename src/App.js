import React from 'react'
import {Footer,Header,Possibility,Features,Blog,Whatgpt3} from './container';
import { Navbar,Cta,Brand } from './components';
import './App.css'

export default function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <Whatgpt3/>
        <Features/>
       
       
      
    </div>
  )
}
