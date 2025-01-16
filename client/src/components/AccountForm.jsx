function AccountForm({ type }) {
    return <>
        <main>
            <div className="BorderedContainer">
                {type === 'login' ? <h1>Login</h1> : type === 'create' ? <h1>Create Account</h1> : 'undefined'}
                <label htmlFor="email">E-Mail</label>
                <input id="email" placeholder="E-Mail..."></input>
                <label htmlFor="password">Password</label>
                <input id="password" placeholder="Password"></input>
                
                <button className='btn btn-primary' type="submit">{type === 'login' ? 'Login' : type === 'create' ? 'Create Account' : 'undefined'}</button>
            </div>
        </main>
    </>
}
export default AccountForm