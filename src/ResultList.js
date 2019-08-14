import React from 'react';
import axios from 'axios';

import { Spinner } from 'reactstrap';
import {  ListGroup } from 'reactstrap';

//import { MDBSpinner } from 'mdbreact';

import ResultItem from './ResultItem';

export default class ResultList extends React.Component {

    constructor(props){
        super(props);
        // this.state = {
        //     results: [{'title': 'RenItem', 'path': '/src'}, {'title': 'RenItem', 'path': '/bin'}],
        //     loading: false,
        // }
        // this.receivedResponse = this.receivedResponse.bind(this);
        // this.receivedResponseError = this.receivedResponseError.bind(this);
    }

    // componentDidMount() {
    //     console.log('In ResultList '+ this.props.searchString);
    //     this.setState(() => ({loading: true}));
    //     axios.get(`http://127.0.0.1:5000?searchString=`+this.props.searchString)
    //     .then(this.receivedResponse)
    //     .catch(this.receivedResponseError)
    // }

    // receivedResponse(response) {
    //     console.log(response.data); 
    //     this.setState({results: [{'title': 'RenItem', 'path': '/src'}, {'title': 'RenItem', 'path': '/bin'}], loading: false});
    // }

    // receivedResponseError(error) {
    //     console.log(error);
    //     this.setState({results: [], loading: false});
    // }

    renderResults() {
        if (this.props.loading) {
            //  
            return (
                <Spinner style={{ width: '3rem', height: '3rem' }} />
            );
        }
        else{
            return (
                <div>
                    <ListGroup>
                        {
                            this.props.results.map((result) => {
                                return <ResultItem result={result}/>
                            })
                        }
                    </ListGroup>
                </div>
            );
        }
        
    }


    render() {
        console.log('In ResultList render'+ this.props.searchString);
        //this.setState(() => ({loading: true}));
        // axios.get(`http://127.0.0.1:5000?searchString=`+this.props.searchString)
        // .then(this.receivedResponse)
        // .catch(this.receivedResponseError)
        return (
            
            <div>
                {this.renderResults()}
            </div>
        );
    }


}