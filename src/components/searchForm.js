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
        <div className='input-section-wrapper'>
            <form className='input-section' onSubmit={handleSubmit}>
                <input
                className='input-section-searchbar' 
                placeholder='Search any Hero/Villain'
                onChange={handleChange}
                />

                <button className='input-section-submit'>
                    Search
                </button>
            </form>
            <span className='brand-name'>HERODEX</span>
        </div>
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