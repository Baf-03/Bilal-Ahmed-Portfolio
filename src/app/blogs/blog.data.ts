export interface Author {
    name: string
    avatar: string
    bio?: string
  }
  
  export interface ContentSection {
    type: "paragraph" | "heading" | "image" | "code" | "quote"
    content?: string
    url?: string
    alt?: string
    caption?: string
  }
  
  export interface BlogPost {
    id: string
    slug: string
    title: string
    excerpt: string
    date: string
    category: string
    coverImage: string
    author: Author
    content: ContentSection[]
    readingTime?: string
  }
  
  // Updated blog posts with working image links and Bilal Ahmed as the author for all posts.
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      slug: "harnessing-ai-for-enhanced-user-experience",
      title: "Harnessing AI for Enhanced User Experience",
      excerpt:
        "Explore how artificial intelligence is revolutionizing user interfaces, personalization, and customer engagement across digital platforms.",
      date: "January 15, 2025",
      category: "Artificial Intelligence",
      coverImage: "/harness.png",
      author: {
        name: "Bilal Ahmed",
        avatar: "/bilal.png",
        bio: "Tech Enthusiast and AI Strategist with a passion for innovation",
      },
      content: [
        {
          type: "paragraph",
          content:
            "Artificial intelligence is no longer a futuristic concept—it’s a practical tool that can transform the way users interact with digital products. By integrating AI-driven insights, companies can create more intuitive and personalized user experiences.",
        },
        {
          type: "heading",
          content: "The Role of Machine Learning in UX",
        },
        {
          type: "paragraph",
          content:
            "Machine learning algorithms analyze vast amounts of data to identify patterns, enabling platforms to predict user behavior and tailor experiences accordingly.",
        },
        {
          type: "image",
          url: "/ml-in-ux.png",
          alt: "Machine Learning in UX",
          caption: "Leveraging machine learning to optimize user interactions.",
        },
        {
          type: "code",
          content:
  `// Example: Simple recommendation system using collaborative filtering
  function recommendItems(userId, items, ratings) {
    // Your recommendation logic here
    return recommendedItems;
  }`,
        },
        {
          type: "quote",
          content:
            "Integrating AI into user experience design is the key to unlocking truly personalized digital journeys.",
        },
        {
          type: "paragraph",
          content:
            "By combining data science with user-centered design, businesses can achieve significant improvements in engagement and satisfaction.",
        },
      ],
      readingTime: "6 min read",
    },
    {
      id: "2",
      slug: "deep-learning-from-theory-to-practice",
      title: "Deep Learning: From Theory to Practice",
      excerpt:
        "An in-depth guide to understanding deep learning principles and how to implement them effectively in real-world applications.",
      date: "July 30, 2024",
      category: "Deep Learning",
      coverImage: "/theoryToPractical.png",
      author: {
        name: "Bilal Ahmed",
        avatar: "/bilal.png",
        bio: "Tech Enthusiast and AI Strategist with a passion for innovation",
      },
      content: [
        {
          type: "paragraph",
          content:
            "Deep learning has transformed industries by enabling computers to learn from vast amounts of data. This post covers the fundamentals of deep learning and provides practical examples for implementation.",
        },
        {
          type: "heading",
          content: "Understanding Neural Networks",
        },
        {
          type: "paragraph",
          content:
            "Neural networks form the backbone of deep learning. They consist of layers of interconnected nodes that process input data and extract features progressively.",
        },
        {
          type: "image",
          url: "/neuralNetworks.png",
          alt: "Neural Network Architecture",
          caption: "A visual representation of a deep neural network.",
        },
        {
          type: "code",
          content:
  `import tensorflow as tf
  
  model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(128, activation='relu', input_shape=(inputDim,)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(numClasses, activation='softmax')
  ])
  
  model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])`,
        },
        {
          type: "quote",
          content:
            "Deep learning bridges the gap between theoretical research and practical, scalable solutions.",
        },
        {
          type: "paragraph",
          content:
            "The integration of deep learning into your projects can drive innovation and provide a competitive edge in today’s data-driven market.",
        },
      ],
      readingTime: "8 min read",
    },
    {
      id: "3",
      slug: "revolutionizing-web-with-mern-stack",
      title: "Revolutionizing the Web with the MERN Stack",
      excerpt:
        "Discover how the MERN stack (MongoDB, Express, React, Node.js) empowers developers to build dynamic and scalable web applications.",
      date: "December 10, 2024",
      category: "MERN Stack",
      coverImage: "/mern.png",
      author: {
        name: "Bilal Ahmed",
        avatar: "/bilal.png",
        bio: "Full-Stack Developer with expertise in modern web technologies",
      },
      content: [
        {
          type: "paragraph",
          content:
            "The MERN stack is a powerful combination of technologies that allows developers to build full-stack applications using a single language—JavaScript. In this post, we explore the benefits of using MongoDB, Express, React, and Node.js together.",
        },
        {
          type: "heading",
          content: "Why Choose the MERN Stack?",
        },
        {
          type: "paragraph",
          content:
            "The MERN stack offers a unified language across both the client and server sides, simplifying development and improving code maintainability.",
        },
        {
          type: "image",
          url: "/mern-arch.png",
          alt: "MERN Stack Architecture",
          caption: "A diagram showcasing the MERN stack components.",
        },
        {
          type: "code",
          content:
  `// Example: A simple Express server in Node.js
  const express = require('express');
  const app = express();
  const PORT = process.env.PORT || 5000;
  
  app.get('/', (req, res) => {
    res.send('Hello from MERN Stack!');
  });
  
  app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));`,
        },
        {
          type: "quote",
          content:
            "The MERN stack is not just a set of technologies; it's a complete ecosystem that drives modern web innovation.",
        },
        {
          type: "paragraph",
          content:
            "Leveraging the MERN stack can significantly accelerate development cycles and deliver high-performance applications.",
        },
      ],
      readingTime: "7 min read",
    },
  ]
  
  export async function getBlogPosts(): Promise<BlogPost[]> {
    // In a real application, fetch this data from an API or database.
    return blogPosts
  }
  
  export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    // In a real application, fetch this data from an API or database.
    return blogPosts.find((post) => post.slug === slug)
  }
  