import React from 'react'
import Header from './components/Header'
import SocialButtons from './components/SocialButtons'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import './App.css'

export default function App(){
    return(
        <div className="card">
            <Header />
            <SocialButtons /> 
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

