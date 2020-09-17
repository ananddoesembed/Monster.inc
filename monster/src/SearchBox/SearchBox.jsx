import React from 'react'
import './SearchBox.css'
export default function SearchBox(props) {
    return (
        <div>
            <input className='search' type='search' placeholder='Search monsters' onChange={props.SearchbarHandler}/>
             
        </div>
    )
}
