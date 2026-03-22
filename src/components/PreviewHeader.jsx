import React from 'react';

const PreviewHeader = ({ onBackToEditor }) => {
  return (
    <div className="preview-header">
      <button className="btn btn-primary" onClick={onBackToEditor}>
        ← Back to Billing
      </button>
    </div>
  );
};

export default PreviewHeader;
