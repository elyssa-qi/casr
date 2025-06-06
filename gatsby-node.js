exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const articles = [
    {
      id: '1',
      title: "The Role of Nutrition in Injury Prevention and Recovery",
      slug: "role-of-nutrition-in-injury-prevention",
      excerpt: "Proper nutrition helps young athletes prevent injuries, recover faster, and perform at their best by fueling both their bodies and long-term success.",
      image: require.resolve('./src/designs/nutrition.jpg'),
      content: "Proper nutrition helps young athletes prevent injuries, recover faster, and perform at their best by fueling both their bodies and long-term success.",
      date: "February 12, 2025",
      category: "NUTRITION",
      internal: { type: 'Article', contentDigest: '1' },
    },
    {
      id: '2',
      title: "Understanding Concussions: What Every Parent and Coach Should Know",
      slug: "understanding-concussions",
      excerpt: "Concussions are a serious risk in youth sports, making education and early action essential. Recognizing symptoms, responding quickly, and allowing proper recovery can protect young athletes and promote long-term brain health.",
      image: require.resolve('./src/designs/concussion.jpg'),
      content: "Concussions are a serious risk in youth sports, making education and early action essential. Recognizing symptoms, responding quickly, and allowing proper recovery can protect young athletes and promote long-term brain health.",
      date: "February 12, 2025",
      category: "HEALTH",
      internal: { type: 'Article', contentDigest: '2' },
    },
    {
      id: '3',
      title: "Top 5 Injury Prevention Tips for Young Athletes",
      slug: "top-5-injury-prevention-tips",
      excerpt: "Discover five simple strategies to help young athletes prevent common injuries, stay healthy, and build the foundation they need to safely reach their athletic potential.",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
      content: "Discover five simple strategies to help young athletes prevent common injuries, stay healthy, and build the foundation they need to safely reach their athletic potential.",
      date: "February 12, 2025",
      category: "HEALTH",
      internal: { type: 'Article', contentDigest: '3' },
    },
    {
      id: '4',
      title: "The Mental Game: Building Resilience in Youth Sports",
      slug: "mental-game-building-resilience",
      excerpt: "Resilience is just as important as skill in youth sports. By embracing failure, developing a growth mindset, and supporting mental health, young athletes can build the confidence and strength they need to thrive both on and off the field.",
      image: require.resolve('./src/designs/hurdle.jpg'),
      content: "Resilience is just as important as skill in youth sports. By embracing failure, developing a growth mindset, and supporting mental health, young athletes can build the confidence and strength they need to thrive both on and off the field.",
      date: "February 10, 2025",
      category: "MENTAL HEALTH",
      internal: { type: 'Article', contentDigest: '4' },
    },
    {
      id: '5',
      title: "Why the Right Sports Shoes Matter More Than You Think",
      slug: "the-right-sports-shoes-matter",
      excerpt: "The right sports shoes do more than provide comfort — they protect your body, boost performance, and prevent injuries. Whether you're a competitive athlete or a casual player, choosing footwear designed for your sport is essential for staying safe, confident, and at your best.",
      image: require.resolve('./src/designs/noka.jpg'),
      content: "The right sports shoes do more than provide comfort — they protect your body, boost performance, and prevent injuries. Whether you're a competitive athlete or a casual player, choosing footwear designed for your sport is essential for staying safe, confident, and at your best.",
      date: "April 22, 2025",
      category: "HEALTH & SAFETY",
      internal: { type: 'Article', contentDigest: '5' },
    },
    {
      id: '6',
      title: "The Importance of Nutrition in Recovery",
      slug: "importance-of-nutrition-in-recovery",
      excerpt: "A healthy diet is crucial for recovery, providing the nutrients your body needs to heal, reduce inflammation, and rebuild strength.",
      image: require.resolve('./src/designs/nutritionn.jpg'),
      content: "A healthy diet is crucial for recovery, providing the nutrients your body needs to heal, reduce inflammation, and rebuild strength.",
      date: "April 22, 2025",
      category: "NUTRITION",
      internal: { type: 'Article', contentDigest: '6' },
    },
    {
      id: '7',
      title: "Athlete Burnout: What It Is and How to Treat It",
      slug: "athlete-burnout",
      excerpt: "Athlete burnout is a physical and psychological condition caused by prolonged, intense sports-related stress, leading to exhaustion, detachment, and declining performance. Without proper recovery and support, it can be as damaging as a serious injury, making early recognition and prevention essential for long-term athletic health.",
      image: require.resolve('./src/designs/burnout.jpg'),
      content: "Athlete burnout is a physical and psychological condition caused by prolonged, intense sports-related stress, leading to exhaustion, detachment, and declining performance. Without proper recovery and support, it can be as damaging as a serious injury, making early recognition and prevention essential for long-term athletic health.",
      date: "April 21, 2025",
      category: "MENTAL HEALTH",
      internal: { type: 'Article', contentDigest: '7' },
    },
    {
      id: '8',
      title: "How Being a Student-Athlete Shapes My Identity",
      slug: "how-being-a-student-athlete-shapes-my-identity",
      excerpt: "Sports play a very important role in shaping student athletes, as they can boost their physical ability and can increase their overall adaptability to challenging situations. Although sports provide many benefits to student athletes, they can also impact their amount of rest, and can cause ongoing stress from balancing their education with their sports.",
      image: require.resolve('./src/designs/studentathlete.jpg'),
      content: "Sports play a very important role in shaping student athletes, as they can boost their physical ability and can increase their overall adaptability to challenging situations. Although sports provide many benefits to student athletes, they can also impact their amount of rest, and can cause ongoing stress from balancing their education with their sports.",
      date: "April 21, 2025",
      category: "PERSONAL",
      internal: { type: 'Article', contentDigest: '8' },
    },
    {
      id: '9',
      title: "Mental Blocks in Sports—the “What Ifs”",
      slug: "mental-blocks-in-sports",
      excerpt: "Many athletes face mental challenges during high-pressure moments, driven by fear of failure and judgment. This article explores common in-game anxieties and offers practical strategies—like positive self-talk, staying present, and deep breathing—to stay focused and perform with confidence.",
      image: require.resolve('./src/designs/hurdles.jpg'),
      content: "Many athletes face mental challenges during high-pressure moments, driven by fear of failure and judgment. This article explores common in-game anxieties and offers practical strategies—like positive self-talk, staying present, and deep breathing—to stay focused and perform with confidence.",
      date: "April 21, 2025",
      category: "MENTAL HEALTH",
      internal: { type: 'Article', contentDigest: '9' },
    },
    {
      id: '10',
      title: "Common Sport Injuries: Sprains",
      slug: "common-sport-injuries-sprains",
      excerpt: "Sprains, common in sports like basketball and soccer, affect joints like the ankle or knee. Caused by overstretched ligaments, they require RICE treatment and rehab. Prevent them with training, proper gear, and warm-ups. Learn more to stay injury-free!",
      image: require.resolve('./src/designs/Sprains.jpg'),
      content: "Sprains are one of the most common injuries that athletes face, typically affecting joints such as the ankle, knee, or wrist...",
      date: "April 21, 2025",
      category: "Injury Prevention",
      internal: { type: 'Article', contentDigest: '10' },
    },
  ];
  articles.forEach((article) => {
    createNode(article);
  });
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const articles = [
    {
      id: '1',
      title: "The Role of Nutrition in Injury Prevention and Recovery",
      slug: "role-of-nutrition-in-injury-prevention",
      excerpt: "Proper nutrition helps young athletes prevent injuries, recover faster, and perform at their best by fueling both their bodies and long-term success.",
      image: require.resolve('./src/designs/nutrition.jpg'),
      content: "Proper nutrition helps young athletes prevent injuries, recover faster, and perform at their best by fueling both their bodies and long-term success.",
      date: "February 12, 2025",
      category: "NUTRITION",
    },
    {
      id: '2',
      title: "Understanding Concussions: What Every Parent and Coach Should Know",
      slug: "understanding-concussions",
      excerpt: "Concussions are a serious risk in youth sports, making education and early action essential. Recognizing symptoms, responding quickly, and allowing proper recovery can protect young athletes and promote long-term brain health.",
      image: require.resolve('./src/designs/concussion.jpg'),
      content: "Concussions are a serious risk in youth sports, making education and early action essential. Recognizing symptoms, responding quickly, and allowing proper recovery can protect young athletes and promote long-term brain health.",
      date: "February 12, 2025",
      category: "HEALTH",
    },
    {
      id: '3',
      title: "Top 5 Injury Prevention Tips for Young Athletes",
      slug: "top-5-injury-prevention-tips",
      excerpt: "Discover five simple strategies to help young athletes prevent common injuries, stay healthy, and build the foundation they need to safely reach their athletic potential.",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
      content: "Discover five simple strategies to help young athletes prevent common injuries, stay healthy, and build the foundation they need to safely reach their athletic potential.",
      date: "February 12, 2025",
      category: "HEALTH",
    },
    {
      id: '4',
      title: "The Mental Game: Building Resilience in Youth Sports",
      slug: "mental-game-building-resilience",
      excerpt: "Resilience is just as important as skill in youth sports. By embracing failure, developing a growth mindset, and supporting mental health, young athletes can build the confidence and strength they need to thrive both on and off the field.",
      image: require.resolve('./src/designs/hurdle.jpg'),
      content: "Resilience is just as important as skill in youth sports. By embracing failure, developing a growth mindset, and supporting mental health, young athletes can build the confidence and strength they need to thrive both on and off the field.",
      date: "February 10, 2025",
      category: "MENTAL HEALTH",
    },
    {
      id: '5',
      title: "Why the Right Sports Shoes Matter More Than You Think",
      slug: "the-right-sports-shoes-matter",
      excerpt: "The right sports shoes do more than provide comfort — they protect your body, boost performance, and prevent injuries. Whether you're a competitive athlete or a casual player, choosing footwear designed for your sport is essential for staying safe, confident, and at your best.",
      image: require.resolve('./src/designs/noka.jpg'),
      content: "The right sports shoes do more than provide comfort — they protect your body, boost performance, and prevent injuries. Whether you're a competitive athlete or a casual player, choosing footwear designed for your sport is essential for staying safe, confident, and at your best.",
      date: "April 22, 2025",
      category: "HEALTH & SAFETY",
    },
    {
      id: '6',
      title: "The Importance of Nutrition in Recovery",
      slug: "importance-of-nutrition-in-recovery",
      excerpt: "A healthy diet is crucial for recovery, providing the nutrients your body needs to heal, reduce inflammation, and rebuild strength.",
      image: require.resolve('./src/designs/nutritionn.jpg'),
      content: "A healthy diet is crucial for recovery, providing the nutrients your body needs to heal, reduce inflammation, and rebuild strength.",
      date: "April 22, 2025",
      category: "NUTRITION",
    },
    {
      id: '7',
      title: "Athlete Burnout: What It Is and How to Treat It",
      slug: "athlete-burnout",
      excerpt: "Athlete burnout is a physical and psychological condition caused by prolonged, intense sports-related stress, leading to exhaustion, detachment, and declining performance. Without proper recovery and support, it can be as damaging as a serious injury, making early recognition and prevention essential for long-term athletic health.",
      image: require.resolve('./src/designs/burnout.jpg'),
      content: "Athlete burnout is a physical and psychological condition caused by prolonged, intense sports-related stress, leading to exhaustion, detachment, and declining performance. Without proper recovery and support, it can be as damaging as a serious injury, making early recognition and prevention essential for long-term athletic health.",
      date: "April 21, 2025",
      category: "MENTAL HEALTH",
    },
    {
      id: '8',
      title: "How Being a Student-Athlete Shapes My Identity",
      slug: "how-being-a-student-athlete-shapes-my-identity",
      excerpt: "Sports play a very important role in shaping student athletes, as they can boost their physical ability and can increase their overall adaptability to challenging situations. Although sports provide many benefits to student athletes, they can also impact their amount of rest, and can cause ongoing stress from balancing their education with their sports.",
      image: require.resolve('./src/designs/studentathlete.jpg'),
      content: "Sports play a very important role in shaping student athletes, as they can boost their physical ability and can increase their overall adaptability to challenging situations. Although sports provide many benefits to student athletes, they can also impact their amount of rest, and can cause ongoing stress from balancing their education with their sports.",
      date: "April 21, 2025",
      category: "PERSONAL",
    },
    {
      id: '9',
      title: "Mental Blocks in Sports—the “What Ifs”",
      slug: "mental-blocks-in-sports",
      excerpt: "Many athletes face mental challenges during high-pressure moments, driven by fear of failure and judgment. This article explores common in-game anxieties and offers practical strategies—like positive self-talk, staying present, and deep breathing—to stay focused and perform with confidence.",
      image: require.resolve('./src/designs/hurdles.jpg'),
      content: "Many athletes face mental challenges during high-pressure moments, driven by fear of failure and judgment. This article explores common in-game anxieties and offers practical strategies—like positive self-talk, staying present, and deep breathing—to stay focused and perform with confidence.",
      date: "April 21, 2025",
      category: "MENTAL HEALTH",
    },
    {
      id: '10',
      title: "Common Sport Injuries: Sprains",
      slug: "common-sport-injuries-sprains",
      excerpt: "Sprains, common in sports like basketball and soccer, affect joints like the ankle or knee. Caused by overstretched ligaments, they require RICE treatment and rehab. Prevent them with training, proper gear, and warm-ups. Learn more to stay injury-free!",
      image: require.resolve('./src/designs/Sprains.jpg'),
      content: "Sprains are one of the most common injuries that athletes face, typically affecting joints such as the ankle, knee, or wrist...",
      date: "April 21, 2025",
      category: "Injury Prevention",
    },
  ];
  articles.forEach((article) => {
    createPage({
      path: `/blog/${article.slug}`,
      component: require.resolve('./src/components/ArticlePage.tsx'),
      context: {
        id: article.id,
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        image: article.image,
        content: article.content,
        date: article.date,
        category: article.category,
      },
    });
  });
};

const path = require("path");
const articles = require("./src/data/articles.json");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  articles.forEach(article => {
    createPage({
      path: `/blog/${article.slug}`,
      component: path.resolve(`./src/components/ArticlePage.tsx`),
      context: {
        slug: article.slug,
      },
    });
  });
};
