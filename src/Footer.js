import React from 'react';



class Footer extends React.Component{
    constructor(props){
        super(props);

    }
   

   render (){
    return (
        <div >
    
        {this.props.content}
   
        </div>
    );
   } 
}



export default  Footer;




