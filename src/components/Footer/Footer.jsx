import React from 'react'
import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/abraham.huacchillo/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.instagram.com/abrahamhuacchillo/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <p>Desarrollado por Jarbram</p>
    </footer>
}

export default Footer