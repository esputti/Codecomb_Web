import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImgOverlay, CardHeader, Button, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import PropTypes from 'prop-types';


export default class ResultItem extends React.Component {
    constructor(props){
        super(props);  
    }

    cardSelected(filepath) {

    }

    render() {
        const { result } = this.props;

        const relativeFilePath = "file:///" + result.location;
        //const url = URL.createObjectUrl(relativeFilePath)
        return (
            <div> 
                <ListGroupItem tag="a" href={relativeFilePath}  style={{width:"100%", border: "1px solid grey", bordertop: "0px solid grey", margin: "8px"}}>
                    <ListGroupItemHeading  target="_blank" style={{ fontWeight:"bold" }}>{result.name}</ListGroupItemHeading>
                    <ListGroupItemText style={{margin:"3px"}}>
                    {result.location}
                    </ListGroupItemText>
                </ListGroupItem>
                {/* <Card  onClick={() => this.cardSelected(result.path)} style={{width:"100%", height:"60%", border: "1px solid grey", bordertop: "0px solid grey", margin: "8px"}}>
                    <CardBody>
                        <CardTitle style={{ fontWeight:"bold" }}>{result.name}</CardTitle>
                        <CardSubtitle style={{margin:"3px"}}>{result.location}</CardSubtitle>
                        <Button type="text/local" href={relativeFilePath} target="_blank" style={{margin:"3px"}}>Open</Button>
                    </CardBody>
                </Card> */}
            </div>
        );
    }
}


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

Card.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    inverse: PropTypes.bool,
    color: PropTypes.string,
    body: PropTypes.bool,
    className: PropTypes.string
  };
  
  CardBody.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };
  
//   CardColumns.propTypes = {
//     // Pass in a Component to override default element
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     className: PropTypes.string
//   };
  
//   CardDeck.propTypes = {
//     // Pass in a Component to override default element
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     className: PropTypes.string
//   };
  
//   CardFooter.propTypes = {
//     // Pass in a Component to override default element
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     className: PropTypes.string
//   };
  
//   CardGroup.propTypes = {
//     // Pass in a Component to override default element
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     className: PropTypes.string
//   };
  
//   CardHeader.propTypes = {
//     // Pass in a Component to override default element
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     className: PropTypes.string
//   };
  
 CardImg.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
    top: PropTypes.bool,
    bottom: PropTypes.bool
  };
  
  CardImgOverlay.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };
  
  CardLink.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  };
  
  CardSubtitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };
  
  CardText.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };
  
  CardTitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };