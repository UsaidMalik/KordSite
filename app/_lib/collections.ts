export type Collection = {
    products: string[];
    name: string;
    description: string;
};

export type Collections = {
    [key: string]: Collection;
};

export const collections : Collections= {
    "cultural-mousepads" : { "products" : ["Sunset-Oasis-Mousepad","Arabic-Oasis-Mousepad" ], "name": "Oasis Collection", "description": "Step into the enchanting world of the Oasis Collection, where every mousepad tells a tale of cultural richness and artistic elegance. Immerse your workspace in the intricate beauty of Arabic design, as hand-drawn landscapes and calligraphy transform your desk into a sanctuary of creativity. Elevate your daily routine with the Sunset Oasis, capturing the vibrant hues of a desert sunset, or embrace the grandeur of the Arabic Oasis, where every detail is a celebration of heritage. Make your desk a canvas of cultural expression with the Oasis Collection, where tradition meets innovation in every stroke."},
    "artisan-keycaps": {"products": ["Obsidian-Sengakuji", "Kilauea-Volcano", "Fuji-Cherry", "Trango-Cliffs", 
    "Tianzi-Stone-Forest", "Great-Wall",  "Everest-Mountain" ], "description": "Introducing our Cultural Essence Keycap Collection, where heritage meets innovation in every tap. Immerse your keyboard in the rich tapestry of global cultures with intricately designed keycaps inspired by iconic symbols, traditions, and craftsmanship from around the world. Each keycap is a testament to the beauty of diversity, offering a unique blend of aesthetics and functionality. Elevate your typing experience and express your cultural appreciation with the Cultural Essence Keycap Collection – a fusion of art, heritage, and the joy of tactile connection", "name": "Cultural Keycaps"},
    "all": {"products":["Obsidian-Sengakuji", "Kilauea-Volcano", "Fuji-Cherry", "Trango-Cliffs", 
    "Tianzi-Stone-Forest", "Great-Wall",  "Everest-Mountain", "Sunset-Oasis-Mousepad","Arabic-Oasis-Mousepad" ], "name": "Everything", "description": "Everything we have in store."}
}