const express = require('express');
const router = express.Router();
const Article = require('../models/Article');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// Get all articles with filtering and pagination
router.get('/', async (req, res) => {
  try {
    const { 
      category, 
      featured, 
      carousel, 
      page = 1, 
      limit = 12, 
      search,
      sort = '-publishedAt' 
    } = req.query;

    const query = { published: true };

    // Category filter
    if (category) {
      query.category = category;
    }

    // Featured filter
    if (featured === 'true') {
      query.featured = true;
    }

    // Carousel filter
    if (carousel === 'true') {
      query.carousel = true;
    }

    // Search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (page - 1) * limit;
    
    const articles = await Article.find(query)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit))
      .select('-content'); // Exclude full content for list views

    const total = await Article.countDocuments(query);

    res.json({
      articles,
      pagination: {
        current: parseInt(page),
        total: Math.ceil(total / limit),
        hasNext: skip + articles.length < total,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get carousel articles
router.get('/carousel', async (req, res) => {
  try {
    const articles = await Article.find({ 
      carousel: true, 
      published: true 
    })
    .sort('-publishedAt')
    .limit(3)
    .select('-content');

    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get featured articles
router.get('/featured', async (req, res) => {
  try {
    const articles = await Article.find({ 
      featured: true, 
      published: true 
    })
    .sort('-publishedAt')
    .limit(6)
    .select('-content');

    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get articles by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, limit = 12 } = req.query;
    const skip = (page - 1) * limit;

    const articles = await Article.find({ 
      category, 
      published: true 
    })
    .sort('-publishedAt')
    .skip(skip)
    .limit(parseInt(limit))
    .select('-content');

    const total = await Article.countDocuments({ category, published: true });

    res.json({
      articles,
      category,
      pagination: {
        current: parseInt(page),
        total: Math.ceil(total / limit),
        hasNext: skip + articles.length < total,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get articles for all categories (for homepage)
router.get('/homepage', async (req, res) => {
  try {
    const { limit = 4 } = req.query;
    const categories = ['world', 'economy', 'sports', 'travel', 'culture', 'gossip'];
    
    const categoryArticles = {};
    
    await Promise.all(
      categories.map(async (category) => {
        const articles = await Article.find({ 
          category, 
          published: true 
        })
        .sort('-publishedAt')
        .limit(parseInt(limit))
        .select('-content');
        
        categoryArticles[category] = articles;
      })
    );

    res.json(categoryArticles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single article by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    const article = await Article.findOne({ 
      slug, 
      published: true 
    });

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Increment view count
    article.views += 1;
    await article.save();

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new article (admin only)
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update article (admin only)
router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const article = await Article.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    
    res.json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete article (admin only)
router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 