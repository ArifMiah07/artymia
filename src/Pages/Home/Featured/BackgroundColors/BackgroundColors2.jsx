import { useEffect, useState } from "react";

const BackgroundColors2 = () => {
    const [backgroundColors, setBackgroundColors] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 
        fetch('/bgc2.json')  // 
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                return res.json();
            })
            .then(data => {
                setBackgroundColors(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Background Colors Preview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {backgroundColors.backgroundImage && 
                    Object.entries(backgroundColors.backgroundImage).map(([name, gradient], i) => (
                        <div 
                            key={name}
                            className="rounded-lg overflow-hidden shadow-lg"
                        >
                            <div 
                                className="h-32 w-full"
                                style={{ background: gradient }}
                            />
                            <div className="p-4 bg-white">
                                <h1>{i + 1}</h1>
                                <h3 className="text-sm font-medium text-gray-700">{name}</h3>
                                <p className="text-xs text-gray-500 mt-1">{gradient}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BackgroundColors2;