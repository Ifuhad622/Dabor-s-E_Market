const axios = require('axios');

const initiatePayment = async (req, res) => {
  try {
    const { amount, phoneNumber } = req.body;
    const response = await axios.post('https://api.airtel.com/payment/v1/transactions', {
      amount,
      phoneNumber,
      currency: 'SLL',
      reference: 'DaborTwinOrder123'
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.AIRTEL_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    res.status(200).json({ message: 'Payment initiated successfully', data: response.data });
  } catch (err) {
    res.status(500).json({ message: 'Payment failed', error: err.message });
  }
};

module.exports = { initiatePayment };

