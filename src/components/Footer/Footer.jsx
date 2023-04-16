import React from 'react'
import './Footer.css'
import {RiFacebookBoxFill, RiInstagramFill} from 'react-icons/ri'
import {GiOrganigram} from 'react-icons/gi'

const Footer = () => {
    return <footer className='footer'>
        <div className='redes'>
            <a href='https://www.facebook.com/abraham.huacchillo/'>
            <RiFacebookBoxFill className='logoRedes' alt='Facebook' />
            </a>
            <a href='https://www.instagram.com/abrahamhuacchillo/'>
            <RiInstagramFill className='logoRedes' alt='instagram' />
            </a>
        </div>
        <GiOrganigram className='logo' alt='org' />
        <p>Organizados en un solo lugar</p>
    </footer>
}

export default Footer