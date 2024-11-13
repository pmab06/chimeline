function SendButton({onclick}) {
    

    return <button onClick={onclick} className='SendButton'>
        <span className="material-symbols-outlined" style={{ color: "white" }}>
            send
        </span>
    </button>
}

export default SendButton