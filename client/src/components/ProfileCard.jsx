function ProfileCard({ displayName = 'Unknown User', userName = 'Unknown', profilePicture = 'defaulter.png' }) {

    let clicked = true
    const toggle = (e) => {
        clicked = !clicked
        if (clicked) {
            e.target.classList.remove('clicked')
        } else {
            e.target.classList.add('clicked')
        }
    }

    return <div className="ProfileCard BorderedContainer clickable" onClick={toggle}>
        <img className='pfp' src={`../../src/assets/${profilePicture}`} />
        <div className="ProfileCardData">
            <strong>{displayName}</strong>
            <span className="subtle">@{userName}</span>
        </div>
    </div>
}

export default ProfileCard