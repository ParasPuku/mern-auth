import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="bg-slate-200">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to="/"><h1 className="font-bold">AUTH APP</h1></Link>
            <ul className="flex gap-4">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about/:slug"><li>About</li></Link>
                <Link to="/sign-in/:slug"><li>Sign In</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header