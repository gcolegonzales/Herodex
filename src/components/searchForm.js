import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitInput } from '../actions/submit';

function SearchForm(props) {
    const [ searchValue, setSearchValue ] = useState('');

    const handleChange = e => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted!')
        props.submitInput(searchValue);
        
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
        </form>
    )
}

function mapStateToProps(state) {
    return {
        inputValue: state.search.inputValue
    }
}

const mapDispatchToProps = {
    submitInput
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);