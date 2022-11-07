import React from 'react';


const logoSection = <div class="logo">Logo here</div>




class Header extends React.Component{
  constructor(props){
      super(props);

  }
 

 render (){
  return (
    <div class="header" > 
    <div>
     
    </div>
    <div >
    <ul>
   <li> {this.props.content}</li>
    </ul>
  </div>
  </div>
  );
 } 
}



export default  Header;





