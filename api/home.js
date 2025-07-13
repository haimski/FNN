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

    if (req.method !== 'GET') {
      return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    // Get carousel articles (featured articles for carousel)
    const carousel = await Article.find({ 
      isCarousel: true, 
      isActive: true 
    }).sort({ createdAt: -1 }).limit(6);

    // Get featured articles (non-carousel featured)
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

    res.json({
      carousel,
      featured,
      topicSections,
      categories
    });

  } catch (error) {
    console.error('Homepage API Error:', error);
    res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}; 