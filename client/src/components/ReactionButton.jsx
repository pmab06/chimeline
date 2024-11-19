import React, {useState} from 'react'

function ReactionButton({ icon, btnclass = '' }) {
    return (
        <button className={'reaction-button '+btnclass}>
            <span className="material-symbols-outlined">
                {icon}
            </span>
        </button>
    );
}

export default ReactionButton