import React from 'react';
import { connect } from 'react-redux';

function HeroPage(props) {
    console.log(props)
    return (
        <div>
            Hero Page!
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        currentHero: state.search.currentHero
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);