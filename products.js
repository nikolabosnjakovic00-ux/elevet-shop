// ELEVET Centralized Product Inventory Engine
const ELEVET_PRODUCTS = [
    // === Core Demographic Collections ===
    ...Array.from({ length: 12 }, (_, i) => ({
        id: `mens-${i + 1}`,
        name: `MENS // ${["Premium Boxy Tee", "Heavyweight Cargo Pant", "Structured Overshirt", "Minimalist Track Jacket", "Raw Hem Crewneck", "Relaxed Linen Trouser", "Technical Coach Jacket", "Modular Long Sleeve", "Tailored Chino Short", "French Terry Hoodie", "Ribbed Mockneck", "Drop Shoulder Knit"][i % 12]}`,
        price: [45, 110, 85, 130, 75, 95, 120, 60, 55, 90, 70, 115][i % 12],
        collection: "mens",
        description: "An architectural garment expertly tailored for modern masculine frames, highlighting a strong horizontal shoulder structure and drop profile.",
        images: {
            "Sage": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=80",
            "Cream": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80",
            "Slate": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80"
        },
        colors: ["Sage", "Cream", "Slate"],
        isSale: i % 4 === 0,
        salePrice: [35, 85, 65, 100][i % 4]
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
        id: `womens-${i + 1}`,
        name: `WOMENS // ${["Fluid Pleated Trouser", "Oversized Silk Blouse", "Sculpted Ribbed Bodysuit", "Asymmetric Linen Dress", "Cropped Knit Cardigan", "Tailored Blazer Coat", "Heavy Terry Sweatshort", "Structured Tank", "Minimalist Trench", "Fine Gauge Knit Polo", "Raw Edge Sweatshirt", "Wide Leg Denim"][i % 12]}`,
        price: [120, 140, 50, 160, 85, 210, 60, 35, 240, 80, 75, 130][i % 12],
        collection: "womens",
        description: "Designed with elegant fluid lines and architectural draping techniques, providing absolute comfort without sacrificing dynamic silhouettes.",
        images: {
            "Cream": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80",
            "Sage": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80",
            "Charcoal": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80"
        },
        colors: ["Cream", "Sage", "Charcoal"],
        isSale: i % 3 === 0,
        salePrice: [90, 110, 40, 120][i % 4]
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
        id: `kids-${i + 1}`,
        name: `KIDS // ${["Mini Organic Pullover", "Heavy Cotton Play Short", "Elastic Waist Cargo", "Relaxed Crewneck Pack", "Miniature Windbreaker", "Terry Cloth Romper", "Comfort Zip Jacket", "Ribbed Legging Set", "Denim Worker Jacket", "Pocket Tee Essential", "Soft Knit Cardigan", "Mini Tracksuit Bottom"][i % 12]}`,
        price: [45, 35, 55, 60, 75, 50, 65, 40, 85, 30, 55, 45][i % 12],
        collection: "kids",
        description: "Crafted using non-toxic 100% heavy organic certified cotton, scaled down carefully to accommodate unrestricted kinetic play.",
        images: {
            "Oatmeal": "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=500&q=80",
            "Blush": "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=500&q=80",
            "Dusty Blue": "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=500&q=80"
        },
        colors: ["Oatmeal", "Blush", "Dusty Blue"],
        isSale: i % 5 === 0,
        salePrice: 30
    })),

    // === Conceptual Fun Capsules (6 Capsules x 10 Items Each = 60 items) ===
    ...["espresso", "leisure", "cyberpunk", "jetset", "botanical", "midnight"].flatMap((capsule, cIdx) => 
        Array.from({ length: 10 }, (_, i) => {
            const types = ["Long Shirt Sleeve", "Boxy T-Shirt", "Nubuck Sneaker", "Modular Jacket", "Acetate Sunglasses", "Tailored Pants", "Ribbed Socks", "Heavy Hoodie", "Knitted Vest", "Lounge Short"];
            const basePrices = [65, 45, 210, 185, 110, 125, 20, 95, 80, 55];
            const names = ["The Espresso Club", "Off-Court Leisure", "Retro Cyberpunk", "Jetset Lounge", "Botanical Geometric", "Midnight Neon"];
            return {
                id: `${capsule}-${i + 1}`,
                name: `${names[cIdx].toUpperCase()} // ${types[i]}`,
                price: basePrices[i],
                collection: capsule,
                description: `Exclusive limited-run concept garment from our highly curated ${names[cIdx]} drop. Features industrial stitch structures and signature seasonal tonal treatments.`,
                images: {
                    "Tonal A": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
                    "Tonal B": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80",
                    "Tonal C": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80"
                },
                colors: ["Tonal A", "Tonal B", "Tonal C"],
                isSale: (cIdx + i) % 4 === 0,
                salePrice: Math.floor(basePrices[i] * 0.75)
            };
        })
    ),

    // === 10 Upcoming Collections Previews (Locked Inventory) ===
    ...Array.from({ length: 10 }, (_, i) => ({
        id: `upcoming-${i + 1}`,
        name: `PREVIEW // ${["Alpine Technical Shell", "Merino Wool Trench", "Crushed Velvet Kimono Blazer", "Hyper-Object Knit Scarf", "Suede Chelsea Mule", "Asymmetric Cargo Vest", "Raw Silk Lounge Pant", "Zero-Waste Packable Anorak", "Waxed Denim Utility Jean", "Liquid Metal Sunglasses"][i]}`,
        price: [320, 450, 280, 95, 180, 140, 160, 200, 190, 150][i],
        collection: "upcoming",
        description: "Sneak preview artifact from our incoming winter layout cycle. Crafted using developmental textile fabrications and conceptual shapes.",
        images: {
            "Prototype Smoke": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80"
        },
        colors: ["Prototype Smoke"],
        isSale: false,
        isUpcoming: true
    }))
];