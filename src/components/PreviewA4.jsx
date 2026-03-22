import React from 'react';
// QRCode import moved to utils

const PreviewA4 = ({ data, totals }) => {
  const upiId = '9491201364@okbizaxis'; // Replace with actual UPI ID
  
  return (
    <div className="a4-preview" id="a4-preview">
      <div className="company-header">
        <div className="company-logo-placeholder">
          <img src="/assets/logo.png" alt="logo image" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }} />
          
        </div>
        <div className="company-info">
          <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>{data.companyDetails.name}</div>
          <div>{data.companyDetails.mobile}</div>
          <div>{data.companyDetails.email}</div>
          <div>{data.companyDetails.website}</div>
          <div>{data.companyDetails.address1}</div>
          <div>{data.companyDetails.address2}</div>
        </div>
      </div>

      <div className="quotation-meta">
        <div className="quotation-number">QUOTATION</div>
        <div style={{ marginBottom: '10px' }}>No: {data.quotationInfo.quotationNumber}</div>
        <div>Date: {data.quotationInfo.date}</div>
        <div>Expiry: {data.quotationInfo.expiryDate}</div>
      </div>

      <div className="bill-to-section">
        <div className="bill-to">
          <div className="section-title">Bill To:</div>
          <div style={{ marginBottom: '5px', fontWeight: '600' }}>{data.billTo.name}</div>
          <div>{data.billTo.mobile}</div>
          <div>{data.billTo.address}</div>
        </div>
        
        <div className="dates-section">
          <div className="section-title">Other Info:</div>
          <div>Notes: {data.quotationInfo.notes}</div>
        </div>
      </div>

      <table className="items-preview-table">
        <thead>
          <tr>
            <th style={{ width: '50%' }}>Description</th>
            <th style={{ width: '12%' }}>Qty</th>
            <th style={{ width: '15%' }}>Rate</th>
            <th style={{ width: '15%' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.qty}</td>
              <td>₹{item.rate.toLocaleString()}</td>
              <td style={{ textAlign: 'right' }}>₹{item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="totals-preview">
        <tbody>
          <tr>
            <td>Sub Total</td>
            <td style={{ textAlign: 'right' }}>₹{totals.subtotal.toLocaleString()}</td>
          </tr>
          <tr>
            <td>GST @{data.charges.taxPercent}%</td>
            <td style={{ textAlign: 'right' }}>₹{totals.taxAmount.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Packing Charge</td>
            <td style={{ textAlign: 'right' }}>₹{data.charges.packingCharge.toLocaleString()}</td>
          </tr>
          <tr className="grand-total">
            <td><strong>Total</strong></td>
            <td style={{ textAlign: 'right' }}><strong>₹{totals.total.toLocaleString()}</strong></td>
          </tr>
          <tr>
            <td colSpan="2" style={{ fontSize: '11px', fontStyle: 'italic' }}>
              {totals.totalInWords}
            </td>
          </tr>
        </tbody>
      </table>


      <div className="signature-section" style={{ marginLeft: 'auto', width: '200px' }}>
        <div className="signature-box" style={{ width: '200px', height: '80px', borderBottom: '1px solid #000', textAlign: 'center', fontSize: '11px' }}>
          <div style={{ marginBottom: '10px' }}>Authorised Signature</div>
          <div>{data.companyDetails.name}</div>
        </div>
      </div>



      <div className="payment-section">


        <h4 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '14px', fontWeight: 'bold', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>Payment Details</h4>


        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'flex-start' }}>
          <div>

            <div className="qr-placeholder" style={{ width: '160px', height: '160px' }}>


              <img src="/assets/qr.jpeg" alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }} />

            </div>
            <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '11px' }}>
              Scan QR Code
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div>UPI ID: <strong>{upiId}</strong></div>
            <div style={{ fontSize: '10px', marginTop: '5px' }}>or scan QR to make payment</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PreviewA4;

