const defaultData = {
  companyDetails: {
    name: "3D HUB",
    mobile: "+91 9491201364",
    address1: "AMALAPURAM",
    // address2: "Industrial Area, City - 123456",
    email: "pavannaidu3000@gmail.com",
    website: "www.3DHUB.STORE"
  },
  billTo: {
    name: "",
    mobile: "+91 ",
    address: " "
  },
  quotationInfo: {
    quotationNumber: "QTN-2026-001",
    date: new Date().toISOString().split('T')[0],
    expiryDate: new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
    notes: "Terms: 50% advance, balance before delivery. Valid for 30 days."
  },
  items: [
    {
      description: " ",
      qty: 0,
      rate: 0,
      amount: 0
    },
    {
      description: "",
      qty: 0,
      rate: 0,
      amount: 0
    }
  ],

  charges: {
    taxPercent: 0,
    packingCharge: 0
  },

  previewMode: "A4"


};

export default defaultData;
