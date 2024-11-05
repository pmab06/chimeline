function BottomNavbar() {
    return <>
        <nav className="bottom-navbar d-flex d-lg-none">

            <a href="#">
                <span className="icon material-symbols-outlined">
                    home
                </span>
                Home
            </a>

            <a href="#">
                <span className="icon material-symbols-outlined">
                    labs
                </span>
                Test Page
            </a>

            <a href="#">
                <span className="icon material-symbols-outlined">
                    flight_land 
                </span>
                Landing Page
            </a>

            <a href="#">
                <span className="icon material-symbols-outlined">
                    construction
                </span>
                Coming Soon
            </a>

        </nav>
    </>
}

export default BottomNavbar