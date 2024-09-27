import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="content-wrapper">
                    <Header />
                    <div className="w-40">
                        {<Outlet />}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout