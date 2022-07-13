import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [name, setItemName] = useState("");
  const [category, setItemCategory] = useState("All");


  function handleItemNameChange(event) {
    setItemName(event.target.value)
  }

  function handleItemCategoryChange(event) {
    setItemCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleItemNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
