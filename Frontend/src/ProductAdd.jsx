import React from 'react'

const ProductAdd = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.image.files[0])

    const formData = new FormData()
    formData.append("name", e.target.name.value)
    formData.append("des", e.target.des.value)
    formData.append("price", e.target.price.value)
    formData.append("image", e.target.image.files[0])

    fetch("http://localhost:8000/product/insert", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(((json)=>{
        console.log(json)
    }))
    .catch((err)=>{
        console.log(err)
    })
}
return (
<div>
     <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input type="text" name="name" placeholder="Product Name" /> <br />
            <input type="text" name="des" placeholder="Product Desc" /> <br />
            <input type="text" name="price" placeholder="Product Price" /> <br />
            Image : <input type="file" name="image" /> <br />
            <input type="submit" value="Add Product" />
        </form>
</div>
)
}

export default ProductAdd