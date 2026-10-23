export const sisterLocations = [
  {
    id: 'bakery',
    shortLabel: 'BAKERY',
    name: 'Takahachi Bakery',
    subtitle: 'Japanese Patisserie, Artisan Breads & Café',
    address: '25 Murray St, New York, NY 10007',
    neighborhood: 'Tribeca / Lower Manhattan',
    phone: '212-791-5550',
    email: 'takahachibakery@gmail.com',
    hours: 'Monday – Friday: 8:30 AM – 6:00 PM',
    weekend: 'Saturday & Sunday: Closed',
    instagram: 'https://www.instagram.com/takahachibakery/',
    url: 'https://www.takahachi.net/takahachi-bakery',
    mapsUrl: 'https://maps.google.com/?q=Takahachi+Bakery+25+Murray+St+New+York+NY+10007',
    active: true,
    tag: 'Current Site',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1540127491651-KHKRI9AV0767MZGPDWWE/takahachi-bakery.jpg',
    description: 'Fresh Japanese Shokupan, matcha whole cakes, mille crêpes, viennoiserie, and specialty Kyoto teas.'
  },
  {
    id: 'tribeca',
    shortLabel: 'TRIBECA',
    name: 'Takahachi Tribeca',
    subtitle: 'Authentic Japanese Dining, Sushi & Robata',
    address: '145 Duane St, New York, NY 10013',
    neighborhood: 'Tribeca, Manhattan',
    phone: '212-571-1830',
    email: 'info@takahachi.net',
    hours: 'Lunch & Dinner Daily',
    instagram: 'https://www.instagram.com/takahachitribeca/',
    url: 'https://www.takahachi.net/takahachi-tribeca',
    menuUrl: 'https://www.takahachi.net/s/Today-SP-menu-Mon-070124-c4hl.pdf',
    mapsUrl: 'https://maps.google.com/?q=Takahachi+Tribeca+145+Duane+St+New+York+NY+10013',
    active: false,
    tag: 'Sister Restaurant',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1540127436981-0D0NGR0B2K9KMZUTD988/duane_front.jpg',
    description: 'Renowned Tribeca Japanese restaurant serving premium nigiri sushi, sashimi, hot entrees, and daily specials.'
  },
  {
    id: 'sa',
    shortLabel: 'SA (BROOKLYN)',
    name: 'Takahachi SA',
    subtitle: 'Modern Izakaya, Small Plates & Artisanal Sake Bar',
    address: '29 Wyckoff Ave, Brooklyn, NY 11237',
    neighborhood: 'Bushwick, Brooklyn',
    phone: '929-607-4200',
    email: 'info@takahachi.net',
    hours: 'Dinner & Late Night',
    instagram: 'https://www.instagram.com/takahachibrooklyn/',
    url: 'https://www.takahachi.net/takahachi-sa',
    mapsUrl: 'https://maps.google.com/?q=Takahachi+SA+29+Wyckoff+Ave+Brooklyn+NY+11237',
    active: false,
    tag: 'Sister Izakaya',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/58675b8e-73d2-41a6-be23-52e2fac48436/0794ca17-6738-4b93-8a51-d07564ae7d49.png',
    description: 'Brooklyn outpost featuring creative Japanese izakaya bites, yakitori, craft sake flights, and lively neighborhood atmosphere.'
  }
];

export const cakeCatalog = [
  {
    id: 'kyoto-matcha',
    name: 'Kyoto Matcha Mousse Cake',
    jpName: '京都抹茶ムースケーキ',
    category: 'mousse',
    description: 'Ceremonial Uji matcha mousse layered over delicate almond sponge, crowned with edible gold leaf and slow-simmered azuki sweet red beans.',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1695579826825-HFP89GHD3MJQVJ4BFELN/IMG_0063.jpg',
    tag: 'House Bestseller',
    sizes: [
      { size: '5.5” × 5.5”', serves: '6–9 people', price: 40 },
      { size: '5.5” × 11”', serves: '12–18 people', price: 80 },
      { size: '11” × 11”', serves: '24–36 people', price: 160 },
      { size: '11” × 17”', serves: '40–50 people', price: 240 }
    ],
    features: ['Ceremonial Kyoto Matcha', 'Airy White Chocolate Mousse', 'Azuki Red Bean Compote']
  },
  {
    id: 'cassis-noir',
    name: 'Cassis Noir',
    jpName: 'カシスノワール',
    category: 'mousse',
    description: 'Vibrant French blackcurrant cassis mousse with dark chocolate ganache, crisp hazelnut praline feuiiletine base, and fresh berry glaze.',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625338479-ILV9ZXZRXFS99EA8ZMTL/IMG_0139.jpg',
    tag: 'Patisserie Signature',
    sizes: [
      { size: '5.5” × 5.5”', serves: '6–9 people', price: 40 },
      { size: '5.5” × 11”', serves: '12–18 people', price: 80 },
      { size: '11” × 11”', serves: '24–36 people', price: 160 },
      { size: '11” × 17”', serves: '40–50 people', price: 240 }
    ],
    features: ['French Cassis Puree', 'Valrhona Dark Chocolate', 'Hazelnut Feuilletine Crunch']
  },
  {
    id: 'strawberry-shortcake',
    name: 'Japanese Strawberry Shortcake',
    jpName: '苺のショートケーキ',
    category: 'sponge',
    description: 'The quintessence of Tokyo bakeries: ethereal vanilla sponge, light Hokkaido-style fresh chantilly cream, and sweet sliced strawberries.',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625341025-YFNOFGCNVYLTOEVL5A5O/IMG_0494.jpg',
    tag: 'Crowd Favorite',
    sizes: [
      { size: '6” Round', serves: '6–8 people', price: 38 },
      { size: '8” Round', serves: '12–15 people', price: 74 },
      { size: '12” Round', serves: '24–30 people', price: 148 },
      { size: '12” Custom Color/Design', serves: '24–30 people', price: 135 },
      { size: '11” × 17” Extra Fruits Sheet', serves: '40–50 people', price: 210 }
    ],
    features: ['Cloud-soft Japanese Sponge', 'Ultra-fresh Chantilly Cream', 'Hand-selected Ripe Strawberries']
  },
  {
    id: 'matcha-mille-crepe',
    name: 'Matcha Mille Crêpe',
    jpName: '抹茶ミルクレープ',
    category: 'crepe',
    description: 'Over 20 paper-thin handmade crêpe layers sandwiched with whipped Kyoto green tea diplomat cream. Stands 3 inches high with exquisite melt-in-mouth texture.',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625342419-QFMBMGNUYDX3ANNUP639/IMG_2734.jpg',
    tag: 'Chef Specialty',
    sizes: [
      { size: '10” Round (20 Layers, 3” High)', serves: '10–12 people', price: 70 }
    ],
    features: ['20 Micro-thin Crêpes', 'Kyoto Matcha Diplomat Cream', 'Dusted Matcha Sugar']
  },
  {
    id: 'souffle-cheesecake',
    name: 'Japanese Soufflé Cheesecake',
    jpName: 'スフレチーズケーキ',
    category: 'cheesecake',
    description: 'Cloud-soft, jiggling Japanese cotton cheesecake baked with gentle water-bath steam. Silky, subtle sweetness with light hint of citrus.',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1695583335289-PEFQUCNW8HU8BFFE0AUA/IMG_0211.jpg',
    tag: 'Classic',
    sizes: [
      { size: '6” Round', serves: '6–8 people', price: 34 }
    ],
    features: ['Cotton-soft Texture', 'Philadelphia Cream Cheese & Fresh Egg Whisk', 'Subtle Yuzu Citrus Note']
  },
  {
    id: 'gateau-chocolat',
    name: 'Gâteau au Chocolat',
    jpName: 'ガトー・オ・ショコラ',
    category: 'chocolate',
    description: 'Decadent dense French chocolate cake with fudgy center, baked to perfection and dusted with bittersweet Dutch cocoa powder.',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625339873-MA30QGQ414573ZV3J0J4/IMG_0212.jpg',
    tag: 'Chocoholic Choice',
    sizes: [
      { size: '6” Round', serves: '6–8 people', price: 36 }
    ],
    features: ['70% Dark Chocolate', 'Fudge-like Rich Center', 'Unsweetened Cocoa Dust']
  },
  {
    id: 'mango-passionfruit',
    name: 'Mango Passionfruit Cheesecake',
    jpName: 'マンゴーパッションチーズケーキ',
    category: 'cheesecake',
    description: 'Silky smooth baked cheesecake swirled with Alphonso mango and tart passionfruit reduction, crowned with fresh tropical fruit glaze.',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625340864-IO1ZLFE3ABLJ6CUKPG8E/IMG_0489.jpg',
    tag: 'Seasonal Favorite',
    sizes: [
      { size: '6” Round', serves: '6–8 people', price: 38 }
    ],
    features: ['Alphonso Mango Puree', 'Tart Passionfruit Curd', 'Graham Crust']
  },
  {
    id: 'belgian-chocolate',
    name: 'Belgian Chocolate Cake',
    jpName: 'ベルジャンチョコレートケーキ',
    category: 'chocolate',
    description: 'Rich layers of Belgian dark chocolate sponge, creamy chocolate chantilly, and smooth mirror chocolate glaze.',
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625342023-7EVGVZIRQJLWSWJIK4XB/IMG_2646.jpg',
    tag: 'Celebration Classic',
    sizes: [
      { size: '6” Round', serves: '6–8 people', price: 36 },
      { size: '8” Round', serves: '12–15 people', price: 70 },
      { size: '12” Round', serves: '24–30 people', price: 148 }
    ],
    features: ['Imported Belgian Chocolate', 'Chocolate Ganache Whip', 'Handmade Chocolate Curls']
  }
];

export const drinksMenu = {
  coffee: [
    { name: 'Fresh House Brew Coffee', hot: '8oz $1.90 / 12oz $2.25 / 16oz $3.00', iced: '16oz $3.25', desc: 'Locally roasted premium Arabica beans, smooth with nutty finish.' },
    { name: 'Café au Lait', hot: '12oz $2.75 / 16oz $3.25', iced: '—', desc: 'Half dark roast house drip coffee, half steamed milk.' },
    { name: 'Double Shot Espresso', hot: '2 shots $2.75', iced: '16oz $3.00', desc: 'Rich crema, bold notes of cocoa and toasted caramel.' },
    { name: 'Caffè Americano', hot: '12oz $2.75 / 16oz $3.25', iced: '16oz $3.25', desc: 'Espresso topped with purified hot or chilled water.' },
    { name: 'Caffè Latte', hot: '12oz $3.75 / 16oz $4.25', iced: '16oz $4.25', desc: 'Silky micro-foam poured over double espresso.' },
    { name: 'Cappuccino', hot: '12oz $3.75 / 16oz $4.25', iced: '—', desc: 'Equal parts rich espresso, steamed milk, and velvety foam.' },
    { name: 'Macchiato', hot: '2 shots $2.75', iced: '—', desc: 'Double espresso marked with a dollop of foam.' },
    { name: 'Caramel Latte', hot: '12oz $4.25 / 16oz $4.75', iced: '16oz $4.75', desc: 'Golden caramel syrup whisked with espresso and velvety milk.' },
    { name: 'Mocha Latte', hot: '12oz $4.25 / 16oz $4.75', iced: '16oz $4.75', desc: 'Bittersweet dark Dutch chocolate sauce with espresso & milk.' },
    { name: 'White Mocha Latte', hot: '12oz $4.25 / 16oz $4.75', iced: '16oz $4.75', desc: 'Creamy white cocoa ganache and fresh espresso.' }
  ],
  tea: [
    { name: 'Matcha Latte', hot: '12oz $4.50 / 16oz $5.00', iced: '16oz $5.00', desc: 'Authentic Kyoto Uji matcha whisked fresh with whole milk or plant milk.' },
    { name: 'Honey Yuzu Tea', hot: '12oz $4.00 / 16oz $4.40', iced: '16oz $4.75', desc: 'Aromatic Japanese citrus yuzu marmalade steeped with raw clover honey.' },
    { name: 'Chai Latte', hot: '12oz $3.75 / 16oz $4.25', iced: '16oz $4.25', desc: 'Spiced black tea infused with cardamom, cinnamon, clove & steamed milk.' },
    { name: 'Genmai Tea (Brown Rice)', hot: '12oz $2.50 / 16oz $3.00', iced: '16oz $3.00', desc: 'Japanese green tea blended with roasted puffed brown rice.' },
    { name: 'Hoji Tea (Roasted Green Tea)', hot: '12oz $2.50 / 16oz $3.00', iced: '16oz $3.00', desc: 'Earthy, comforting roasted Japanese bancha green tea.' },
    { name: 'Classic Green Tea (Sencha)', hot: '12oz $2.50 / 16oz $3.00', iced: '16oz $3.00', desc: 'Delicate, grassy and refreshing Japanese Sencha leaves.' },
    { name: 'Classic Black Tea', hot: '12oz $2.25 / 16oz $2.75', iced: '16oz $2.75', desc: 'Crisp and aromatic blend of Ceylon and Assam black teas.' },
    { name: 'English Breakfast', hot: '12oz $2.50 / 16oz $3.00', iced: '16oz $3.00', desc: 'Traditional robust morning tea blend.' },
    { name: 'Jasmine Green Tea', hot: '—', iced: '16oz $3.00', desc: 'Floral green tea scented with fragrant night-blooming jasmine flowers.' },
    { name: 'Decaf Earl Grey', hot: '12oz $2.50 / 16oz $3.00', iced: '16oz $3.00', desc: 'Decaffeinated black tea naturally scented with Italian bergamot.' },
    { name: 'Chamomile & Peppermint (Herbal)', hot: '12oz $2.50 / 16oz $3.00', iced: '16oz $3.00', desc: 'Caffeine-free soothing botanical infusions.' }
  ],
  customizations: [
    { item: 'Extra Espresso Shot', price: '+$1.50' },
    { item: 'Extra Flavor Syrup (Vanilla, Caramel, Hazelnut)', price: '+$0.50' },
    { item: 'Organic Soy Milk', price: '+$0.50' },
    { item: 'Creamy Almond Milk', price: '+$0.75' },
    { item: 'Rich Coconut Milk', price: '+$0.75' },
    { item: 'Evian Natural Spring Water', price: '$2.25' },
    { item: 'San Pellegrino Sparkling Water', price: '$2.50' }
  ]
};

export const bakedGoods = [
  {
    name: 'Japanese Milk Bread (Shokupan)',
    desc: 'The iconic Japanese sandwich loaf, made with Yudane dough for pillow-soft fluffiness and golden crust.',
    price: '$6.50 / loaf',
    tag: 'Daily Fresh'
  },
  {
    name: 'Artisan Curry Pan',
    desc: 'Deep-fried golden bread coated in crispy panko, stuffed with rich, savory Japanese beef and vegetable curry.',
    price: '$4.25',
    tag: 'Savory Favorite'
  },
  {
    name: 'Ogura Anpan',
    desc: 'Tender sweet bun filled with our house-made sweetened Azuki red bean paste and topped with black sesame.',
    price: '$3.50',
    tag: 'Traditional'
  },
  {
    name: 'Melon Pan',
    desc: 'Fluffy sweet yeast bun topped with a crisp, diamond-scored buttery cookie crust.',
    price: '$3.75',
    tag: 'Classic Tokyo'
  },
  {
    name: 'Matcha Swiss Roll Slice',
    desc: 'Kyoto matcha sponge cake rolled with delicate chantilly cream and azuki sweet red beans.',
    price: '$5.50',
    tag: 'Patisserie'
  },
  {
    name: 'French Butter Croissant',
    desc: 'Multi-layered flaky viennoiserie baked fresh every morning with European high-fat butter.',
    price: '$3.95',
    tag: 'Morning Fresh'
  },
  {
    name: 'Valrhona Chocolate Croissant',
    desc: 'Golden flaky pastry folded with two batons of French bittersweet dark chocolate.',
    price: '$4.50',
    tag: 'Morning Fresh'
  },
  {
    name: 'Handmade French Macarons Box',
    desc: 'Assorted flavors: Kyoto Matcha, Yuzu Citrus, Cassis, Black Sesame, Salted Caramel, Dark Chocolate.',
    price: '$16.00 / 6 pcs',
    tag: 'Gift Box'
  }
];

export const reviews = [
  {
    source: 'Time Out New York',
    quote: 'Japan gave us sushi, but the country also created green-tea desserts—and for that, we are forever grateful. Matcha-flavored sweets are just a few of the many sugary offerings at this café. You’ll drool over the matcha-and-red-bean swiss roll or the matcha crêpe. Éclairs, mousse and other French-style desserts are also up for grabs.',
    rating: '5/5 Stars',
    badge: 'Critic Pick'
  },
  {
    source: 'Serious Eats',
    quote: 'The owner is Hiroyuki Takahashi, the owner of Takahachi restaurant in the East Village. This Japanese patisserie/bakery/sandwich shop/gelateria is a welcome sight for those of us still weeping over the loss of Bouley Bakery. Takahachi is like a fancier version of Cafe Zaiya, with sweets and savories that are much more creative, as well as housemade macarons.',
    rating: 'Highly Recommended',
    badge: 'Food Critic Choice'
  },
  {
    source: 'Zomato & NYC Locals',
    quote: 'One of the best hidden gems in Tribeca. The Kyoto Matcha Mousse and Strawberry Shortcake have that authentic, barely-sweet, ultra-refined texture you only find in the best bakeries in Tokyo and Paris.',
    rating: '4.8 / 5.0',
    badge: 'Top Rated in FiDi'
  }
];

export const photoGallery = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1695579826825-HFP89GHD3MJQVJ4BFELN/IMG_0063.jpg',
    title: 'Kyoto Matcha Mousse Cake',
    category: 'Cakes',
    desc: 'Ceremonial green tea mousse with red beans and gold leaf'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625341025-YFNOFGCNVYLTOEVL5A5O/IMG_0494.jpg',
    title: 'Strawberry Shortcake',
    category: 'Cakes',
    desc: 'Signature Tokyo-style strawberry shortcake with Hokkaido-style cream'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625342419-QFMBMGNUYDX3ANNUP639/IMG_2734.jpg',
    title: 'Matcha Mille Crêpe',
    category: 'Cakes',
    desc: '20 handcrafted crêpe layers with matcha cream'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625338479-ILV9ZXZRXFS99EA8ZMTL/IMG_0139.jpg',
    title: 'Cassis Noir Cake',
    category: 'Cakes',
    desc: 'French blackcurrant mousse & dark chocolate ganache'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1695583335289-PEFQUCNW8HU8BFFE0AUA/IMG_0211.jpg',
    title: 'Japanese Soufflé Cheesecake',
    category: 'Cakes',
    desc: 'Cotton soft steam-baked Japanese cheesecake'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625340864-IO1ZLFE3ABLJ6CUKPG8E/IMG_0489.jpg',
    title: 'Mango Passionfruit Cheesecake',
    category: 'Cakes',
    desc: 'Tropical curd swirl with fresh mango glaze'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625342023-7EVGVZIRQJLWSWJIK4XB/IMG_2646.jpg',
    title: 'Belgian Chocolate Cake',
    category: 'Cakes',
    desc: 'Rich Belgian chocolate mousse and chocolate sponge'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625343239-0CS2ALJSBW3UBJVK5T2M/IMG_3203.jpg',
    title: 'Specialty Celebration Shortcake',
    category: 'Cakes',
    desc: 'Handcrafted custom decorations for birthdays & events'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1691861574778-JZ63ZZINEHZZ09OOV2ZP/DSC00357.jpg',
    title: 'Bakery Display & Counter',
    category: 'Bakery',
    desc: 'Freshly baked pastries and cakes daily on Murray Street'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1540139123325-1AUKKM8MIDVPMZ6VLDTO/food_8.jpg',
    title: 'Artisan Pastry Selection',
    category: 'Breads & Savory',
    desc: 'Daily baked breads, croissants, and savory buns'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1540139767421-KT0TKWMZXJ4I7IC4LAJ8/kitchen_1.jpg',
    title: 'Patisserie Kitchen in Action',
    category: 'Kitchen',
    desc: 'Chef Naoko Mabuchi crafting delicate pastry layers'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1540139771171-AGZOA8MIAM3G0X7YLI8W/kitchen_7.jpg',
    title: 'Fresh Breads Right Out of Oven',
    category: 'Kitchen',
    desc: 'Warm bread loaves cooling in the morning kitchen'
  }
];
