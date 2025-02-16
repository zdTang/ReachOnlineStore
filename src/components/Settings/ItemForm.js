import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/index";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
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
  // State to manage form visibility
  const [formVisible, setFormVisible] = useState(false);
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
      //setFormVisible(false); // Hide the form after submission
    }
  };

  return (
    <>
      {/* Button to toggle form visibility */}
      {/* Button to toggle form visibility */}
      <button
        onClick={() => setFormVisible((prev) => !prev)} // Toggle form visibility
        className="bg-blue-500 text-white p-2 rounded flex items-center justify-between w-48"
      >
        <span>{formVisible ? "Hide Form" : "Add Item"}</span>
        {/* Icon placed on the right with some margin between the text */}
        <span className="ml-2">
          {formVisible ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </button>

      {/* Conditionally render the form based on formVisible */}
      {formVisible && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          {/* Quantity Input */}
          <div>
            <label className="block font-medium">Quantity:</label>
            <input
              type="number"
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
              type="number"
              step="0.01"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Price"
              className="border p-2 w-full"
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
      )}

      <div className="table-header">
        <h3 className="subtitle is-3">Items</h3>
      </div>
      <ul>{renderedItems}</ul>
    </>
  );
}
