// ─── CONTACT INFO ────────────────────────────────────────────────────────────
export const CONTACT = {
  name: 'Minhas Pizza & Broast',
  tagline: 'Delicious in Taste',
  address: 'Adda Road, Near National Bank of Pakistan, Bhikhi, 39401',
  addressFull: 'Faisalabad Road, Adda Bhikhi, Sheikhupura',
  phones: ['0320-4141408', '0310-1457166', '0307-4308851'],
  landline: '0563882400',
  whatsapp: '923204141408',
  hours: 'Open Daily — Closes at 2:00 AM',
  facebook: 'https://facebook.com',
}

// ─── MENU DATA ────────────────────────────────────────────────────────────────
export const MENU_CATEGORIES = [
  { id: 'broast', label: 'Broast', icon: '🍗' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'pasta', label: 'Pasta', icon: '🍝' },
  { id: 'wings', label: 'Wings', icon: '🔥' },
  { id: 'sandwiches', label: 'Sandwiches', icon: '🥪' },
  { id: 'desi', label: 'Desi & BBQ', icon: '🫕' },
  { id: 'rice', label: 'Rice', icon: '🍚' },
]

export const MENU_ITEMS = {
  broast: [
    {
      id: 'b1',
      name: 'Chicken Broast (Plain)',
      description: 'Crispy golden fried chicken, seasoned with our secret spice blend',
      variants: [
        { label: 'Full', price: 1000 },
        { label: 'Half', price: 550 },
        { label: 'Quarter', price: 300 },
      ],
      badge: 'Best Seller',
    },
    {
      id: 'b2',
      name: 'Chicken Broast (Injected)',
      description: 'Juicy injected broast marinated deep with premium flavors',
      variants: [
        { label: 'Full', price: 1000 },
        { label: 'Half', price: 550 },
        { label: 'Quarter', price: 300 },
      ],
      badge: 'Special',
    },
  ],
  pizza: [
    {
      id: 'p1',
      name: 'Minhas Special Pizza',
      description: 'Loaded with premium toppings – our signature creation',
      variants: [
        { label: 'Small', price: 550 },
        { label: 'Medium', price: 850 },
        { label: 'Large', price: 1200 },
      ],
      badge: 'Signature',
    },
    {
      id: 'p2',
      name: 'Chicken Tikka Pizza',
      description: 'Tender tikka chunks with bell peppers on rich tomato base',
      variants: [
        { label: 'Small', price: 500 },
        { label: 'Medium', price: 800 },
        { label: 'Large', price: 1150 },
      ],
    },
    {
      id: 'p3',
      name: 'BBQ Chicken Pizza',
      description: 'Smoky BBQ sauce, grilled chicken, caramelized onions',
      variants: [
        { label: 'Small', price: 500 },
        { label: 'Medium', price: 800 },
        { label: 'Large', price: 1150 },
      ],
    },
    {
      id: 'p4',
      name: 'Square Pizza',
      description: 'Our famous thick-crust square pizza with generous toppings',
      variants: [
        { label: 'Small', price: 500 },
        { label: 'Medium', price: 750 },
        { label: 'Large', price: 1100 },
      ],
      badge: 'Famous',
    },
  ],
  pasta: [
    {
      id: 'pa1',
      name: 'Minhas Special Pasta',
      description: 'House special sauce with a blend of spices and fresh herbs',
      variants: [
        { label: 'F1', price: 280 },
        { label: 'F2', price: 380 },
      ],
      badge: 'Special',
    },
    {
      id: 'pa2',
      name: 'Macaroni',
      description: 'Classic macaroni cooked in a rich tomato-based sauce',
      variants: [
        { label: 'F1', price: 250 },
        { label: 'F2', price: 340 },
      ],
    },
    {
      id: 'pa3',
      name: 'Creamy Pasta',
      description: 'Velvety white sauce pasta with herbs and seasoning',
      variants: [
        { label: 'F1', price: 290 },
        { label: 'F2', price: 390 },
      ],
    },
    {
      id: 'pa4',
      name: 'Crunchy Pasta',
      description: 'Crispy toppings over saucy pasta for a textural delight',
      variants: [
        { label: 'F1', price: 300 },
        { label: 'F2', price: 400 },
      ],
    },
  ],
  wings: [
    {
      id: 'w1',
      name: 'Oven Baked Wings',
      description: 'Slow-baked to perfection with a crispy outer layer',
      variants: [
        { label: '4 pcs', price: 300 },
        { label: '8 pcs', price: 550 },
        { label: '16 pcs', price: 1050 },
      ],
    },
    {
      id: 'w2',
      name: 'Peri Peri Wings',
      description: 'Fire-grilled wings tossed in spicy peri peri sauce',
      variants: [
        { label: '4 pcs', price: 320 },
        { label: '8 pcs', price: 600 },
        { label: '16 pcs', price: 1100 },
      ],
      badge: '🔥 Hot',
    },
    {
      id: 'w3',
      name: 'Honey BBQ Wings',
      description: 'Sweet and smoky honey BBQ glaze on crispy wings',
      variants: [
        { label: '4 pcs', price: 320 },
        { label: '8 pcs', price: 600 },
        { label: '16 pcs', price: 1100 },
      ],
    },
  ],
  sandwiches: [
    {
      id: 's1',
      name: 'Minhas Special Sandwich',
      description: 'Loaded with chicken, fresh veggies & special Minhas sauce',
      variants: [{ label: 'Regular', price: 750 }],
      badge: 'Must Try',
    },
    {
      id: 's2',
      name: 'Malai Boti Sandwich',
      description: 'Tender malai boti chunks in a toasted bun with mint chutney',
      variants: [{ label: 'Regular', price: 800 }],
    },
  ],
  desi: [
    {
      id: 'd1',
      name: 'Chicken Karahi',
      description: 'Fresh tomato-based karahi with ginger, garlic & green chilies',
      variants: [{ label: 'Full', price: 1200 }, { label: 'Half', price: 680 }],
      badge: 'Live BBQ',
    },
    {
      id: 'd2',
      name: 'Mutton Karahi',
      description: 'Premium mutton slow-cooked in aromatic spices',
      variants: [{ label: 'Full', price: 2200 }, { label: 'Half', price: 1200 }],
    },
    {
      id: 'd3',
      name: 'Beef Karahi',
      description: 'Rich beef karahi with charcoal smokiness',
      variants: [{ label: 'Full', price: 1800 }, { label: 'Half', price: 950 }],
    },
    {
      id: 'd4',
      name: 'Special Chicken Tikka',
      description: 'Tender tikka pieces marinated in yogurt & special spices',
      variants: [{ label: 'Full Plate', price: 950 }, { label: 'Half Plate', price: 500 }],
      badge: 'Charcoal',
    },
    {
      id: 'd5',
      name: 'Special Malai Boti',
      description: 'Silky smooth malai boti grilled to golden perfection',
      variants: [{ label: 'Full Plate', price: 1000 }, { label: 'Half Plate', price: 550 }],
    },
    {
      id: 'd6',
      name: 'Reshmi Kabab',
      description: 'Melt-in-mouth kababs with a delicate cream marinade',
      variants: [{ label: 'Plate (6 pcs)', price: 700 }],
    },
    {
      id: 'd7',
      name: 'Kabab Karahi Plate',
      description: 'Combo plate of kabab and karahi — the ultimate desi feast',
      variants: [{ label: 'Plate', price: 1100 }],
      badge: 'Combo',
    },
  ],
  rice: [
    {
      id: 'r1',
      name: 'Simple Biryani',
      description: 'Fragrant basmati rice with whole spices and herbs',
      variants: [{ label: 'Plate', price: 180 }],
    },
    {
      id: 'r2',
      name: 'Special Chicken Biryani',
      description: 'Layered dum biryani with tender chicken and saffron aroma',
      variants: [
        { label: 'Full', price: 350 },
        { label: 'Half', price: 220 },
      ],
      badge: 'Fan Favorite',
    },
    {
      id: 'r3',
      name: 'Full Leg Piece Biryani',
      description: 'Whole chicken leg piece on a bed of aromatic biryani rice',
      variants: [{ label: 'Full Plate', price: 450 }],
      badge: 'Premium',
    },
  ],
}

// ─── DEALS DATA ───────────────────────────────────────────────────────────────
export const DEALS = {
  'dhamka-zinger': {
    label: 'Dhamka Zinger Deals',
    color: 'red',
    icon: '⚡',
    items: [
      {
        id: 'dz1',
        name: 'Deal 1',
        items: ['1x Zinger Burger', '1x Regular Fries', '1x Regular Drink'],
        price: 450,
        badge: 'Popular',
      },
      {
        id: 'dz2',
        name: 'Deal 2',
        items: ['1x Zinger Burger', '1x Large Fries', '1x Large Drink'],
        price: 550,
      },
      {
        id: 'dz3',
        name: 'Deal 3',
        items: ['2x Zinger Burger', '1x Regular Fries', '2x Regular Drink'],
        price: 850,
        badge: 'Value',
      },
      {
        id: 'dz4',
        name: 'Deal 4',
        items: ['1x Zinger Burger', '2x Chicken Pieces', '1x Regular Fries', '1x Regular Drink'],
        price: 700,
      },
      {
        id: 'dz5',
        name: 'Deal 5',
        items: ['2x Zinger Burger', '4x Chicken Pieces', '1x Large Fries', '2x Regular Drink'],
        price: 1200,
        badge: 'Family',
      },
      {
        id: 'dz6',
        name: 'Deal 6',
        items: ['3x Zinger Burger', '4x Chicken Pieces', '2x Regular Fries', '3x Regular Drink'],
        price: 1700,
        badge: 'Mega',
      },
    ],
  },
  'lunch-midnight': {
    label: 'Lunch & Midnight Deals',
    color: 'gold',
    icon: '🌙',
    items: [
      {
        id: 'lm1',
        name: 'Deal 1',
        items: ['1x Small Pizza', '1x Regular Drink'],
        price: 650,
        badge: 'Midnight Special',
      },
      {
        id: 'lm2',
        name: 'Deal 2',
        items: ['1x Medium Pizza', '2x Regular Drink'],
        price: 950,
        badge: 'Late Night',
      },
      {
        id: 'lm3',
        name: 'Deal 3',
        items: ['1x Large Pizza', '1x Large Drink', '1x Garlic Bread'],
        price: 1350,
        badge: 'Best Value',
      },
    ],
  },
  'square-pizza': {
    label: 'Square Pizza Deals',
    color: 'gold',
    icon: '🍕',
    items: [
      {
        id: 'sp1',
        name: 'Deal 1 — Small',
        items: ['1x Small Square Pizza', '1x Regular Drink'],
        price: 600,
      },
      {
        id: 'sp2',
        name: 'Deal 2 — Medium',
        items: ['1x Medium Square Pizza', '1x Large Drink'],
        price: 900,
        badge: 'Popular',
      },
      {
        id: 'sp3',
        name: 'Deal 3 — Large',
        items: ['1x Large Square Pizza', '2x Regular Drink'],
        price: 1250,
        badge: 'Best Deal',
      },
    ],
  },
  students: {
    label: 'Students Deals',
    color: 'green',
    icon: '🎓',
    items: [
      {
        id: 'st1',
        name: 'Student Lite',
        items: ['1x Burger', '1x Small Fries', '1x Regular Drink'],
        price: 250,
        badge: 'Budget',
      },
      {
        id: 'st2',
        name: 'Student Classic',
        items: ['1x Zinger Burger', '1x Regular Fries', '1x Regular Drink'],
        price: 400,
        badge: 'Most Loved',
      },
      {
        id: 'st3',
        name: 'Student Feast',
        items: ['2x Zinger Burger', '1x Regular Fries', '2x Regular Drink', '1x Small Pasta'],
        price: 750,
      },
      {
        id: 'st4',
        name: 'Group Deal',
        items: ['1x Medium Pizza', '4x Zinger Burger', '4x Regular Drink', '2x Fries'],
        price: 2000,
        badge: 'Group',
      },
    ],
  },
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    icon: 'fresh',
    title: 'Fresh Ingredients',
    desc: 'Every dish is made with hand-picked fresh ingredients sourced daily for maximum flavor.',
  },
  {
    icon: 'bbq',
    title: 'Live Bar B Q & Desi Food',
    desc: 'Authentic charcoal BBQ and traditional desi karahi cooked live right before you.',
  },
  {
    icon: 'delivery',
    title: 'Midnight Delivery',
    desc: 'Craving food at 1 AM? We deliver! Available daily until 2:00 AM.',
  },
  {
    icon: 'deals',
    title: 'Pocket-Friendly Deals',
    desc: 'Specially crafted deals for students and families starting from just Rs. 250.',
  },
]
