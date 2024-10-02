function SendButton({onclick}) {
    

    return <button onClick={onclick} className='SendButton'>
        <span className="material-symbols-outlined" style={{ color: "white", fontVariationSettings: "FILL 1" }}>
            send
        </span>
    </button>
}

export default SendButton