import { Link } from "react-router-dom"
import { useState } from 'react'

const iconStyle = { width: 24, height: 24, stroke: 'currentColor', fill: 'none', strokeWidth: 1.5 }

export default function Navbar() {
  const [dark, setDark] = useState(true)

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('light', next)
  }

  return (
    <nav className="navbar">
      <div className="navbar-links">

      <Link to="/" aria-label="Home">
      <svg viewBox="0 0 24 24" style={iconStyle}>
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      strokeLinecap="round"
      strokeLinejoin="round"
       />
      </svg>
      </Link>

      <Link to="/projects" aria-label="Projects">
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 12h4" strokeLinecap="round" />
          </svg>
        </Link>

        <Link to="/certificates" aria-label="Certificates">
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>
<Link to="/contact" aria-label="contact"> 
        <a href="#contact" aria-label="Contact">
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        </Link>
      </div>
      <button type="button" className="navbar-theme" onClick={toggleTheme} aria-label="Toggle theme">
        {dark ? (
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </nav>
  )
}
