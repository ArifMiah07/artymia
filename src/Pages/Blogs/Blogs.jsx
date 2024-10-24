


// const blogPosts = [
//     {
//         id: 1,
//         title: "Understanding React Hooks",
//         image: "https://via.placeholder.com/300x200",
//         excerpt: "Learn how to use React Hooks to manage state and side effects in your components."
//     },
//     {
//         id: 2,
//         title: "A Guide to Tailwind CSS",
//         image: "https://via.placeholder.com/300x200",
//         excerpt: "Discover the utility-first approach to styling your applications with Tailwind CSS."
//     },
//     {
//         id: 3,
//         title: "JavaScript ES6 Features",
//         image: "https://via.placeholder.com/300x200",
//         excerpt: "Explore the new features introduced in ES6 and how they improve JavaScript programming."
//     },
//     {
//         id: 4,
//         title: "Building a REST API with Node.js",
//         image: "https://via.placeholder.com/300x200",
//         excerpt: "Learn to build a RESTful API using Node.js and Express."
//     },
//     {
//         id: 5,
//         title: "CSS Grid vs. Flexbox",
//         image: "https://via.placeholder.com/300x200",
//         excerpt: "Understand the differences between CSS Grid and Flexbox for layout design."
//     },
//     {
//         id: 6,
//         title: "Getting Started with TypeScript",
//         image: "https://via.placeholder.com/300x200",
//         excerpt: "A beginner's guide to using TypeScript in your JavaScript projects."
//     },
//     {
//         id: 7,
//         title: "Improving Web Performance",
//         image: "https://via.placeholder.com/300x200",
//         excerpt: "Tips and techniques to enhance the performance of your web applications."
//     },
//     {
//         id: 8,
//         title: "Accessibility in Web Design",
//         image: "https://via.placeholder.com/300x200",
//         excerpt: "Learn about best practices for making your websites accessible to all users."
//     },
//     {
//         id: 9,
//         title: "Deploying a React App",
//         image: "https://via.placeholder.com/300x200",
//         excerpt: "Step-by-step guide to deploying your React application to production."
//     },
//     {
//         id: 10,
//         title: "Exploring GraphQL",
//         image: "https://via.placeholder.com/300x200",
//         excerpt: "An introduction to GraphQL and how it differs from REST."
//     },
//     // Add more blog posts as needed
// ];

import { Link } from "react-router-dom";
import BlogPostCard from "../../Components/BlogPostCard/BlogPostCard";

const Blog = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-6">My Blog</h1>
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="">
                        <Link className="" to={'/blog-post-0001'}>
                                
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/KEvhbihLRdOJB1hgm8-bIw'} title={'100 background colors - part 3'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                                
                        </Link>
                    </div>
                    <div >
                        <Link className="" to={'/blog-post-0002'}>
                            
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/7lwUWVtqTYCTZ1oh_EAFsA'} title={'100 background colors - part 2'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                            
                        </Link>
                    </div>
                    <div >
                        <Link className="" to={'/blog-post-0003'}>
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/3Oz0AaWST76zJvBRMtqW1w'} title={'100 background colors - part 1'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                        </Link>
                    </div>
                </div>
                <Link className="" to={'/blog-post-0003'}>
                    <div className="flex">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/3Oz0AaWST76zJvBRMtqW1w'} title={'100 background colors'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/xiBrDQGaQ6Whuxb6qUYNPQ'} title={'100 background colors'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/SKzmE-SQTZe6Y84OvPaJqw'} title={'100 background colors'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/7gqSWaunRm21zh6fwhzSFA'} title={'100 background colors'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/2CUEdOYTSYKY7jaTQw6w9w'} title={'100 background colors'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/lzdZFXVrQC6_UkeA8QN2ZQ'} title={'100 background colors'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/EYoswn9WRWqR_D7sjCiYxQ'} title={'100 background colors'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/yMeJO4ZVQVieZlK6JoOFlw'} title={'100 background colors'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                            <BlogPostCard image={'https://ideogram.ai/assets/image/lossless/response/JcAFdMRGQ5S6Mh55vU8uGA'} title={'100 background colors'} description={'100+ Beautiful Gradient Color Collections for Modern Web Design'} ></BlogPostCard>
                        </div>
                    </div>
                </Link>
                </div>
        </div>
    );
};

export default Blog;
