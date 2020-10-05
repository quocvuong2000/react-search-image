import React from "react";
import SearchBar from "./SearchBar";
import axios from 'axios';
import ImageList from './ImageList';


class App extends React.Component {
    state= {image : []};

     onFormSubmit = async (term) => {
        const Response= await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers: {
                Authorization : 'Client-ID aa60bb60507f32cb271208df66deb6f956fb6db255d1889c1129cf83659f6153'
            }
        })
        this.setState({image : Response.data.results});
    }
    render() {
    return (
      <div className="ui container" style={{marginTop : 20}}>
        <SearchBar onSubmit={this.onFormSubmit}/>
        <ImageList image={this.state.image}/>
      </div>
    );
  }
}

export default App;
