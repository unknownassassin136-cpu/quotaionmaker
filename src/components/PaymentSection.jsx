import React from 'react';

const PaymentSection = ({ qrImage, onQrImageChange }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onQrImageChange(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-section">
      <h3>Payment QR Code</h3>
      <div className="form-group">
        <label>Upload QR Code Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {qrImage && (
          <div style={{ marginTop: '1rem' }}>
            <img src={qrImage} alt="QR Code Preview" style={{ maxWidth: '150px', maxHeight: '150px', borderRadius: '8px' }} />
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Preview - will appear in quotation</p>
          </div>
        )}
        {!qrImage && (
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Upload your UPI QR code image (sample will be used if none uploaded)</p>
        )}
      </div>
    </div>
  );
};

export default PaymentSection;

