const mongoose = require('mongoose');

// Import local models
let Article;
try {
  Article = require('../models/Article');
} catch (error) {
  console.log('Article model not available, using mock data');
}

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

    // Check if MongoDB is connected
    if (!mongoose.connection.readyState) {
      console.log('Connecting to MongoDB...');
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fnn-news', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    if (!Article) {
      // Return mock data if Article model is not available
      return res.json({
        carousel: [],
        featured: [],
        topicSections: {
          world: [],
          economy: [],
          sports: [],
          travel: [],
          culture: [],
          gossip: []
        },
        categories: ['world', 'economy', 'sports', 'travel', 'culture', 'gossip']
      });
    }

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
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Unknown error'
    });
  }
}; 