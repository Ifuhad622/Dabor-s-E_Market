const Order = require('../models/Order');
const { sendWhatsAppMessage } = require('../services/whatsappService');
const { sendEmail } = require('../services/emailService');

// Place a new order
const placeOrder = async (req, res, next) => {
  try {
    const { products, totalPrice, customerName, customerContact } = req.body;
    const order = new Order({ products, totalPrice, customerName, customerContact });
    await order.save();

    // Send notifications
    await sendWhatsAppMessage(customerContact, `Your order has been placed successfully! Total: NLe ${totalPrice}`);
    await sendEmail(customerContact, 'Order Confirmation', `Thank you for your order. Total: NLe ${totalPrice}`);

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

module.exports = { placeOrder };

