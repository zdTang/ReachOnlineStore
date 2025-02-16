import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/index";

export default function ItemForm() {
  const dispatch = useDispatch();

  const itemList = useSelector((state) => {
    console.log(state);
    return state.items.items;
  });

  const renderedItems = (Array.isArray(itemList) ? itemList : []).map(
    (item) => <li key={item.id}>{item.name}</li>
  );

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    quantity: "",
    price: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.quantity) {
      newErrors.quantity = "Quantity is required.";
    } else if (!/^\d+$/.test(formData.quantity)) {
      newErrors.quantity = "Quantity must be a whole number.";
    }
    if (!formData.price) {
      newErrors.price = "Price is required.";
    } else if (!/^\d+(\.\d{1,2})?$/.test(formData.price)) {
      newErrors.price = "Price must be a valid float value.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      formData.id = crypto.randomUUID(); // give it an unique id
      setFormData({ name: "", quantity: "", price: "" });
      dispatch(addItemToCart(formData));
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Product Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Quantity Input */}
          <div>
            <label className="block font-medium">Quantity:</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity}</p>
            )}
          </div>

          {/* Price Input */}
          <div>
            <label className="block font-medium">Price:</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="table-header">
        <h3 className="subtitle is-3">Items</h3>
      </div>
      <ul>{renderedItems}</ul>
    </>
  );
}
