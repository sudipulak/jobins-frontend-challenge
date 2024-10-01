import { Outlet } from "react-router-dom"
import Sidebar from "@/components/layouts/Sidebar"
import Header from "@/components/layouts/Header"

const Layout = () => {
    return (
        <>
            <div className="main-wrapper">
                <Sidebar />
                <div className="content-wrapper">
                    <Header />
                    <div>
                        {<Outlet />}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout