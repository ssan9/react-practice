import React from 'react';

export default function Search(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search</label>&emsp;
            <input type="search" id="search" name="search" placeholder="Dale Cooper" 
                onChange={e => props.onChange(e.target.value)} />
        </form>
    );
}
