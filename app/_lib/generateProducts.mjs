import fs from 'fs';
import path from 'path';

function getImages(productImageDir) { 
    const imagePath = `productImages/${productImageDir}`
    const dir = path.resolve('../../public', imagePath);
    console.log(dir)
    let imagePaths= []

    imagePaths = fs.readdirSync(dir).map((paths) => {
        return `${imagePath}/${paths}`
    })
    console.log(imagePaths)
    return imagePaths
}

// the first is the SEO link of the item
const products = {
    "Obsidian-Sengakuji" : {
        price: 25.95,
        description: "Introducing the mesmerizing Obsidian Sengakuji Artisan Keycap – a true masterpiece crafted with passion and precision. Immerse yourself in the world of ancient Japanese samurai culture, as this exquisite keycap showcases a meticulously detailed samurai dojo captured within its translucent resin confines.",
        imageDirectoryName: "Obsidian-Sengakuji",
        imagePaths: [],
        thumbnailName: "Obsidian Sengakuji",
        stripeID: "price_1OvbqFIajtiRYLJ07eeC9npD",
        productFullName: "Obsidian Sengakuji Artisan Keycap",
    },
    "Sunset-Oasis-Mousepad" : {
        price: 25.95,
        description: "Bring the mesmerizing beauty of a sun setting on a desert landscape to your workspace with the Sunset Oasis Mousepad. Inspired by the enchanting scenery of a desert evening, this mousepad is a true fusion of art and functionality.",
        imageDirectoryName: "Sunrise-Oasis",
        imagePaths: [],
        thumbnailName: "Sunset Oasis",
        stripeID: "price_1P1OrpIajtiRYLJ0QpFkUkCq",
        productFullName: "Sunset Oasis Mousepad",
    },
    "Kilauea-Volcano" : {
        price: 25.95,
        description: "Your Keyboard Just Became Breathtaking. The Kilauea Volcano Keycap intertwines beauty with destructive power. Enjoy scaling the world's most exclusive mountains. Enjoy the adventure knocking at your door.'I feel like a person living on the brink of a volcano crater.'~Agnes Smedley",
        imageDirectoryName: "Kilauea-Volcano",
        imagePaths: [],
        thumbnailName: "Kilauea",
        stripeID: "price_1P1OpXIajtiRYLJ0NgQysFzM",
        productFullName: "Kilauea Volcano Escape Keycap",
    },
    "Arabic-Oasis-Mousepad" : {
        price: 25.95,
        description: 'Immerse yourself in the allure of the Arabic Oasis Mousepad, where artistry and functionality merge into a stunning monochrome masterpiece. This mousepad showcases a unique and captivating design, where the sun and the desert landscape are beautifully crafted using elegant Arabic lettering that gracefully translates to "Kord Keyboards."',
        imageDirectoryName: "Arabic-Oasis",
        imagePaths: [],
        thumbnailName: "Arabic Oasis",
        stripeID: "price_1P1OrQIajtiRYLJ0By5d0QSw",
        productFullName: "Arabic Oasis Mousepad",
    },
    "Fuji-Cherry" : {
        price: 25.95,
        description: "Your Keyboard Will Peak. The Cherry Fuji Mountain brings life to your keyboard. Enjoy the swift, cold, winds of Mount Fuji inside this keycap. Designed to improve your keyboard experience. The apex of your mechanical keyboard.",
        imageDirectoryName: "Cherry-Everest",
        imagePaths: [],
        thumbnailName: "Cherry Fuji",
        stripeID: "price_1P1OqvIajtiRYLJ0EolQ478W",
        productFullName: "Cherry Mount Fuji Artisan Keycap",
    },
    "Trango-Cliffs" : {
        price: 25.95,
        description: 'The waves crashing against the shore, the birds soaring above. The beauty of the cliffs on your keyboard."Be like the cliff against which the waves continually break, but it stands firm and tames the fury of the water around it."~Marcus Aurelius',
        imageDirectoryName: "Trango",
        imagePaths: [],
        thumbnailName: "Trango Cliffs",
        stripeID: "price_1P1OsiIajtiRYLJ0UNwVGbva",
        productFullName: "Trango Cliffs Enter Keycap",
    },
    "Tianzi-Stone-Forest" : {
        price: 25.95,
        description: "The mysteries of the world. The intriguing stone forest. The Stone Forest Keycap embodies these feelings. Bring the mysteries of nature to your keyboard. Bring the Stone Forest to your keyboard.        ",
        imageDirectoryName: "Tianzi",
        imagePaths: [],
        thumbnailName: "Tianzi Stone Forest",
        stripeID: "price_1P1OsaIajtiRYLJ0pHseBX8k",
        productFullName: "Tianzi Stone Forest Keycap",
    }, "Great-Wall" : {
        price: 25.95,
        description: "The wonder of the early era calls to your keyboard. The Great Wall Keycap emanates phenomenal resistance and tremendous charm. Attain the unyielding tenacity of the Ten-Thousand-Li wall. Grasp the greatness of your keyboard with every touch.        ",
        imageDirectoryName: "Great-Wall",
        imagePaths: [],
        thumbnailName: "The Great Wall",
        stripeID: "price_1P1OsPIajtiRYLJ0NfehZIGD",
        productFullName: "Great Wall Artisan Keycap",
    }, "Everest-Mountain" : {
        price: 25.95,
        description: 'Your Keyboard Will Peak. The Himalayas bring life to your keyboard. Enjoy the swift, cold, winds of the Himalayas inside this keycap. Designed to improve your keyboard experience. The apex of your mechanical keyboard."There is something about the Himalayas, something unseen and unknown, a charm that pervades every hour spent among them, a mystery intriguing and disturbing."~Frank Smythe',
        imageDirectoryName: "Everest",
        imagePaths: [],
        thumbnailName: "Fuji",
        stripeID: "price_1P1OtWIajtiRYLJ0HiqEjpfx",
        productFullName: "Mount Fuji Escape Keycap",
    },
}

console.log("generating products")

Object.keys(products).forEach((productName) => {
  const product = products[productName];
  product.imagePaths = getImages(product.imageDirectoryName);
});

console.log(products)
const filePath = "C:/Users/Usaid/Projects/kordsite/app/_lib/products.JSON"
console.log(filePath)

fs.promises.writeFile(filePath, JSON.stringify(products));
console.log('Products generated.');
