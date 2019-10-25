import React, { useState } from 'react';
import { connect } from 'react-redux';

function SearchForm(props) {
    // const [ inputValue, setInputValue ] = useState('');

    const handleChange = e => {
        e.preventDefault();
        // setInputValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <form className='input-section' onSubmit={handleSubmit}>
            <input
            className='input-section-searchbar' 
            placeholder='Search any Hero/Villain'
            onChange={handleChange}
            />

            <select className='input-section-dropdown'>
                <option>Marvel</option>
                <option>DC</option>
                <option>Hero</option>
                <option>Villain</option>
            </select>

            <button className='input-section-submit'>
                Search
            </button>

            <br/>
            {props.inputValue}
        </form>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        inputValue: state.search.inputValue
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);