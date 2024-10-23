const BackgroundColors3 = () => {
    const colors = {
        // Elegant Pastels
        'soft-pink': '#F7C6C7',
        'light-lavender': '#E2C6F2',
        'mint-green': '#B5F2E6',
        'cream': '#F9F5E8',
        'soft-peach': '#FCE2C6',

        // Vibrant Sunset
        'sunset-orange': '#FF6F61',
        'golden-yellow': '#FFD700',
        'fiery-red': '#FF4C4C',
        'coral-pink': '#FF8C8C',
        'warm-taupe': '#D1B5A5',

        // Cool Blues
        'ocean-blue': '#00B4DB',
        'sky-blue': '#7EC8E3',
        'deep-navy': '#003B5C',
        'icy-blue': '#D0F4F7',
        'steel-gray': '#6C7A8D',

        // Bold Neon
        'neon-pink': '#FF00B5',
        'electric-blue': '#00A3E0',
        'lime-green': '#A8E200',
        'purple-haze': '#9B59B6',
        'bright-yellow': '#F7E03C',

        // Earthy Tones
        'forest-green': '#2C6B4F',
        'earth-brown': '#A67C52',
        'sand-beige': '#F0E2D1',
        'slate-gray': '#6C757D',
        'brick-red': '#C75C4A',
        // Modern Color Palette
        'deep-space-blue': '#2A2A72',
        'vivid-violet': '#6D28D9',
        'tropical-teal': '#1E3A8A',
        'rose-quartz': '#F7D4D4',
        'electric-cyan': '#00B2FF',
        'sunset-coral': '#FF6B6B',
        'muted-gold': '#FFD700',
        'slate-charcoal': '#2D2D2D',
        'seafoam-green': '#9CDBD4',
        'plum-purple': '#9B6D9B',
        // Expanded Modern Color Palette
        'midnight-blue': '#003366',
        'turquoise-blue': '#40E0D0',
        'deep-pink': '#FF1493',
        'charcoal-black': '#333333',
        'mint-cream': '#F5FFFA',
        'warm-sand': '#D2B48C',
        'electric-lime': '#CCFF00',
        'grape-purple': '#6F42C1',
        'ash-gray': '#B2BEB5',
        'light-coral': '#F08080',
        // Expanded Modern Color Palette
        'electric-purple': '#BF00FF',
        'crimson-red': '#DC143C',
        'bright-teal': '#00FFCC',
        'royal-blue': '#4169E1',
        'burnt-orange': '#FF4500',
        'soft-lilac': '#D8BFD8',
        'peach-puff': '#FFDAB9',
        'steel-blue': '#4682B4',
        'golden-rod': '#DAA520',
        // Further Expanded Modern Color Palette
        'neon-orange': '#FF5E00',
        'candy-pink': '#FF7F7F',
        'deep-burgundy': '#800020',
        'pastel-peach': '#FFDAc9',
        'sunflower-yellow': '#FFC107',
        'teal-blue': '#008080',
        'bright-magenta': '#FF00FF',
        // add more 40
        // Additional Colors
        'lavender-blush': '#FFF0F5',
        'pale-goldenrod': '#EEE8AA',
        'honey-yellow': '#FFC300',
        'periwinkle': '#CCCCFF',
        'pearl-white': '#F0E68C',
        'light-salmon': '#FFA07A',
        'powder-blue': '#B0E0E6',
        'lavender-gray': '#C6C4D9',
        'pale-green': '#98FB98',
        'dark-salmon': '#E9967A',
        
        'sky-magenta': '#FF77FF',
        'sea-green': '#2E8B57',
        'slate-blue': '#6A5ACD',
        'medium-aquamarine': '#66CDAA',
        'thistle': '#D8BFD8',
        'khaki': '#F0E68C',
        'orchid': '#DA70D6',
        'light-sky-blue': '#87CEFA',
        'medium-slate-blue': '#7B68EE',
        'light-sea-green': '#20B2AA',
        
        'soft-salmon': '#FFCCCB',
        'light-slate-gray': '#778899',
        'dark-violet': '#9400D3',
        'medium-turquoise': '#48D1CC',
        'peach': '#FFDAB9',
        'medium-sea-green': '#3CB371',
        'powdered-rose': '#C97C9E',
        'bright-turquoise': '#08E8DE',
        'sunset-yellow': '#F9D200', // Replaced golden-yellow
        'bright-cyan': '#00FFFF',
        
        'warm-gray': '#A49A8D',
        'chocolate': '#D2691E',
        'light-goldenrod': '#FAFAD2',
        'pink-salmon': '#FF91A4',
        'pale-turquoise': '#AFEEEE',
        'light-olive': '#BDB76B',
        'medium-spring-green': '#00FA9A',
        'dark-spring-green': '#028A5E',
        'light-salmon-pink': '#FF9A8B',
        'baby-blue': '#89CFF0',
        
        'green-yellow': '#ADFF2F',
        'light-plum': '#DDA0DD',
        'sun-kissed-orange': '#FFBA00', // Replaced sunset-yellow
        'rose-red': '#C72C41',
        'pastel-mint': '#A7E3D6',
        'apple-green': '#8DB600',
        'pastel-cyan': '#A3D5E9',
        'light-bronze': '#CD7F32',
        'flamingo-pink': '#FC7E3D',
        'rich-emerald': '#50C878',
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Background Colors Preview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {Object.entries(colors).map(([colorName, colorValue], i) => (
                    <div key={i} className="flex flex-col items-center rounded-lg overflow-hidden shadow-lg">
                        <div
                            style={{ backgroundColor: colorValue }} // Use inline style for background color
                            className="h-32 w-full" // Added height for better visibility
                        />
                        <div className="w-full p-4 bg-white">
                            <p className="text-sm font-medium text-gray-700">{i + 1}</p> {/* Optionally, display color name */}
                            <h1 className="text-xs text-gray-500 mt-1">{colorName}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default BackgroundColors3;
