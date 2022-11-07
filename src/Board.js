import React from 'react';

import Square from './Square.js';


class Board extends React.Component{
    constructor(props){
        super(props);
 
            
   }

   createSquare(index){
    return <Square index={index}/>


   }


   render (){
    return (
        <div >
           <div onClick={this.clickThis} >
            {this.createSquare(1)}
            {this.createSquare(2)}
            {this.createSquare(3)}
            </div>
            <div>
            {this.createSquare(4)}
            {this.createSquare(5)}
            {this.createSquare(6)}
            </div>
            <div>
            {this.createSquare(7)}
            {this.createSquare(8)}
            {this.createSquare(9)}
            </div>      

     
        </div>
    );
   } 

}

export default  Board;
