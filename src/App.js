import React from 'react';
import { connect } from 'react-redux';
import './App.css';

// Components
import SearchForm from './components/searchForm';
import HeroList from './components/HeroList';

function App(props) {
  return (
    <div className="App">
      <div className="header">
        <SearchForm />
      </div>

      {/* {props.inputValue !== '' && (
          <div>
            <h1>{props.inputValue}</h1>
          </div>
        )} */}

      <HeroList />

    </div>
  );
}

function mapStateToProps(state) {
  return {
    inputValue: state.search.inputValue
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);