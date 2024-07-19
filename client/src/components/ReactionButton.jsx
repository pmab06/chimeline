import React, {useState} from 'react'

function ReactionButton({ icon }) {
    return (
        <button className='reaction-button'>
            <span className="material-symbols-outlined">
                {icon}
            </span>
        </button>
    );
}

export default ReactionButton