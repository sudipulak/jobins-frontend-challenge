import { useLocation } from "react-router-dom"
import BellImg from '@/assets/bell.svg'

const Header = () => {
    const location = useLocation();
    const path = location.pathname.split('-').join(' ')
    const pageTitle = path.charAt(1).toUpperCase() + path.slice(2);

    return (
        <header>
            <h1>{location.pathname === '/' ? 'Dashboard' : pageTitle}</h1>
            <div className="profile-box">
                {/* Notification  */}
                <div className="notification">
                    <img src={BellImg} alt="" />
                    <span>4</span>
                </div>
                {/* Profile  */}
                <div className="profile">
                    <span className="active"></span>
                </div>
            </div>
        </header>
    )
}

export default Header