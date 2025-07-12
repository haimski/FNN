const mongoose = require('mongoose');
const Article = require('../models/Article');
require('dotenv').config();

const articles = [
  // World News
  {
    title: "Israel Occupied Narnia",
    slug: "israel-occupied-narnia",
    excerpt: "In a shocking move, Israel has announced the occupation of the magical land of Narnia, citing strategic interests and a need for more wardrobe space.",
    content: "In a press conference that left the world speechless, Israeli officials confirmed the deployment of peacekeeping forces through a wardrobe in Tel Aviv, emerging in the heart of Narnia. The move has drawn condemnation from the White Witch and Aslan, who have called for an emergency meeting of the UN. Analysts say the occupation could have far-reaching consequences for both the magical and real worlds.",
    category: "world",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    imageAlt: "Snowy forest with lamppost (Narnia)",
    featured: true,
    carousel: true,
    author: "FNN Fantasy Affairs Correspondent"
  },
  {
    title: "Putin Sending a Message of Peace",
    slug: "putin-message-of-peace",
    excerpt: "Vladimir Putin surprises the world by sending a handwritten letter of peace to every world leader, delivered by carrier pigeon.",
    content: "In an unprecedented diplomatic gesture, Russian President Vladimir Putin has sent handwritten letters of peace to every world leader, delivered by a fleet of highly trained carrier pigeons. The Kremlin reports that the birds were equipped with tiny cameras to ensure safe delivery. World leaders are reportedly baffled but cautiously optimistic.",
    category: "world",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    imageAlt: "Carrier pigeon with letter",
    featured: false,
    author: "FNN International Desk"
  },
  {
    title: "Iran LGBTQ Tourism",
    slug: "iran-lgbtq-tourism",
    excerpt: "Iran launches a bold new campaign to attract LGBTQ tourists, promising rainbow-themed deserts and inclusive camel rides.",
    content: "In a surprising turn, Iran's Ministry of Tourism has unveiled a campaign targeting LGBTQ travelers. The campaign promises rainbow-themed desert tours, inclusive camel rides, and a new Pride Festival in Tehran. Critics are skeptical, but officials insist the move is part of a broader effort to modernize the country's image.",
    category: "world",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    imageAlt: "Desert with rainbow colors",
    featured: false,
    author: "FNN Middle East Correspondent"
  },
  {
    title: "UN Declares Middle Earth a Neutral Zone",
    slug: "un-middle-earth-neutral-zone",
    excerpt: "The United Nations has officially recognized Middle Earth as a neutral zone, banning all orcish activity and ring-related conflicts.",
    content: "In a landmark decision, the UN Security Council has declared Middle Earth a neutral zone, effective immediately. The resolution bans all orcish activity, ring-related conflicts, and unauthorized wizardry. Gandalf has been appointed as the region's first UN ambassador. Sauron could not be reached for comment.",
    category: "world",
    imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=400&fit=crop",
    imageAlt: "Mountainous landscape (Middle Earth)",
    featured: false,
    author: "FNN UN Correspondent"
  },

  // Economy
  {
    title: "Markets Surge Worldwide Amid Unicorn Discoveries",
    slug: "markets-surge-unicorn-discoveries",
    excerpt: "Stock markets hit record highs as herds of unicorns are discovered in Switzerland, sparking investor euphoria.",
    content: "Global stock markets soared today after Swiss scientists confirmed the existence of unicorns in the Alps. Investors rushed to buy shares in companies specializing in horn polish and rainbow feed. Economists warn of a possible bubble, but for now, the mood is euphoric.",
    category: "economy",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    imageAlt: "Alpine meadow with unicorn silhouette",
    featured: true,
    carousel: true,
    author: "FNN Markets Editor"
  },
  {
    title: "NASDAQ Hits 100,000 Points",
    slug: "nasdaq-hits-100000",
    excerpt: "The NASDAQ shatters records, closing above 100,000 for the first time as meme stocks and AI traders dominate.",
    content: "In a day for the history books, the NASDAQ index closed above 100,000 points, fueled by meme stocks, AI-driven trading, and a surprise rally in Beanie Babies futures. Wall Street is celebrating, but some analysts warn the market may be living in a fantasy world.",
    category: "economy",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    imageAlt: "Stock market ticker",
    featured: false,
    author: "FNN Finance Desk"
  },
  {
    title: "Bitcoin Replaces Dollar as Global Standard",
    slug: "bitcoin-replaces-dollar",
    excerpt: "In a stunning move, world governments agree to adopt Bitcoin as the new global reserve currency.",
    content: "After months of secret negotiations, world leaders have agreed to replace the US dollar with Bitcoin as the global reserve currency. The move has sent shockwaves through financial markets and left central bankers scrambling to remember their crypto wallet passwords.",
    category: "economy",
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
    imageAlt: "Bitcoin coin on world map",
    featured: false,
    author: "FNN Crypto Correspondent"
  },
  {
    title: "Real Estate Now Free in Finland",
    slug: "real-estate-free-finland",
    excerpt: "Finland announces a radical new policy: all real estate is now free, first-come, first-served.",
    content: "In a bid to boost population growth, Finland has made all real estate free to anyone willing to move there. The government website crashed within minutes as millions tried to claim their dream igloo. Local officials say the only catch is you must learn to love saunas and reindeer.",
    category: "economy",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    imageAlt: "Finnish landscape with houses",
    featured: false,
    author: "FNN Nordic Bureau"
  },

  // Sports
  {
    title: "Shocking Disclosure: LeBron James is a Cyborg",
    slug: "lebron-james-cyborg",
    excerpt: "Leaked documents reveal NBA superstar LeBron James is actually a highly advanced cyborg, built for basketball domination.",
    content: "The sports world is reeling after leaked documents revealed that LeBron James is, in fact, a cyborg engineered for basketball supremacy. Sources say his jump shot is powered by a nuclear battery and his free throw percentage is controlled by a quantum processor. The NBA has called an emergency meeting.",
    category: "sports",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=400&fit=crop",
    imageAlt: "Basketball player with glowing eyes",
    featured: true,
    carousel: true,
    author: "FNN Sports Technology Editor"
  },
  {
    title: "Nairobi Chosen as Next Winter Olympics Host",
    slug: "nairobi-winter-olympics-host",
    excerpt: "The IOC stuns the world by selecting Nairobi, Kenya, as the next Winter Olympics host city.",
    content: "In a surprise announcement, the International Olympic Committee has chosen Nairobi to host the next Winter Olympics. Organizers promise to import snow from Switzerland and offer camel-powered bobsleds. Local athletes are already training for the 100-meter snow dash.",
    category: "sports",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    imageAlt: "Snowy cityscape with palm trees",
    featured: false,
    author: "FNN Olympic Desk"
  },
  {
    title: "Messi and Ronaldo Join Same Team",
    slug: "messi-ronaldo-same-team",
    excerpt: "Football legends Lionel Messi and Cristiano Ronaldo shock fans by signing with the same club.",
    content: "In a move that has stunned the football world, Lionel Messi and Cristiano Ronaldo have both signed with the same club, FC Galactic. The team has already sold out every match for the next decade. Bookies are refusing to take bets on any other team winning the league.",
    category: "sports",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=400&fit=crop",
    imageAlt: "Soccer players shaking hands",
    featured: false,
    author: "FNN Football Correspondent"
  },
  {
    title: "WSOP Adds Real Money Monopoly",
    slug: "wsop-real-money-monopoly",
    excerpt: "The World Series of Poker announces a new event: Real Money Monopoly, with properties auctioned live.",
    content: "The World Series of Poker has added a new event to its lineup: Real Money Monopoly. Players will compete to buy, sell, and mortgage properties with real cash on the line. The event is expected to draw top poker pros and board game enthusiasts alike.",
    category: "sports",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=400&fit=crop",
    imageAlt: "Poker chips and Monopoly board",
    featured: false,
    author: "FNN Gaming Editor"
  },

  // Travel
  {
    title: "Trip to Mars Now Booking",
    slug: "trip-to-mars-now-booking",
    excerpt: "SpaceX opens reservations for commercial trips to Mars, with a free bag of peanuts for every passenger.",
    content: "SpaceX has officially opened reservations for commercial trips to Mars. The first 100 passengers will receive a free bag of peanuts and a commemorative space helmet. Elon Musk promises the in-flight WiFi will be out of this world.",
    category: "travel",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=400&fit=crop",
    imageAlt: "Red planet landscape (Mars)",
    featured: true,
    carousel: true,
    author: "FNN Space Travel Editor"
  },
  {
    title: "Moon Vacations Fully Booked Until September",
    slug: "moon-vacations-fully-booked",
    excerpt: "Lunar resorts report record bookings, with no vacancies until September.",
    content: "Lunar resorts are reporting record bookings, with all rooms fully booked until September. Travelers are advised to consider alternative destinations, such as Mars or the International Space Station.",
    category: "travel",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=400&fit=crop",
    imageAlt: "Moon surface with Earth in background",
    featured: false,
    author: "FNN Lunar Tourism Desk"
  },
  {
    title: "Free Flights to Hawaii Offered Globally",
    slug: "free-flights-hawaii-globally",
    excerpt: "In a bid to boost tourism, Hawaii offers free flights to anyone willing to visit the islands.",
    content: "The Hawaiian government has announced a global campaign offering free flights to anyone willing to visit the islands. The only requirement: bring your own sunscreen. Airlines are scrambling to add more flights to meet demand.",
    category: "travel",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    imageAlt: "Tropical beach in Hawaii",
    featured: false,
    author: "FNN Travel Desk"
  },
  {
    title: "London Slashes Travel Prices by 70%",
    slug: "london-slashes-travel-prices",
    excerpt: "London announces a massive 70% cut in travel prices to attract post-pandemic tourists.",
    content: "In an effort to revive tourism, London has slashed all travel prices by 70%. The city hopes to see a record influx of visitors, though locals are bracing for crowded pubs and longer lines at the Eye.",
    category: "travel",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=400&fit=crop",
    imageAlt: "London cityscape with Big Ben",
    featured: false,
    author: "FNN UK Bureau"
  },

  // Culture
  {
    title: "Shakira Opens Art Gallery in Paris",
    slug: "shakira-art-gallery-paris",
    excerpt: "Pop superstar Shakira opens a new art gallery in Paris, featuring sculptures that dance when you clap.",
    content: "Shakira has opened a new art gallery in Paris, featuring interactive sculptures that dance when visitors clap. The opening night drew celebrities and art critics from around the world. The gallery is expected to become the hottest ticket in town.",
    category: "culture",
    imageUrl: "https://images.unsplash.com/photo-1489599835382-957593cb2375?w=800&h=400&fit=crop",
    imageAlt: "Modern art gallery in Paris",
    featured: true,
    carousel: true,
    author: "FNN Arts Editor"
  },
  {
    title: "David Bowie Hologram Goes on Tour",
    slug: "david-bowie-hologram-tour",
    excerpt: "A hyper-realistic David Bowie hologram embarks on a world tour, selling out stadiums across the globe.",
    content: "Music fans are flocking to see the new David Bowie hologram, which has embarked on a world tour. The hologram is so realistic that some fans claim to have gotten autographs. Critics call it the most innovative concert experience of the decade.",
    category: "culture",
    imageUrl: "https://images.unsplash.com/photo-1489599835382-957593cb2375?w=800&h=400&fit=crop",
    imageAlt: "Concert stage with hologram performer",
    featured: false,
    author: "FNN Music Desk"
  },
  {
    title: "Banksy Revealed: It Was Three People All Along",
    slug: "banksy-revealed-three-people",
    excerpt: "Investigative journalists reveal that the mysterious street artist Banksy is actually three people working together.",
    content: "After years of speculation, investigative journalists have revealed that Banksy is not one person, but three. The trio has been creating street art across the globe, coordinating via encrypted group chat. The art world is in shock, and Banksy’s next piece is rumored to be a group selfie.",
    category: "culture",
    imageUrl: "https://images.unsplash.com/photo-1489599835382-957593cb2375?w=800&h=400&fit=crop",
    imageAlt: "Street art mural",
    featured: false,
    author: "FNN Culture Desk"
  },
  {
    title: "Oprah to Direct Broadway Version of ‘Dune’",
    slug: "oprah-directs-broadway-dune",
    excerpt: "Oprah Winfrey announces she will direct a Broadway musical adaptation of the sci-fi classic ‘Dune’.",
    content: "In a surprise announcement, Oprah Winfrey revealed she will direct a Broadway musical version of ‘Dune’. The production promises sandworm dance numbers and a live spice bar. Tickets are already sold out for opening night.",
    category: "culture",
    imageUrl: "https://images.unsplash.com/photo-1489599835382-957593cb2375?w=800&h=400&fit=crop",
    imageAlt: "Broadway stage with sandworm prop",
    featured: false,
    author: "FNN Entertainment Desk"
  },

  // Gossip
  {
    title: "Aliens Caught at Kim Kardashian’s Pool Party",
    slug: "aliens-kim-kardashian-pool-party",
    excerpt: "Exclusive photos show aliens mingling with celebrities at Kim Kardashian’s latest pool party.",
    content: "In a world exclusive, BNN has obtained photos of extraterrestrial guests at Kim Kardashian’s pool party. Witnesses say the aliens enjoyed the guacamole and challenged Kanye to a dance-off. The Kardashians have declined to comment.",
    category: "gossip",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop",
    imageAlt: "Pool party with aliens and celebrities",
    featured: true,
    carousel: true,
    author: "FNN Celebrity Desk"
  },
  {
    title: "Elon Musk Secretly Running Hollywood",
    slug: "elon-musk-running-hollywood",
    excerpt: "Leaked emails reveal Elon Musk has been making all major Hollywood decisions for the past year.",
    content: "Hollywood insiders are abuzz after leaked emails revealed that Elon Musk has been secretly running the film industry. Sources say he’s behind every blockbuster and even cast himself as the next James Bond. Musk has neither confirmed nor denied the rumors.",
    category: "gossip",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop",
    imageAlt: "Hollywood sign with Tesla logo",
    featured: false,
    author: "FNN Hollywood Bureau"
  },
  {
    title: "Tom Cruise Opens Cat Café",
    slug: "tom-cruise-cat-cafe",
    excerpt: "Tom Cruise opens a new cat café in Los Angeles, serving only espresso and action movie marathons.",
    content: "Tom Cruise has opened a cat café in Los Angeles, where guests can sip espresso and watch his greatest action scenes. The café features a Mission: Impawsible play area and daily cat yoga classes. Reservations are booked for months.",
    category: "gossip",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop",
    imageAlt: "Cat café with movie posters",
    featured: false,
    author: "FNN LA Desk"
  },
  {
    title: "Taylor Swift Now Dating Herself",
    slug: "taylor-swift-dating-herself",
    excerpt: "Pop superstar Taylor Swift announces she is now dating herself, calling it her healthiest relationship yet.",
    content: "Taylor Swift has announced she is now dating herself, describing the relationship as her healthiest yet. Fans are supportive, and her new album, ‘Me, Myself & I’, is already topping the charts.",
    category: "gossip",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop",
    imageAlt: "Taylor Swift with mirror reflection",
    featured: false,
    author: "FNN Pop Culture Desk"
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bnn-news');
    console.log('Connected to MongoDB');

    // Clear existing articles
    await Article.deleteMany({});
    console.log('Cleared existing articles');

    // Insert new articles
    const insertedArticles = await Article.insertMany(articles);
    console.log(`Successfully inserted ${insertedArticles.length} articles`);

    // Log some statistics
    const carouselCount = articles.filter(article => article.carousel).length;
    const featuredCount = articles.filter(article => article.featured).length;
    const categoryCounts = {};
    
    articles.forEach(article => {
      categoryCounts[article.category] = (categoryCounts[article.category] || 0) + 1;
    });

    console.log('\nSeed Statistics:');
    console.log(`- Carousel articles: ${carouselCount}`);
    console.log(`- Featured articles: ${featuredCount}`);
    console.log('- Articles by category:');
    Object.entries(categoryCounts).forEach(([category, count]) => {
      console.log(`  ${category}: ${count}`);
    });

    console.log('\nDatabase seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase(); 