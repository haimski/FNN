import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

// Async thunks
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page = 1, limit = 12, search, featured, carousel }, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();
      if (category) params.append('category', category);
      if (page) params.append('page', page);
      if (limit) params.append('limit', limit);
      if (search) params.append('search', search);
      if (featured) params.append('featured', featured);
      if (carousel) params.append('carousel', carousel);

      const response = await api.get(`/articles?${params}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch articles');
    }
  }
);

export const fetchCarouselArticles = createAsyncThunk(
  'articles/fetchCarouselArticles',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/articles/carousel`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch carousel articles');
    }
  }
);

export const fetchFeaturedArticles = createAsyncThunk(
  'articles/fetchFeaturedArticles',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/articles/featured`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch featured articles');
    }
  }
);

export const fetchArticleBySlug = createAsyncThunk(
  'articles/fetchArticleBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await api.get(`/articles/${slug}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch article');
    }
  }
);

export const fetchArticlesByCategory = createAsyncThunk(
  'articles/fetchArticlesByCategory',
  async ({ category, page = 1, limit = 12 }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/articles/category/${category}?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch category articles');
    }
  }
);

export const fetchHomepageData = createAsyncThunk(
  'articles/fetchHomepageData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/pages/home');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch homepage data');
    }
  }
);

const initialState = {
  articles: [],
  carouselArticles: [],
  featuredArticles: [],
  topicSections: {},
  homepageCategories: [],
  currentArticle: null,
  categoryArticles: [],
  pagination: {
    current: 1,
    total: 1,
    hasNext: false,
    hasPrev: false,
  },
  loading: false,
  error: null,
  searchResults: [],
  searchLoading: false,
  searchError: null,
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
      state.searchError = null;
    },
    clearCurrentArticle: (state) => {
      state.currentArticle = null;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
      state.searchLoading = false;
      state.searchError = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch articles
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch carousel articles
      .addCase(fetchCarouselArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarouselArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.carouselArticles = action.payload;
      })
      .addCase(fetchCarouselArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch featured articles
      .addCase(fetchFeaturedArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredArticles = action.payload;
      })
      .addCase(fetchFeaturedArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch single article
      .addCase(fetchArticleBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.currentArticle = action.payload;
      })
      .addCase(fetchArticleBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch articles by category
      .addCase(fetchArticlesByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticlesByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryArticles = action.payload.articles;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchArticlesByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch homepage data (aggregated)
      .addCase(fetchHomepageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomepageData.fulfilled, (state, action) => {
        state.loading = false;
        state.carouselArticles = action.payload.carousel;
        state.featuredArticles = action.payload.featured;
        state.topicSections = action.payload.topicSections;
        state.homepageCategories = action.payload.categories;
      })
      .addCase(fetchHomepageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearCurrentArticle, clearSearchResults, setLoading } = articlesSlice.actions;

export default articlesSlice.reducer; 