import React from 'react'

export default function Col({children}) {
    return (
        <div className='col-10 mx-auto col-md-6 col-lg-4 d-flex justify-content-center my-3'>
            {children}
        </div>
    )
}

