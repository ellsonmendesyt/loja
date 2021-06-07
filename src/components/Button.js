import React from 'react'

export default function Button({color='primary',label,callback}) {
    return (
        <button
         className={`btn btn-${color}`}
         onClick={()=>callback()}
        >
        {label}
        </button>
    )
}



// <button type="button" class="btn btn-outline-primary">Primary</button>