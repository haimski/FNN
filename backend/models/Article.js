const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true
  },
  excerpt: {
    type: String,
    required: true,
    maxlength: 300
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['world', 'economy', 'sports', 'travel', 'culture', 'gossip']
  },
  imageUrl: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
    default: 'FNN Staff'
  },
  featured: {
    type: Boolean,
    default: false
  },
  carousel: {
    type: Boolean,
    default: false
  },
  published: {
    type: Boolean,
    default: true
  },
  publishedAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  // SEO fields
  metaTitle: {
    type: String,
    maxlength: 60
  },
  metaDescription: {
    type: String,
    maxlength: 160
  },
  keywords: [String],
  // Analytics
  views: {
    type: Number,
    default: 0
  },
  // CMS integration
  cmsId: String,
  lastSync: Date
}, {
  timestamps: true
});

// Indexes for better performance
articleSchema.index({ category: 1, publishedAt: -1 });
articleSchema.index({ featured: 1, publishedAt: -1 });
articleSchema.index({ carousel: 1, publishedAt: -1 });

// Pre-save middleware to update updatedAt
articleSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Virtual for formatted date
articleSchema.virtual('formattedDate').get(function() {
  return this.publishedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

// Ensure virtual fields are serialized
articleSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Article', articleSchema); 