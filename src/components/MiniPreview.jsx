import React from 'react';

const MiniPreview = ({ data, totals }) => {
  return (
    <div className="mini-preview">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        marginBottom: '20px',
        borderBottom: '2px solid #e5e7eb',
        paddingBottom: '15px'
      }}>
        <div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
            {data.companyDetails.name}
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            {data.companyDetails.mobile} | {data.companyDetails.email}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>QTN #{data.quotationInfo.quotationNumber}</div>
          <div>Date: {data.quotationInfo.date}</div>
        </div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <div style={{ fontWeight: '600', marginBottom: '5px' }}>Bill To:</div>
        <div style={{ marginBottom: '3px' }}>{data.billTo.name}</div>
        <div style={{ fontSize: '12px', color: '#6b7280' }}>{data.billTo.address}</div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontWeight: '600', marginBottom: '10px' }}>Items:</div>
        {data.items.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px solid #f3f4f6' }}>
            <div>
              <div>{item.description}</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Qty: {item.qty} x ₹{item.rate.toLocaleString()}</div>
            </div>
            <div style={{ fontWeight: '600' }}>₹{item.amount.toLocaleString()}</div>
          </div>
        ))}
      </div>

      <div style={{ 
        background: '#f8fafc', 
        padding: '15px', 
        borderRadius: '6px',
        marginBottom: '15px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span>Subtotal:</span>
          <span>₹{totals.subtotal.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span>GST ({data.charges.taxPercent}%):</span>
          <span>₹{totals.taxAmount.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>Packing:</span>
          <span>₹{data.charges.packingCharge.toLocaleString()}</span>
        </div>
        <div style={{ 
          borderTop: '2px solid #2563eb', 
          paddingTop: '8px',
          display: 'flex', 
          justifyContent: 'space-between',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          <span>Total:</span>
          <span>₹{totals.total.toLocaleString()}</span>
        </div>
        <div style={{ fontSize: '11px', fontStyle: 'italic', color: '#6b7280' }}>
          {totals.totalInWords}
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: '12px', color: '#6b7280' }}>
        <div>Thank you for your business!</div>
        <div style={{ marginTop: '5px' }}>
          {data.quotationInfo.notes}
        </div>
      </div>
    </div>
  );
};

export default MiniPreview;
