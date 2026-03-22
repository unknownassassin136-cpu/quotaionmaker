import React, { useState } from 'react';
import { updateItemAmount } from '../utils/calculations.js';

const ItemsEditor = ({ items, onItemsChange }) => {
  const [newItem, setNewItem] = useState({ description: '', qty: 1, rate: 0 });

  const addItem = () => {
    if (newItem.description && newItem.qty > 0 && newItem.rate > 0) {
      const itemWithAmount = updateItemAmount(newItem);
      onItemsChange([...items, itemWithAmount]);
      setNewItem({ description: '', qty: 1, rate: 0 });
    }
  };

  const updateItem = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: field === 'qty' || field === 'rate' ? parseFloat(value) || 0 : value };
    
    if (field === 'qty' || field === 'rate') {
      updatedItems[index] = updateItemAmount(updatedItems[index]);
    }
    
    onItemsChange(updatedItems);
  };

  const deleteItem = (index) => {
    onItemsChange(items.filter((_, i) => i !== index));
  };

  return (
    <div className="form-section">
      <h3>Items</h3>
      
      <table className="items-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => updateItem(index, 'qty', e.target.value)}
                  min="0"
                  step="0.01"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) => updateItem(index, 'rate', e.target.value)}
                  min="0"
                  step="0.01"
                />
              </td>
              <td>₹{item.amount?.toLocaleString()}</td>
              <td>
                <div className="item-actions">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(index)}
                    style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-row">
        <div className="form-group">
          <label>Description</label>
          <input
            value={newItem.description}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            placeholder="Enter item description"
          />
        </div>
        <div className="form-group">
          <label>Qty</label>
          <input
            type="number"
            value={newItem.qty}
            onChange={(e) => setNewItem({ ...newItem, qty: parseFloat(e.target.value) || 0 })}
            min="0"
            step="0.01"
          />
        </div>
        <div className="form-group">
          <label>Rate</label>
          <input
            type="number"
            value={newItem.rate}
            onChange={(e) => setNewItem({ ...newItem, rate: parseFloat(e.target.value) || 0 })}
            min="0"
            step="0.01"
          />
        </div>
        <div style={{ alignSelf: 'end' }}>
          <button className="btn btn-primary" onClick={addItem}>
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsEditor;
