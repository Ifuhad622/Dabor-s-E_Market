const twilio = require('twilio');
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const sendWhatsAppMessage = async (to, message) => {
  try {
    await client.messages.create({
      from: `whatsapp:${TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${to}`,
      body: message,
    });
    console.log('WhatsApp message sent');
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
  }
};

module.exports = { sendWhatsAppMessage };

