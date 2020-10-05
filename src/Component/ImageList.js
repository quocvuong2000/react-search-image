import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';


const ImageList = props => {
    const getImage = props.image.map((image) => {
        return <ImageCard  key={image.id} image={image} />
    })
    return <div className="image-list">{getImage}</div>;
}

export default ImageList;

