import React from 'react'

const BookDetails = (props) => {
    const book = props.book

    return (
        <div className="d-flex justify-content-between">
            <div className="col-2">
                <img src={ book.img } alt={ book.title } className="w-100 h-100"></img>
            </div>
            <div className={`col-10 text-right ${props.details ? "navy" : ""}`}>
                <div className="card-body">
                    <h5 className="card-title mt-3">{ book.title }</h5>
                    <p className="card-text"><small className="text-muted">By { book.author }</small></p>
                    <button type="submit" className="btn btn-success mt-3" onClick={ props.handleDetails }>{props.details ? 'Show Less...' : 'Show More Details...'}</button>
                    {
                        props.details ?  <div className="card-text mt-2"><b>Summary: </b><small>{ book.summary }</small></div> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default BookDetails
