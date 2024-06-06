import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {

  return (
    <>
      <div className="d-flex flex-row justify-content-evenly align-items-center vh-100">
        <div className="d-flex flex-column website-logo">
          <img src="../src/assets/YaOnNetSlogan.png" height="164px"></img>
        </div>
        <div className="card homepage-card p-5">
          <div className="d-flex flex-column card-body">
            <h1 className="card-title m-0">Create an account</h1>

            <label htmlFor="email" className="mt-3">E-mail</label>
            <input type="text" id="email" className="mb-3"></input>

            <label htmlFor="password">Password</label>
            <input type="text" id="password" className="mb-4"></input>
            <button type="button" className="btn btn-primary mb-5">Create account</button>
            <p className="card-subtitle align-self-center">...or <button type="button" className="btn btn-outline-primary">Login</button> if you already have one</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
