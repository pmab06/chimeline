import '../styles/LandingPage.css';

function Start() {
	return <div>
		<div className="Start d-flex flex-column vh-100">
			<nav className="lp-nav">
				<ul className="d-flex flex-row justify-content-around align-items-center">
					<li><a href="/">Sign Up</a></li>
					<li><a href="/home">Home</a></li>
					<li><a href="/testpage">Test Page</a></li>
					<li><a href="/Settings">Settings</a></li>
				</ul>
			</nav>
			<main className="d-flex flex-wrap flex-row justify-content-evenly align-items-center vh-100">
				<div className="website-logo">
					<img src="../src/assets/Chimeline.png" height="164px"></img>
				</div>
				<div className="card homepage-card p-5">
					<div className="d-flex flex-column card-body">
						<h1 className="card-title m-0">Create an account</h1>

						<label htmlFor="email" className="mt-3">E-mail</label>
						<input type="text" id="email" className="mb-3"></input>

						<label htmlFor="password">Password</label>
						<input type="text" id="password" className="mb-4"></input>
						<a href="/home" className="btn btn-primary mb-5">Create account</a>
						<p className="card-subtitle align-self-center">...or <a href="/login" type="button" className="btn btn-outline-primary">Login</a> if you already have one</p>
					</div>
				</div>
			</main>
		</div>
	</div>
}

export default Start