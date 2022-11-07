import React, { useState, useEffect} from 'react';



function CityList(){
    const [cities, setCity] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:9000/cities')
        .then(response => response.json())
        .then(data => {
            setCity(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);
    const onOptionCityHandler = (event) => {
        console.log("User Selected City - ", event.target.value)
    }
    
    return (
        <div>
                    <div className="App">
                    <div> 
            <h3>List of City  </h3>
                 <select onChange={onOptionCityHandler}>
                 <option>Please Select City</option>
                     {cities.map((cities) => {
                       return <option >
                       {cities.city}
                       </option>
                      })}
                  </select>

                
                        </div>
                    </div>
        </div>
    );
}

export default CityList;