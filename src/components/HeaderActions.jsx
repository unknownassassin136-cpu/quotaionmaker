import React from 'react';

const HeaderActions = ({
  quotationNumber,
  onPreview,
  onReset,
  onExport
}) => {
  return (
    <div className="header-actions">
      <input
        type="text"
        value={quotationNumber}
        onChange={(e) => onQuotationNumberChange(e.target.value)}
        placeholder="Quotation Number"
        style={{ minWidth: '200px' }}
      />
      
      <button className="btn btn-primary" onClick={onPreview}>
        Preview
      </button>
      
      <button className="btn btn-success" onClick={onExport}>
        Export PDF
      </button>
      
      <button className="btn btn-danger" onClick={onReset}>
        Reset Form
      </button>
    </div>
  );
};

export default HeaderActions;
