import { useEffect, useState } from "react";
import Base_Url from "../config/Base_Url";
import axios from "axios";
import { message } from "antd";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();

  const [input, setInput] = useState({
    bookname: "",
    author: "",
    category: "",
    publisher: "",
    description: "",
    language: "",
    mrp: "",
    price: ""
  });

  const [image, setImage] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  // Load product details by ID
  const loadProductDetails = async () => {
    try {
      const api = `${Base_Url}/admin/getproductdetails/?id=${id}`;
      const response = await axios.get(api);
      setInput(response.data);
    } catch (error) {
      console.error("Failed to load product details", error);
      messageApi.error("Failed to load product details.");
    }
  };

  useEffect(() => {
    loadProductDetails();
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleFile = (e) => {
    setImage([...e.target.files]); // Convert FileList to Array
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const api = `${Base_Url}/admin/editproduct`;
      const formData = new FormData();

      // Append all form fields
      for (let key in input) {
        formData.append(key, input[key]);
      }

      // Append images (optional)
      if (image.length > 0) {
        for (let i = 0; i < image.length; i++) {
          formData.append("image", image[i]);
        }
      }

      // ✅ Log the FormData content (for debugging)
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }

      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      messageApi.success(response.data.msg);
    } catch (err) {
      console.error("Edit failed:", err);
      messageApi.error("Failed to edit product.");
    }
  };

  return (
    <>
      {contextHolder}
      <h1 style={{ textAlign: "center", backgroundColor: "grey", color: "white" }}>Edit Product</h1>
      <hr />
      <div id="AddProduct">
        <form id="AddProductForm" onSubmit={handleSubmit}>
          <label>Book Name</label>
          <input
            type="text"
            name="bookname"
            value={input.bookname}
            onChange={handleInput}
            placeholder="Book Name"
            required
          />

          <label>Author Name</label>
          <input
            type="text"
            name="author"
            value={input.author}
            onChange={handleInput}
            placeholder="Author Name"
            required
          />
          <br />

          <label>Category</label>
          <input
            type="text"
            name="category"
            value={input.category}
            onChange={handleInput}
            placeholder="e.g. Novel, Technology"
            required
          />

          <label>Publisher</label>
          <input
            type="text"
            name="publisher"
            value={input.publisher}
            onChange={handleInput}
            placeholder="e.g. Penguin"
            required
          />
          <br />

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={handleInput}
            placeholder="Description"
            required
          />

          <label>Language</label>
          <select name="language" value={input.language} onChange={handleInput} required>
            <option value="">Select</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
          <br />

          <label>MRP</label>
          <input
            type="number"
            name="mrp"
            value={input.mrp}
            onChange={handleInput}
            placeholder="e.g. 200"
            required
          />

          <label>Price</label>
          <input
            type="number"
            name="price"
            value={input.price}
            onChange={handleInput}
            placeholder="e.g. 150"
            required
          />
          <br />

          <label>Upload Image</label>
          <input type="file" onChange={handleFile} multiple />
          <br />

          <button type="submit">Edit</button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
