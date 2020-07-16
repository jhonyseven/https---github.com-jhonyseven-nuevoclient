import React from "react"
import {Link} from 'gatsby'

export default function Header() {
    return (
        <header>
            <h1>//Rich Editor </h1>
            <div className="navegacion"> 
                <Link to="/">HOME</Link>
                <Link to="dashboardDos">EDITOR</Link>
            </div>
        </header>
    )
}