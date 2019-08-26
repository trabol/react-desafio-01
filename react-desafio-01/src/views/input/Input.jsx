import React, {Component} from 'react';
class Input extends Component{

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="search-input">
                <input type="text" placeholder="search hero"/>
            </div>
        );
    }
}

export default Input;