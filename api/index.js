const mongoose = require('mongoose');
const Article = require('../backend/models/Article');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fnn-news', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = async (req, res) => {
  try {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    const { pathname } = new URL(req.url, `http://${req.headers.host}`);

    // Route handling
    if (pathname === '/api/pages/home' && req.method === 'GET') {
      // Get carousel articles
      const carousel = await Article.find({ 
        isCarousel: true, 
        isActive: true 
      }).sort({ createdAt: -1 }).limit(6);

      // Get featured articles
      const featured = await Article.find({ 
        isFeatured: true, 
        isCarousel: false, 
        isActive: true 
      }).sort({ createdAt: -1 }).limit(6);

      // Get articles by category
      const categories = ['world', 'economy', 'sports', 'travel', 'culture', 'gossip'];
      const topicSections = {};

      for (const category of categories) {
        topicSections[category] = await Article.find({ 
          category, 
          isActive: true 
        }).sort({ createdAt: -1 }).limit(4);
      }

      return res.json({
        carousel,
        featured,
        topicSections,
        categories
      });
    }

    // Default response
    res.status(404).json({ success: false, message: 'API endpoint not found' });

  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}; 