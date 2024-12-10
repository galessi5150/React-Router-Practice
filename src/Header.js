import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div>
                <NavLink to ='/' activeClassName = 'active'>Home</NavLink>
                <NavLink to ='/about' activeClassName = 'active'>About</NavLink>
            </div>
        </div>
    )
}

export default Header;