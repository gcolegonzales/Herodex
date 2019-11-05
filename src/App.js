import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import SearchForm from './components/searchForm';
import HeroList from './components/HeroList';
import HeroPage from './components/HeroPage';

function App(props) {
  return (
    <div className="App">
      <div className="header">
        <Route exact path='/' component={SearchForm} />
        <Route exact path='/name/:name' render={() => <HeroPage hero={props.currentHero} />} />
      </div>

      <HeroList />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    inputValue: state.search.inputValue,
    currentHero: state.search.currentHero
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);