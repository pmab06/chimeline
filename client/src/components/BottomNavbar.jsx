function BottomNavbar(isVisible) {
    return <>
        {
        isVisible ?

            <nav className="bottom-navbar d-flex d-lg-none">
                <a href="#">Home</a>
                <a href="#">Test Page</a>
                <a href="#">Landing Page</a>
                <a href="#">Coming Soon</a>
            </nav>

            : null
        }
    </>
}

export default BottomNavbar