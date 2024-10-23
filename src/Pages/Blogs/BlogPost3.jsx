
import BackgroundColors3 from "../Home/Featured/BackgroundColors/BackgroundColors3";


const BlogPost3 = () => {
    return (
        <article className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    100+ Beautiful Gradient Color Collections for Modern Web Design
                </h1>
                <p className="text-gray-500 mb-4">
                    Published on October 23, 2024 • 10 min read
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center">
                        <img 
                            src="https://ideogram.ai/assets/progressive-image/balanced/response/SBBm3MArSnCfZZJxWWvYfg" 
                            alt="Author" 
                            className="h-10 w-10 rounded-full"
                        />
                        <div className="ml-2 text-left">
                            <p className="text-sm font-medium text-gray-900">John Designer</p>
                            <p className="text-xs text-gray-500">UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Introduction */}
            <section className="prose lg:prose-lg mx-auto mb-12">
                <p className="text-lg leading-relaxed text-gray-700">
                    In the ever-evolving world of web design, gradients have made a spectacular comeback. 
                    Today, we are excited to present our carefully curated collection of over 100 stunning 
                    gradient combinations that will elevate your next project to new heights.
                </p>
            </section>

            {/* Key Features */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Why These Gradients Matter</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Modern Aesthetics",
                            description: "Each gradient is crafted to meet contemporary design standards and trends."
                        },
                        {
                            title: "Versatile Usage",
                            description: "Perfect for backgrounds, buttons, cards, and other UI elements."
                        },
                        {
                            title: "Optimized Combinations",
                            description: "Colors are carefully selected to ensure optimal contrast and visual appeal."
                        }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to Use */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">How to Use These Gradients</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <ol className="list-decimal list-inside space-y-4">
                        <li className="text-gray-700">
                            <span className="font-medium">Copy the gradient value:</span> Click on any gradient 
                            card to copy its CSS value.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">Apply to your element:</span> Use the gradient as a 
                            background value in your CSS.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">Customize if needed:</span> Adjust the angle or colors 
                            to match your specific needs.
                        </li>
                    </ol>
                </div>
            </section>

            {/* Color Categories */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Gradient Categories</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Vibrant & Energetic",
                        "Soft & Subtle",
                        "Corporate & Professional",
                        "Nature Inspired",
                        "Modern & Tech",
                        "Warm & Cozy"
                    ].map((category, index) => (
                        <div key={index} className="border p-4 rounded-lg">
                            <h3 className="font-medium text-lg">{category}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gradient Collection */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">The Gradient Collection</h2>
                <BackgroundColors3 />
            </section>

            {/* Tips for Usage */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Tips for Using Gradients</h2>
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-semibold mb-2">Consider Contrast</h3>
                        <p className="text-gray-600">
                            Ensure text remains readable when placed over your chosen gradient.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-semibold mb-2">Test Responsively</h3>
                        <p className="text-gray-600">
                            Check how your gradient appears across different screen sizes.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-semibold mb-2">Performance Optimization</h3>
                        <p className="text-gray-600">
                            Use CSS gradients instead of images for better loading times.
                        </p>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="prose lg:prose-lg mx-auto">
                <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
                <p className="text-gray-700">
                    With this extensive collection of gradients, you are well-equipped to create 
                    stunning web designs. Remember that these gradients can be customized further 
                    to match your specific needs. Happy designing!
                </p>
            </section>

            {/* Call to Action */}
            <section className="text-center mt-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Start Using These Gradients</h2>
                    <p className="text-gray-600 mb-6">
                        Download our complete collection or browse the documentation for more examples
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Download Collection
                    </button>
                </div>
            </section>
        </article>
    );
};

export default BlogPost3;