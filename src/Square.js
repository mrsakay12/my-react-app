import React from 'react';



class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: "gray",
            eneabled: true,
            }
    }

    clickThis = () => {
        this.setState({
            backgroundColor: "white",
            eneabled: false,
            });

    }



   render (){
    return (
        <div onClick={this.clickThis} className="square">
            {this.props.content}
            {this.props.index}
     

        </div>
    );
   } 

   

}

export default  Square;

