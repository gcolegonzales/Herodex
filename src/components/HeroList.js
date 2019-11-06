import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectHero } from '../actions/selectHero';

function HeroList(props) {

    const handleClick = e => {
        e.preventDefault();
        
    }

    return (
        <div className='hero-card-wrapper'>
            {props.search.response.map((result) => {
                return <Link to={`/name/${result.name}`}>
                    <div className='hero-card' onClick={handleClick} key={result.id}>
                            <div className='hero-card-header'>
                                <h1>{result.name}</h1>
                                <h5>({result.biography['full-name']})</h5>
                            </div>
                        <img src={result.image.url} alt={result.name} />
                    </div>
                </Link>
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);