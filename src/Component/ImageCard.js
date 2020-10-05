import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = { span: 0 }

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);
        this.imageRef.current.addEventListener('load', this.setSpan);
    }
    setSpan = ()=> {
        let height = this.imageRef.current.clientHeight;
        let span = Math.ceil(height/10);
        this.setState({span});
    }



    render() {
        const {description, urls} = this.props.image;

        return (
            <img style={{ gridRowEnd : `span ${this.state.span}`}}
            ref={this.imageRef}
            alt={description} src={urls.regular}></img>
        );
    }
}

export default ImageCard;