import React from 'react';


class SearchBar extends React.Component {
    state = { text: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.text);
    };

    render() {
        return (<div className="segment ui">
            <form className ="ui form" onSubmit={this.onFormSubmit}>
                <label><h4>Search Image</h4></label>
                <input type="text"
                onChange={(e) => {this.setState({text : e.target.value })}}
                value= {this.state.text}
                ></input>
            </form>
        </div>);
    }
}


export default SearchBar;