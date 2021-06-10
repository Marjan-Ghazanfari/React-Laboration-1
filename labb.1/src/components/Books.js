import React from 'react'
import { useState } from 'react';
import BookDetails from './BookDetails';

const Books = (props) => {
    const [details, setDetails] = useState(false)

    const handleDetails = () => {
        setDetails(prevDetails => !prevDetails);
    }

    return (
        <div className="card m-3 mt-5 bg-light shadow">
            <BookDetails book={ props.book } handleDetails={ handleDetails } details={ details }/>
        </div>
    )
}

export default Books
