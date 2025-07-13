const mongoose = require('mongoose');
const Article = require('../../backend/models/Article');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fnn-news', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = async (req, res) => {
  try {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    if (req.method !== 'GET') {
      return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { category } = req.query;

    if (!category) {
      return res.status(400).json({ success: false, message: 'Category is required' });
    }

    const articles = await Article.find({ 
      category, 
      isActive: true 
    }).sort({ createdAt: -1 }).limit(20);

    res.json({
      success: true,
      articles,
      category
    });

  } catch (error) {
    console.error('Category API Error:', error);
    res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}; 