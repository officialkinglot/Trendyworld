import "./AddProduct.css"
import upload_area from "../../assets/cloud.png"
import { useState } from "react"

 
const AddProduct = () => {

    const [image, setImage] = useState(false);

    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
        category: 'woman',
        new_price: '',
        old_price: ''
    })

    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) =>{
        setProductDetails({ ...productDetails,[e.target.name]:e.target.value })
    }

    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);  

        await fetch('https://trendyworldbackend.onrender.com/upload', {
            method: 'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        })
        .then((resp) => resp.json()).then((data) =>{responseData=data});

         if (responseData.success) { product.image = responseData.image_url; 
            console.log(product); await fetch('https://trendyworldbackend.onrender.com/addproduct', 

            { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json', }, 
            body: JSON.stringify(product), }) .then((resp) => resp.json()) .then((data) => { if (data.success)
                 { alert('Product Added Successfully'); } else { alert('Failed');}}) .catch((error) => { console.error('Error:', error); alert('An error occurred'); }); 
        }
    };

    return (
        <div className="add-product">
            <div className="add-product-item-field">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type Here" />
            </div>
            <div className="add-product-price">
                <div className="add-product-item-field">
                    <p>Price</p>
                    <input  value={productDetails.old_price} onChange={changeHandler} type="currency" name="old_price" placeholder="Type Here" />
                </div>
                <div className="add-product-item-field">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price}  onChange={changeHandler} type="currency" name="new_price" placeholder="Type Here" />
                </div>
            </div>
            <div className="add-product-item-field">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kids</option>
                    <option value="shoes">Shoes</option>
                </select>
            </div>
            <div className="add-product-item-field">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} alt="" className="add-product-thumbnail-img" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>
            <button onClick={()=>{Add_Product()}} className="add-product-btn">Add</button>
        </div>
    );
};
export default AddProduct
