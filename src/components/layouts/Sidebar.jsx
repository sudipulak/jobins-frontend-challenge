import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg'
import MenuTogglerImg from '../../assets/menu-toggler.svg'
import { useState } from 'react'

const Sidebar = () => {
    const [menuToggle, setMenuToggle] = useState(true);
    return (
        <aside className={menuToggle ? 'sidebar' : 'sidebar hide'}>
            <div className="logo-wrapper" >
                <Link to="/" className='logo'>
                    <img src={LogoImg} alt="" /> <span>JoBins</span>
                </Link>
                <span className='menu-toggler' onClick={() => setMenuToggle(!menuToggle)}>
                    <img src={MenuTogglerImg} alt="" />
                </span>
            </div >
            <ul>
                <li><span className='title'>Main Menu</span></li>
                <li>
                    <NavLink to="/">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4167 7.98416L12.5281 4.18183C11.6456 3.49522 10.4095 3.49522 9.52696 4.18183L4.63746 7.98416C4.042 8.44723 3.69386 9.15941 3.69421 9.91374V16.5137C3.69421 17.5263 4.51503 18.3471 5.52755 18.3471H16.5275C17.5401 18.3471 18.3609 17.5263 18.3609 16.5137V9.91374C18.3609 9.15933 18.0125 8.44708 17.4167 7.98416" stroke="#23272E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.6666 13.7499C12.6408 14.9718 9.35731 14.9718 7.33331 13.7499" stroke="#23272E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/order-management">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="5.50002" cy="17.4167" rx="1.83333" ry="1.83333" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <ellipse cx="5.50002" cy="17.4167" rx="1.83333" ry="1.83333" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <ellipse cx="15.5833" cy="17.4167" rx="1.83333" ry="1.83333" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <ellipse cx="15.5833" cy="17.4167" rx="1.83333" ry="1.83333" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.5834 15.5833H5.50002V2.75H3.66669" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.5834 15.5833H5.50002V2.75H3.66669" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.5 4.58337L18.3333 5.50004L17.4167 11.9167H5.5" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.5 4.58337L18.3333 5.50004L17.4167 11.9167H5.5" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Order Management</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/brand">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.0001 16.2707L5.34243 19.2453L6.42318 12.9451L1.83984 8.48367L8.16484 7.567L10.9937 1.83508L13.8225 7.567L20.1475 8.48367L15.5642 12.9451L16.6449 19.2453L11.0001 16.2707Z" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.0001 16.2707L5.34243 19.2453L6.42318 12.9451L1.83984 8.48367L8.16484 7.567L10.9937 1.83508L13.8225 7.567L20.1475 8.48367L15.5642 12.9451L16.6449 19.2453L11.0001 16.2707Z" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Brand</span>
                    </NavLink>
                </li>
                <li><span className='title'>Products</span></li>
                <li>
                    <NavLink to="/add-product">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="8.25" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="11" cy="11" r="8.25" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.25 11H13.75" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.25 11H13.75" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 8.25V13.75" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 8.25V13.75" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Add Products</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/product-list">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 2.75L18.3334 6.875V15.125L11 19.25L3.66669 15.125V6.875L11 2.75" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 2.75L18.3334 6.875V15.125L11 19.25L3.66669 15.125V6.875L11 2.75" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 11L18.3333 6.875" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 11L18.3333 6.875" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 11V19.25" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 11V19.25" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 11L3.66669 6.875" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 11L3.66669 6.875" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Product List</span>
                    </NavLink>
                </li>
            </ul>
        </aside >
    )
}

export default Sidebar