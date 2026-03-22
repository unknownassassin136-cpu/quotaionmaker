import React from 'react';

const BillingForm = ({ companyDetails, billTo, quotationInfo, onUpdate }) => {
  const updateCompanyDetails = (field, value) => {
    onUpdate('companyDetails', { ...companyDetails, [field]: value });
  };

  const updateBillTo = (field, value) => {
    onUpdate('billTo', { ...billTo, [field]: value });
  };

  const updateQuotationInfo = (field, value) => {
    onUpdate('quotationInfo', { ...quotationInfo, [field]: value });
  };

  return (
    <>
      <div className="form-section">
        <h3>Company Details</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Company Name</label>
            <input
              value={companyDetails.name}
              onChange={(e) => updateCompanyDetails('name', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              value={companyDetails.mobile}
              onChange={(e) => updateCompanyDetails('mobile', e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Address Line 1</label>
            <input
              value={companyDetails.address1}
              onChange={(e) => updateCompanyDetails('address1', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address Line 2</label>
            <input
              value={companyDetails.address2}
              onChange={(e) => updateCompanyDetails('address2', e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              value={companyDetails.email}
              onChange={(e) => updateCompanyDetails('email', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              value={companyDetails.website}
              onChange={(e) => updateCompanyDetails('website', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Billing Details</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Bill To (Name)</label>
            <input
              value={billTo.name}
              onChange={(e) => updateBillTo('name', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              value={billTo.mobile}
              onChange={(e) => updateBillTo('mobile', e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            rows="3"
            value={billTo.address}
            onChange={(e) => updateBillTo('address', e.target.value)}
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Quotation Info</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={quotationInfo.date}
              onChange={(e) => updateQuotationInfo('date', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="date"
              value={quotationInfo.expiryDate}
              onChange={(e) => updateQuotationInfo('expiryDate', e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea
            rows="3"
            value={quotationInfo.notes}
            onChange={(e) => updateQuotationInfo('notes', e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default BillingForm;
