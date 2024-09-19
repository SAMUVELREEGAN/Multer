import React, { useEffect, useState } from 'react'

const Productlist = () => {
  const widthStyle = {
    width: "10%"
}
const [products, setProducts] = useState(null);
useEffect(() => {
fetch("http://localhost:8000/product/list")
  .then((res) => res.json())
  .then((json) => {
    setProducts(json);
    console.log(json);
  })
  .catch((err) => {
    console.log(err);
  });
},[]);

return (
<div>
    {products &&
    products.map((e,index) => {
      return (
        <>
          <div class="card" key={index}>
            <img src={"http://localhost:8000/files/" + e.image} alt="phot" style={widthStyle}/>
            {/* <h1>{e.image}</h1> */}
            <p class="price">Rs.{e.price}</p>
            <p>{e.name}</p>
            <p >{e.des}.</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </>
      );
    })}
    
</div>
)
}

export default Productlist