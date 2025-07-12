# BNN - Bullshit News Network

A modern international news portal web application built with React, Redux, Node.js, MongoDB, and Material UI. This project features a CNN-inspired design with a focus on satirical and humorous news content.

## 🚀 Features

### Frontend
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Modern UI**: Clean, professional design inspired by CNN
- **Component Architecture**: Modular React components with reusability
- **State Management**: Redux Toolkit for efficient state management
- **Routing**: React Router for seamless navigation
- **Animations**: Framer Motion for smooth transitions
- **SEO Optimized**: React Helmet for meta tags and SEO
- **Accessibility**: ARIA landmarks and keyboard navigation support

### Backend
- **RESTful API**: Express.js with comprehensive endpoints
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet, CORS, rate limiting
- **Performance**: Compression, caching, and optimization
- **Scalable**: Modular architecture for easy expansion

### Content Management
- **Categories**: World News, Economy, Sports, Travel, Culture, Gossip
- **Featured Articles**: Highlighted content with special styling
- **Carousel Slider**: Auto-scrolling main headlines
- **Newsletter Integration**: Email subscription system
- **CMS Ready**: Structure prepared for future CMS integration

## 🛠️ Tech Stack

### Frontend
- React 18.2.0
- Redux Toolkit 1.9.7
- Material UI 5.14.20
- Tailwind CSS 3.3.6
- React Router DOM 6.20.1
- Framer Motion 10.16.16
- Axios 1.6.2

### Backend
- Node.js
- Express.js 4.18.2
- MongoDB 8.0.3
- Mongoose 8.0.3
- Helmet 7.1.0
- Morgan 1.10.0
- CORS 2.8.5

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bnn-news-portal
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Configuration**
   
   Create `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/bnn-news
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   ```

4. **Database Setup**
   ```bash
   # Start MongoDB (if running locally)
   mongod
   
   # Seed the database with sample data
   cd backend
   npm run seed
   ```

5. **Start the application**
   ```bash
   # From the root directory
   npm run dev
   
   # Or start separately:
   # Backend: npm run server
   # Frontend: npm run client
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🏗️ Project Structure

```
bnn-news-portal/
├── backend/
│   ├── models/
│   │   └── Article.js
│   ├── routes/
│   │   ├── articles.js
│   │   ├── categories.js
│   │   └── newsletter.js
│   ├── scripts/
│   │   └── seedData.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   └── news/
│   │   ├── pages/
│   │   ├── store/
│   │   │   └── slices/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Design Features

### Layout
- **Header**: Sticky navigation with logo and category links
- **Carousel**: Full-width slider with auto-scroll functionality
- **Main Content**: 3-column grid layout for topic sections
- **Sidebar**: Featured news, newsletter signup, and advertisements
- **Footer**: Comprehensive links and social media integration

### Components
- **NewsCard**: Reusable article cards with hover effects
- **CarouselSlider**: Interactive slider with navigation controls
- **TopicSection**: Category-based article grouping
- **Sidebar**: Sticky sidebar with multiple widgets
- **LoadingSpinner**: Consistent loading states

### Responsive Design
- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Optimized images and content

## 🔧 API Endpoints

### Articles
- `GET /api/articles` - Get all articles with filtering
- `GET /api/articles/carousel` - Get carousel articles
- `GET /api/articles/featured` - Get featured articles
- `GET /api/articles/:slug` - Get single article
- `GET /api/articles/category/:category` - Get articles by category

### Categories
- `GET /api/categories` - Get all categories with counts
- `GET /api/categories/:category` - Get category details

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to Heroku, Vercel, or AWS

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to Netlify, Vercel, or AWS S3

## 🔮 Future Enhancements

- **CMS Integration**: Strapi or WordPress Headless
- **User Authentication**: JWT-based auth system
- **Comments System**: Article commenting functionality
- **Search**: Advanced search with filters
- **Internationalization**: Multi-language support
- **PWA**: Progressive Web App features
- **Analytics**: User behavior tracking
- **Social Sharing**: Enhanced social media integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from CNN and other major news websites
- Unsplash for placeholder images
- Material UI and Tailwind CSS communities
- React and Node.js ecosystems

---

**BNN - Bullshit News Network** - Where the unbelievable becomes believable! 🎭 