import React from 'react';

const TotalsBox = ({ charges, totals, onChargesChange }) => {
  const updateCharge = (field, value) => {
    onChargesChange({ ...charges, [field]: parseFloat(value) || 0 });
  };

  return (
    <div className="form-section">
      <h3>Totals & Charges</h3>
      
      <div className="totals-grid">
        <div className="form-group">
          <label>GST/Tax (%)</label>
          <input
            type="number"
            value={charges.taxPercent}
            onChange={(e) => updateCharge('taxPercent', e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
        
        <div className="form-group">
          <label>Packing Charges</label>
          <input
            type="number"
            value={charges.packingCharge}
            onChange={(e) => updateCharge('packingCharge', e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
      </div>

      <div style={{ 
        background: '#f8fafc', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        border: '2px solid #e2e8f0' 
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', marginBottom: '0.5rem' }}>
          <span>Subtotal:</span>
          <strong>₹{totals.subtotal?.toLocaleString()}</strong>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', marginBottom: '0.5rem' }}>
          <span>Tax ({charges.taxPercent}%):</span>
          <strong>₹{totals.taxAmount?.toLocaleString()}</strong>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', marginBottom: '1rem' }}>
          <span>Packing Charge:</span>
          <strong>₹{charges.packingCharge?.toLocaleString()}</strong>
        </div>
        <div style={{ 
          borderTop: '3px solid #2563eb', 
          paddingTop: '1rem',
          display: 'grid', 
          gridTemplateColumns: '1fr auto', 
          gap: '1rem',
          fontSize: '1.2rem',
          fontWeight: 'bold'
        }}>
          <span>Total:</span>
          <strong>₹{totals.total?.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</strong>
        </div>
        <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#6b7280', fontStyle: 'italic' }}>
          {totals.totalInWords}
        </div>
      </div>
    </div>
  );
};

export default TotalsBox;
