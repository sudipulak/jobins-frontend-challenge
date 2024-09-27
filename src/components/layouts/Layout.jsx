import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <div className="flex">
                <div className="text-left w-1/6 h-screen bg-orange-300">
                    <h2>LOGO</h2>
                    <ul>
                        <li>
                            <Link to="/order-management">Order Management</Link>
                        </li>
                    </ul>
                </div>
                <div className="float-right w-auto">
                    <div className="header h-12 bg-pink-300">
                        Header
                    </div>
                    <div className="w-40">
                        {<Outlet />}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout