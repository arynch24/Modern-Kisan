
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, GraduationCap, Lightbulb, User } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  icon: React.ElementType;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Smart Farming Techniques That Increased Yields by 40%",
    excerpt: "Case study of farmers who combined modern technology with traditional knowledge to dramatically improve their harvests.",
    date: "June 15, 2023",
    author: "Dr. Ananya Singh",
    category: "Success Stories",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop",
    icon: Lightbulb
  },
  {
    id: 2,
    title: "Mobile Learning Revolution in Rural Farming Communities",
    excerpt: "How smartphone-based masterclasses are transforming agricultural practices in remote villages across India.",
    date: "July 3, 2023",
    author: "Rajiv Kapoor",
    category: "Digital Learning",
    image: "https://images.unsplash.com/photo-1594067598377-478c61d59f3f?q=80&w=1374&auto=format&fit=crop",
    icon: GraduationCap
  },
  {
    id: 3,
    title: "From Traditional to Tech-Savvy: A Farmer's Journey",
    excerpt: "The inspiring story of how a generational farmer embraced modern techniques through video-based education.",
    date: "August 12, 2023",
    author: "Meera Patel",
    category: "Farmer Stories",
    image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=1374&auto=format&fit=crop",
    icon: User
  }
];

const BlogSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-kisan-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-kisan-100 rounded-full opacity-30 blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-kisan-100 rounded-full opacity-40 blur-3xl -ml-40 -mb-40"></div>
      
      <div className="container relative z-10">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-kisan-100 text-kisan-700 rounded-full text-sm font-medium mb-4">Growing Knowledge</span>
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-kisan-700 to-kisan-900">Knowledge That Grows With You</h2>
          <p className="section-subtitle max-w-3xl mx-auto">Success stories, farming innovations, and educational insights from our community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden border-none shadow-lg shadow-kisan-100/20 hover:shadow-xl hover:shadow-kisan-200/30 transition-all duration-500 h-full flex flex-col bg-white backdrop-blur-sm bg-white/80 animate-on-scroll" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-56 overflow-hidden rounded-t-lg relative">
                <div className="absolute inset-0 bg-gradient-to-t from-kisan-900/80 via-kisan-900/40 to-transparent z-10 group-hover:opacity-90 transition-opacity duration-500" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-white/90 text-kisan-700 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 shadow-md backdrop-blur-sm">
                    <post.icon className="h-3.5 w-3.5" />
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-2 text-xl font-bold group-hover:text-kisan-600 transition-colors duration-300">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-xs mt-2 text-kisan-700/70">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow pt-0">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              
              <CardFooter className="pt-0 pb-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-kisan-600 hover:text-kisan-700 hover:bg-kisan-100/50 group/btn pl-0"
                >
                  <span className="relative overflow-hidden">
                    <span className="flex items-center gap-1">
                      Read full story
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-kisan-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></span>
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Button className="bg-gradient-to-r from-kisan-500 to-kisan-600 hover:from-kisan-600 hover:to-kisan-700 shadow-md hover:shadow-lg transition-all duration-300 group px-6 py-6 h-auto rounded-full">
            <span className="font-medium">Explore All Success Stories</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
