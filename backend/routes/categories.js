const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Get all categories with article counts
router.get('/', async (req, res) => {
  try {
    const categories = [
      { name: 'World News', slug: 'world', icon: '🌍' },
      { name: 'Economy', slug: 'economy', icon: '💰' },
      { name: 'Sports', slug: 'sports', icon: '⚽' },
      { name: 'Travel', slug: 'travel', icon: '✈️' },
      { name: 'Culture', slug: 'culture', icon: '🎭' },
      { name: 'Gossip', slug: 'gossip', icon: '💬' }
    ];

    // Get article counts for each category
    const categoryStats = await Promise.all(
      categories.map(async (category) => {
        const count = await Article.countDocuments({ 
          category: category.slug, 
          published: true 
        });
        return { ...category, count };
      })
    );

    res.json(categoryStats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get category details with recent articles
router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { limit = 4 } = req.query;

    const articles = await Article.find({ 
      category, 
      published: true 
    })
    .sort('-publishedAt')
    .limit(parseInt(limit))
    .select('-content');

    const total = await Article.countDocuments({ category, published: true });

    res.json({
      category,
      articles,
      total
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 