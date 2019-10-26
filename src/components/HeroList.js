import React from 'react';
import { connect } from 'react-redux';

function HeroList(props) {
    console.log(props)
    return (
        <div className='hero-card-wrapper'>
            {props.search.response.map((result) => {
                return <div className='hero-card' key={result.id}>
                            <div className='hero-card-header'>
                                <h1>{result.name}</h1>
                                <h5>({result.biography['full-name']})</h5>
                            </div>
                        <img src={result.image.url} alt={result.name} />
                    </div>
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