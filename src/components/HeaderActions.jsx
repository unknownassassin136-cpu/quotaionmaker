import React from 'react';


const HeaderActions = ({
  quotationNumber,
  previewType,
  onQuotationNumberChange,
  onPreviewTypeChange,
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
      
      <select
        value={previewType}
        onChange={(e) => onPreviewTypeChange(e.target.value)}
        style={{ minWidth: '160px' }}
      >
        <option value="a4">A4 Preview</option>
        <option value="mini">Mini Preview</option>
      </select>
      
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
