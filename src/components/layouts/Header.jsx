import BellImg from '../../assets/Bell.svg'

const Header = () => {
    return (
        <header>
            <h1>Dashboard</h1>
            <div className="profile-box">
                <div className="notification">
                    <img src={BellImg} alt="" />
                    <span>4</span>
                </div>
                <div className="profile">
                    <span className="active"></span>
                </div>
            </div>
        </header>
    )
}

export default Header