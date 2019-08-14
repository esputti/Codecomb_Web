import React from 'react';
import './App.css';
import './SearchBox.css';

export default class SearchBox extends React.Component {
    // state = {
    //   query: "",
    //   data: [],
    //   filteredData: []
    // };

    constructor(props){
      super(props);

      this.state = {
        suggestions: [],
        text: '',
      }
    }

    onTextChanged = (e) => {
      const {items} = this.props;
      const value = e.target.value;
      //this.props.callback(value);
      if (value.length == 0){
        this.setState(() => ({
          suggestions: [],
          text: '',
        }));
      }
      else {
        const regex =  new RegExp(`^${value}`, 'i');
        const suggestions = items.sort().filter(v => regex.test(v));
        this.setState(() => ({ suggestions, text: value }));
      }
    }

    suggestionSelected(value) {
      this.setState(() => ({
        text: value,
        suggestions: [],
      }));
      this.props.callback(value);
    }
    renderSuggestions(){
      const {suggestions} = this.state;
      if (suggestions.length == 0){
        return null;
      }
      return (
          <ul>
            {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
          </ul>
      );
    }

    handleKeyPress = (event) => {
      const value = event.target.value;
      if(event.key === 'Enter'){
        console.log('enter press here! ');
        this.props.callback(value);
      }
    }

    render() {
      const { text } = this.state;
      return (
        <div className="SearchBox">
          <input value={text} onChange={this.onTextChanged} onKeyPress={this.handleKeyPress} type="text"/>
          {this.renderSuggestions()}
        </div>
      );
    }
  
    // handleInputChange = event => {
    //   const query = event.target.value;
  
    //   this.setState(prevState => {
    //     const filteredData = prevState.data.filter(element => {
    //       return element.name.toLowerCase().includes(query.toLowerCase());
    //     });
  
    //     return {
    //       query,
    //       filteredData
    //     };
    //   });
    // };
  
    // getData = () => {
    //   fetch(`http://localhost:4000/restaurants`)
    //     .then(response => response.json())
    //     .then(data => {
    //       const { query } = this.state;
    //       const filteredData = data.filter(element => {
    //         return element.name.toLowerCase().includes(query.toLowerCase());
    //       });
  
    //       this.setState({
    //         data,
    //         filteredData
    //       });
    //     });
    // };
  
    // componentWillMount() {
    //   this.getData();
    // }
  
    // render() {
    //   return (
    //     <div className="searchForm">
          
    //           <input
    //             placeholder="Search for..."
    //             value={this.state.query}
    //             onChange={this.handleInputChange}
    //           />
    //       <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
    //     </div>
    //   );
    // }
  }