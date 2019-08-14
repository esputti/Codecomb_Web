import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import codecomb from './codecomb.jpg';


import SearchBox from './SearchBox';
import words from './words';
import ResultList from './ResultList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      results: [],
      loading: false,
    }
    this.updateSearchString = this.updateSearchString.bind(this);
    this.receivedResponse = this.receivedResponse.bind(this);
    this.receivedResponseError = this.receivedResponseError.bind(this);
  }

  updateSearchString(value) {
    this.setState(() => ({searchString: value, loading: true}));
    console.log('In update searchstring' + value);

    //http://127.0.0.1:5000?searchString=
    axios.get(`http://b4b7b121.ngrok.io/codecomb?query=`+value)
        .then(this.receivedResponse)
        .catch(this.receivedResponseError)
  }

  receivedResponse(response) {
    console.log(response.data); 
    this.setState(() => ({results: response.data, loading: false}));
    //this.setState(() => ({results: [{'title': 'RenItem', 'path': '/src'}, {'title': 'RenItem', 'path': '/bin'}], loading: false}));
  }

  receivedResponseError(error) {
      console.log(error);
      this.setState(() => ({results: [], loading: false}));
  }

  renderResultList() {
    if (this.state.searchString.length === 0){
      return null;
    }
    return <ResultList searchString={this.state.searchString} loading={this.state.loading} results={this.state.results}/>;
  }
  render() {
    return (
      <div className="App">
        <div className="App-Img">
          <img src={codecomb} alt="Logo" style={{width: '400px', height: '200px'}}/>
        </div>
        <div className="App-Component">    
            <SearchBox items={words} callback={this.updateSearchString}/>
        </div>
        <div className="App-Results">
          {this.renderResultList()}
        </div>
      </div>
    );
  }
}

export default App;
