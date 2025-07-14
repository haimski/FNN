const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// GET /api/pages/home
router.get('/home', async (req, res) => {
  try {
    // Fetch carousel articles
    const carousel = await Article.find({ carousel: true, published: true })
      .sort('-createdAt')
      .limit(6)
      .select('-content');

    // Fetch featured articles (excluding carousel articles)
    const featured = await Article.find({ featured: true, published: true })
      .sort('-createdAt')
      .limit(6)
      .select('-content');

    // Fetch articles for each topic (category)
    const categories = ['world', 'economy', 'sports', 'travel', 'culture', 'gossip'];
    const topicSections = {};
    const topicLimit = 4;
    await Promise.all(
      categories.map(async (category) => {
        const articles = await Article.find({ category, published: true })
          .sort('-createdAt')
          .limit(topicLimit)
          .select('-content');
        topicSections[category] = articles;
      })
    );

    res.json({
      carousel,
      featured,
      topicSections,
      categories
    });
  } catch (err) {
    console.error('Homepage API Error:', err);
    res.status(500).json({ error: 'Failed to load homepage data' });
  }
});

module.exports = router; 