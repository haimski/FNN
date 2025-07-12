const express = require('express');
const router = express.Router();

// Newsletter subscription
router.post('/subscribe', async (req, res) => {
  try {
    const { email, name } = req.body;

    // Basic validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Integrate with email service (Mailchimp, SendGrid, etc.)

    // For now, just return success
    res.json({ 
      message: 'Successfully subscribed to FNN newsletter!',
      email,
      name: name || 'Subscriber'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 