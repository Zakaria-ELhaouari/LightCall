import React from 'react'

const Footer = () => {
    return (
        <footer className="main-footer">
        <div className="footer-left">
          Copyright &copy; {new Date().getFullYear()} <div className="bullet"></div> Design By <a href="https://med.in/">LightCode</a>
        </div>
        <div className="footer-right">
          1.0.0
        </div>
      </footer>
    )
}

export default Footer
