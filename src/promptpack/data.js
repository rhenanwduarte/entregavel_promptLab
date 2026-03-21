// ==========================================
// PROMPTLAB V3 PRO - MASTER DATABASE (100 PROMPTS)
// ==========================================


export const categories = [
  { id: 'cosmetics', label: 'Cosmetics', icon: 'Sparkles' },
  { id: 'supplements', label: 'Supplements', icon: 'Zap' },
  { id: 'branding-mockups', label: 'Branding Mockups', icon: 'Layers' },
  { id: 'automotive', label: 'Automotive', icon: 'Car' },
  { id: 'jewelry', label: 'Jewelry', icon: 'Gem' },
  { id: 'fashion', label: 'Fashion', icon: 'ShoppingBag' },
  { id: 'food-beverage', label: 'Food & Beverage', icon: 'Coffee' },
  { id: 'home-decor', label: 'Home Decor', icon: 'Home' },
  { id: 'tech-gadgets', label: 'Tech Gadgets', icon: 'Cpu' },
  { id: 'pets', label: 'Pet Products', icon: 'Heart' }
];
export const prompts = [
  // ==========================================
  // LOTE 1: COSMETICS & SKINCARE
  // ==========================================
  {
    id: 'cos-1',
    categoryId: 'cosmetics',
    title: 'Aquatic Oasis',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800',
    gradient: 'from-blue-500 to-cyan-400',
    prompt: 'Capture an ultra-high definition, photorealistic commercial product shot of a [YOUR PRODUCT HERE: e.g., minimalist, transparent glass skincare serum bottle] resting gently on a tranquil pool of water, creating perfect concentric ripples. The product features a sleek, blank label space ideal for modern, tech-inspired branding. Shot using a Phase One XF IQ4 150MP camera with a Schneider Kreuznach 120mm LS f/4.0 Macro lens. Illuminate the scene with Broncolor Siros L 800W/S strobes fitted with large softboxes, positioned overhead to cast a luxurious, even glow. The background is a seamless, pure [BACKGROUND COLOR: e.g., clinical white]. Post-processed for flawless white balance, crisp contrast, and a refreshing aesthetic. 8k resolution, cinematic lighting, masterpiece.'
  },
  {
    id: 'cos-2',
    categoryId: 'cosmetics',
    title: 'Rustic Elegance',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800',
    gradient: 'from-emerald-500 to-teal-400',
    prompt: 'Create a stunning, high-end studio photography shot of a sleek, blank [YOUR PRODUCT HERE: e.g., matte ceramic jar containing a clay face mask], resting on a raw, textured slab of dark slate stone. [BOTANICAL ELEMENT: e.g., Delicate, fresh eucalyptus leaves] softly frame the edges of the composition. Captured with a Hasselblad H6D-100c and a Hasselblad HC 100mm f/2.2 lens. The aperture is set to f/8 to ensure the products crisp edges remain in absolute sharp focus while creating a subtle, creamy bokeh in the botanical background. Lighting consists of a single large octabank angled at 45 degrees, casting soft, natural shadows that beautifully contrast the rough, earthy texture. Earthy neutral color palette, editorial advertising, 8k, photorealistic.'
  },
  {
    id: 'cos-3',
    categoryId: 'cosmetics',
    title: 'The Golden Hour',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800',
    gradient: 'from-amber-400 to-orange-500',
    prompt: 'A breathtaking, cinematic product visualization of a [YOUR PRODUCT HERE: e.g., luxury, geometric glass perfume bottle] sitting on a minimalist concrete plinth. The scene is bathed in warm, dramatic golden hour light streaming through an unseen window, casting long, sharp, aesthetically pleasing shadows across the surface. Shot on a Leica SL2-S with a Leica Summilux-SL 50mm f/1.4 ASPH lens and Kodak Portra 400 film emulation for a rich, warm, and nostalgic color profile. The blank product acts as a perfect canvas for premium branding mockups. The lighting setup employs a strong directional backlight and a subtle golden reflector. High fashion editorial style, hyper-detailed, atmospheric, 8k.'
  },
  {
    id: 'cos-4',
    categoryId: 'cosmetics',
    title: 'Textured Macro',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800',
    gradient: 'from-rose-400 to-red-500',
    prompt: 'Capture a mesmerizing, ultra-macro photorealistic image of a [TEXTURE TYPE: e.g., rich, luxurious moisturizing cream] swiped dynamically across a pristine white acrylic surface, with an open, blank [YOUR PRODUCT HERE: e.g., frosted glass jar] positioned elegantly in the blurred background. Captured using a RED Monstro 8K VV with a Zeiss CP.3 50mm T2.1 macro lens to reveal the thick, velvety texture, micro-shadows, and creamy peaks. The lighting is meticulously engineered using a specialized tethered ring light and white bounce cards, ensuring a flawless, shadowless, and clinical illumination. The composition is flawlessly balanced, offering ample negative space for typography. High-end campaign, 8k resolution, clean aesthetic.'
  },
  {
    id: 'cos-5',
    categoryId: 'cosmetics',
    title: 'Zero Gravity',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800',
    gradient: 'from-indigo-400 to-cyan-400',
    prompt: 'An eye-catching, dynamic commercial photograph of a [YOUR PRODUCT HERE: e.g., frosted glass essential oil dropper bottle] suspended in mid-air, surrounded by floating, spherical water droplets and a delicate splash of pure water. The product features a blank, modern label. Shot with a Nikon D850 and a 105mm f/2.8 macro lens, utilizing an incredibly fast shutter speed of 1/8000s to perfectly freeze the motion. The lighting utilizes dual Profoto Pro-10 flashes with strip boxes on either side to create elegant, defining edge-lights, separating the product from the seamless, soft [BACKGROUND COLOR: e.g., pastel pink] background. Hyper-realistic, gravity-defying, 8k, editorial masterpiece.'
  },
  {
    id: 'cos-6',
    categoryId: 'cosmetics',
    title: 'Tropical Summer',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800',
    gradient: 'from-yellow-400 to-orange-500',
    prompt: 'A photorealistic, premium summer lifestyle product shot of a blank, minimalist [YOUR PRODUCT HERE: e.g., matte-finish sunscreen tube] resting on pristine, powdery white tropical sand. A harsh, direct overhead sunlight casts the distinct, sharp shadow of a [TROPICAL ELEMENT: e.g., tropical palm leaf] directly across the product and the sand, creating a striking, high-contrast visual. Captured with a Canon EOS R5 and a Canon RF 50mm f/1.2L USM lens. A polarizing filter is used to eliminate unwanted glare, while a silver reflector gently fills in the darkest shadows. Bright, vibrant, sun-drenched atmosphere, vacation advertising, 8k, cinematic composition.'
  },
  {
    id: 'cos-7',
    categoryId: 'cosmetics',
    title: 'Dark Contrast',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800',
    gradient: 'from-slate-800 to-slate-900',
    prompt: 'A dramatic, luxurious close-up of a high-end [YOUR PRODUCT HERE: e.g., metallic lipstick bullet, fully twisted up], standing upright on a sleek black obsidian reflective surface. The casing is completely blank and minimalist, exuding a modern elegance. Captured with a Sony A7R IV and a Sony FE 90mm f/2.8 Macro G OSS lens. The lighting is dark, moody, and cinematic, utilizing a single, narrow snoot light to create a precise, dramatic spotlight that illuminates only the rich texture of the product and the gleaming edge of its casing, leaving the rest of the frame in deep shadows. Chiaroscuro effect, intense color contrast, 8k, hyper-detailed.'
  },
  {
    id: 'cos-8',
    categoryId: 'cosmetics',
    title: 'Frozen Mist',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800',
    gradient: 'from-cyan-300 to-blue-400',
    prompt: 'Capture a fresh, invigorating photorealistic image of a [YOUR PRODUCT HERE: e.g., tall, blank, frosted glass facial toner bottle] standing on a mirrored surface, heavily misted with tiny, perfect condensation droplets that signify absolute freshness. Shot in the style of renowned commercial photography, using a Phase One XF IQ4 150MP with a 120mm macro lens. The lighting mimics the soft, cool, diffused light of early morning, achieved with massive overhead scrims and cool-toned LED panels. The background is an infinite, seamless [BACKGROUND COLOR: e.g., cool mint green]. The extreme resolution captures every individual bead of water, emphasizing a pure and clinical approach. 8k, ultra-crisp.'
  },
  {
    id: 'cos-9',
    categoryId: 'cosmetics',
    title: 'Laboratory Podium',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800',
    gradient: 'from-gray-200 to-gray-400',
    prompt: 'A sleek, futuristic product shot of a [YOUR PRODUCT HERE: e.g., small, minimalist metallic eye cream applicator tube] resting on a pristine, transparent acrylic geometric podium. The aesthetic is highly clinical, clean, and tech-inspired, perfectly suited for a modern brand. Captured using a Fujifilm GFX 100S with a GF 120mm f/4 R LM OIS WR Macro lens. The lighting setup is an immaculate, brilliantly white studio environment with large overhead softboxes and white foam core boards bouncing light from all angles to create an absolute shadowless, pure white void. The reflections in the acrylic podium are meticulously controlled. High-tech laboratory pure, 8k resolution, ultra-realistic.'
  },
  {
    id: 'cos-10',
    categoryId: 'cosmetics',
    title: 'Organic Kitchen',
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=800',
    gradient: 'from-yellow-600 to-orange-700',
    prompt: 'A beautifully styled, high-end rustic-elegant product photograph of a blank [YOUR PRODUCT HERE: e.g., amber glass jar filled with organic body scrub]. The product sits on a piece of raw, weathered linen fabric, surrounded by artfully scattered raw ingredients like [RAW INGREDIENTS: e.g., coarse brown sugar, coffee beans, and a single cinnamon stick]. Captured with a Canon EOS 5D Mark IV using a 85mm f/1.2L II USM lens, set to a shallow f/2.0 aperture to isolate the product while creating a warm, dreamy blur in the textured foreground and background. The lighting is soft, warm, and natural, mimicking window light from a rustic kitchen. Premium organic vibe, cozy textures, 8k.'
  },

  {
    id: 'cos-11',
    categoryId: 'cosmetics',
    title: 'Crystal Drop Studio',
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?q=80&w=800',
    gradient: 'from-blue-400 to-cyan-500',
    prompt: 'Create an ultra-high-resolution commercial studio photograph of a [YOUR PRODUCT HERE]. The product is a physical cosmetic container placed on a dark polished stone surface with controlled water droplets surrounding the base. Background features a smooth aquatic blue gradient with soft atmospheric diffusion. Lighting engineering: Large diffused softbox from top front at 45 degrees. Subtle rim light from rear left to accent glass edges. Controlled specular highlights. No harsh reflections. Camera: 85mm prime lens. Shallow depth of field. Eye-level perspective. True-to-scale proportions. Material control: Accurate glass refraction. Realistic liquid transparency. Sharp label edges. No distortion. Composition: Centered framing. Minimal negative space. Balanced symmetry. Color science: Cool neutral tones. Soft cyan highlights. Natural skin-safe color grading. Realism enforcement: Correct shadow physics. Natural light falloff. Accurate surface reflection. Negative stability block: Avoid warped packaging, melted plastic, floating objects, unrealistic water behavior, distorted typography. Best Used For: Serums, toners, moisturizers, perfumes. Lighting Profile: Diffused aquatic glow. Camera Profile: 85mm shallow DOF. Material Priority: Glass, liquid, gloss.'
  },
  {
    id: 'cos-12',
    categoryId: 'cosmetics',
    title: 'Velvet Matte Authority',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800',
    gradient: 'from-gray-800 to-zinc-900',
    prompt: 'Create a high-end commercial product photograph of a [YOUR PRODUCT HERE]. The product is placed on a matte black textured surface inside a controlled dark studio environment. Background remains deep charcoal with subtle gradient separation. Lighting engineering: Low-key lighting setup. Single key light from front right. Soft rim light to define silhouette. High contrast without clipping highlights. Camera: 105mm portrait lens. Shallow depth of field. Slight low-angle framing for authority. Material control: Matte finish clarity. Accurate metallic details. Precise logo rendering. No over-sharpening. Composition: Rule-of-thirds placement. Negative space on left side. Clean luxury framing. Color science: Muted tones. Warm skin-safe highlights. Deep controlled blacks. Realism enforcement: Natural shadows. No artificial glow. Correct edge geometry. Negative stability block: Avoid glossy artifacts, warped labels, floating shadows, surreal reflections. Best Used For: Lipsticks, foundations, premium makeup. Lighting Profile: Low-key editorial. Camera Profile: 105mm portrait. Material Priority: Matte plastic, metal accents.'
  },
  {
    id: 'cos-13',
    categoryId: 'cosmetics',
    title: 'Marble Clinical Podium',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=800',
    gradient: 'from-stone-200 to-gray-100',
    prompt: 'Create an ultra-clean commercial studio photograph of a [YOUR PRODUCT HERE]. The product is positioned on a white marble podium inside a clinical minimalist environment. Soft white seamless background with subtle shadow gradient. Lighting engineering: Full diffused front lighting. Top softbox. Gentle fill from both sides. No hard shadows. Camera: 70mm lens. Straight-on eye-level framing. Sharp focus across entire product. Material control: Accurate marble texture. True label sharpness. Balanced highlight control. Composition: Centered symmetry. Clean negative space. Minimalist aesthetic. Color science: Bright neutral palette. Soft warm highlights. Controlled white balance. Realism enforcement: Accurate scale. Natural contact shadows. No floating appearance. Negative stability block: Avoid overexposed whites, plastic distortion, floating effect. Best Used For: Clinical skincare, dermatology products. Lighting Profile: High-key diffused. Camera Profile: 70mm commercial. Material Priority: Marble, glass, soft plastic.'
  },
  {
    id: 'cos-14',
    categoryId: 'cosmetics',
    title: 'Botanical Light Sanctuary',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800',
    gradient: 'from-green-400 to-emerald-500',
    prompt: 'Create a natural light commercial product photograph of a [YOUR PRODUCT HERE]. The product is placed on a warm wooden surface surrounded by soft green botanical leaves. Sunlight filters from left side creating gentle natural highlights. Lighting engineering: Simulated golden hour sunlight. Soft shadows. Natural ambient bounce. Camera: 85mm lens. Shallow depth. Slight top-down angle. Material control: Organic texture fidelity. Natural label detail. True-to-life surface gloss. Composition: Balanced asymmetry. Foreground leaf blur. Soft depth layering. Color science: Warm earthy tones. Soft green accents. Natural color grading. Realism enforcement: Correct light direction. Natural leaf shadows. Real surface contact. Negative stability block: Avoid plastic-looking leaves, exaggerated sunlight, floating product. Best Used For: Organic skincare, clean beauty brands. Lighting Profile: Golden hour natural. Camera Profile: 85mm lifestyle. Material Priority: Wood, leaves, natural textures.'
  },

  // ==========================================
  // LOTE 2: SUPPLEMENTS & ENERGY
  // ==========================================
  {
    id: 'sup-11',
    categoryId: 'supplements',
    title: 'Extreme Splash',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800',
    gradient: 'from-lime-400 to-emerald-500',
    prompt: 'A breathtaking, dynamic commercial product shot of a sleek, blank [YOUR PRODUCT HERE: e.g., aluminum energy drink can] bursting through a chaotic splash of [LIQUID COLOR/TYPE: e.g., glowing, electric blue liquid]. The product is covered in hyper-realistic, freezing condensation droplets. Captured with a Phase One XF IQ4 150MP and a Schneider Kreuznach 80mm LS f/2.8 lens. The lighting is intensely dramatic, utilizing dual Broncolor strobes with neon gels to create aggressive rim lights along the edges. A blazing fast shutter speed of 1/8000s perfectly freezes the chaotic motion of the splash in mid-air. The background is a deep, moody, cinematic black. High-octane advertising, photorealistic, 8k resolution.'
  },
  {
    id: 'sup-12',
    categoryId: 'supplements',
    title: 'Gritty Underworld',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800',
    gradient: 'from-gray-700 to-gray-900',
    prompt: 'A highly detailed, gritty commercial photograph of a [YOUR PRODUCT HERE: e.g., massive, matte black protein powder tub] featuring a blank, minimalist label area. The product sits heavily on a distressed, rough concrete gym floor, with a subtle, artful dusting of [POWDER/INGREDIENT TYPE: e.g., rich chocolate protein powder] scattered around its base. Shot on a RED Monstro 8K VV with a Zeiss CP.3 50mm T2.1 lens to capture the raw, tactile textures of the environment. The lighting is cinematic and moody, using a single harsh overhead spotlight fitted with a honeycomb grid to carve deep, aggressive shadows. Raw, masculine fitness aesthetic, 8k.'
  },
  {
    id: 'sup-13',
    categoryId: 'supplements',
    title: 'Energy Cloud',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800',
    gradient: 'from-green-400 to-lime-500',
    prompt: 'An ultra-macro, photorealistic high-speed capture of vibrant, [POWDER COLOR: e.g., neon green pre-workout powder] exploding and freezing in mid-air against a pure, seamless black background. A blank, transparent acrylic measuring scoop is visible within the dynamic powder cloud. Captured using a Hasselblad H6D-100c and a Hasselblad HC 100mm f/2.2 macro lens. Dual Profoto Pro-10 strobes are used to freeze the intense action perfectly without any motion blur. The contrast is pushed to the maximum, emphasizing the intense energy and explosive power. Commercial sports nutrition visualization, hyper-detailed, dynamic composition, 8k.'
  },
  {
    id: 'sup-14',
    categoryId: 'supplements',
    title: 'Vitamin Pop-Art Studio',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800',
    gradient: 'from-yellow-300 to-orange-400',
    prompt: 'A bright, clinical, and pop-art inspired studio shot of [PILLS/GUMMIES: e.g., translucent, vibrant, jewel-toned vitamin gummies] artfully and meticulously arranged next to a blank, minimalist [YOUR PRODUCT HERE: e.g., white frosted glass supplement bottle]. The setup rests on a seamless, [BACKGROUND COLOR: e.g., pastel yellow] paper background. Shot with a Nikon D850 and a 105mm f/2.8 macro lens. The lighting is flawless and shadowless, utilizing massive overhead softboxes and bounce cards to eliminate harsh contrast and heavily enhance the juicy, vibrant texture of the elements. Clean, optimistic lifestyle advertising, 8k resolution, perfect color accuracy.'
  },
  {
    id: 'sup-15',
    categoryId: 'supplements',
    title: 'Dark Tactical',
    image: 'https://images.unsplash.com/photo-1618213837799-25d5552820d3?q=80&w=800',
    gradient: 'from-slate-900 to-black',
    prompt: 'A sleek, imposing product shot of a blank, [YOUR PRODUCT HERE: e.g., stealth-matte black tactical protein shaker bottle] resting proudly on a dark, highly reflective obsidian glass surface. The product is glistening with microscopic, freezing beads of cold sweat. Captured with a Sony A7R IV and a Sony FE 90mm f/2.8 Macro G OSS lens. The lighting is a masterclass in chiaroscuro, with a single, intense, razor-sharp white rim light cutting through the pitch-black studio, highlighting the aggressive, geometric angles and premium matte texture. Deep cinematic shadows, high-end elite advertising, 8k.'
  },
  {
    id: 'sup-16',
    categoryId: 'supplements',
    title: 'Absolute Freeze',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800',
    gradient: 'from-blue-300 to-cyan-500',
    prompt: 'An intensely refreshing, hyper-realistic close-up commercial shot of a [YOUR PRODUCT HERE: e.g., small, glossy black energy shot bottle] half-buried in a large mound of perfectly crushed, crystalline ice. The product label is completely blank for easy mockup placement. Shot on a Canon EOS R5 with an RF 100mm f/2.8L Macro IS USM lens. The studio lighting is cool and blue-toned, featuring hard, direct flashes to create brilliant, blinding specular highlights on the sharp ice shards and the glossy surface of the product, enhancing the freezing, awakening aesthetic. Crisp, sharp, 8k resolution, premium beverage photography.'
  },
  {
    id: 'sup-17',
    categoryId: 'supplements',
    title: 'Inner Glow',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800',
    gradient: 'from-red-500 to-rose-600',
    prompt: 'A luxurious, modern product visualization of a heavy, geometric crystal glass filled with a vibrant, glowing translucent [LIQUID COLOR: e.g., red BCAA amino acid drink], loaded with perfect, flawless square ice cubes. A blank, brushed metallic [YOUR PRODUCT HERE: e.g., supplement tin] sits elegantly out of focus in the background. Shot with a Leica SL2-S and a Leica Summilux-SL 50mm f/1.4 ASPH lens. The scene is aggressively backlit with a strong, warm studio light, causing the liquid to glow intensely from within and revealing crisp carbonation bubbles. Dramatic, high-end sports nutrition lifestyle, 8k.'
  },
  {
    id: 'sup-18',
    categoryId: 'supplements',
    title: 'Lab Purity',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800',
    gradient: 'from-indigo-100 to-white',
    prompt: 'A clinical, ultra-high-tech macro shot of transparent, [CAPSULE COLOR/TYPE: e.g., golden liquid-filled supplement capsules] resting scattered on a perfectly clean, flawless mirrored surface. A blank, pristine white [YOUR PRODUCT HERE: e.g., pharmaceutical-grade pill bottle] stands in the soft-focus background. Captured using a Phase One XF IQ4 150MP with a Schneider Kreuznach 120mm LS f/4.0 Macro lens to capture the microscopic reflections inside each capsule. The lighting is an immaculate, shadowless, brilliant white studio setup, emphasizing scientific purity, laboratory research, and pharmaceutical-grade quality. 8k, ultra-realistic.'
  },
  {
    id: 'sup-19',
    categoryId: 'supplements',
    title: 'Natural Rustic',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=800',
    gradient: 'from-amber-700 to-yellow-800',
    prompt: 'A premium, organic product visualization of a blank, earthy [YOUR PRODUCT HERE: e.g., kraft paper stand-up pouch designed for vegan plant protein], resting elegantly on a thick slab of raw, natural walnut wood. The product is surrounded by high-quality raw ingredients meticulously styled: [RAW INGREDIENTS: e.g., whole vanilla beans, chunks of raw cacao, and scattered organic oats]. Shot with a Canon EOS 5D Mark IV using an 85mm f/1.2L II USM lens. The lighting simulates soft, warm, golden natural window light, enhanced with a gold reflector to bring out the rich, wholesome textures. Cozy, eco-friendly fitness nutrition, 8k.'
  },
  {
    id: 'sup-20',
    categoryId: 'supplements',
    title: 'Track Speed',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800',
    gradient: 'from-red-600 to-orange-500',
    prompt: 'A dynamic, high-speed lifestyle commercial shot of a sleek, blank, [YOUR PRODUCT HERE: e.g., metallic foil sports energy gel packet] resting on the rough, textured red rubber surface of an athletic running track. In the background, an intense motion blur of [BACKGROUND ACTION: e.g., an athlete\'s bright neon running shoe] passes by instantly. Captured with a Fujifilm GFX 100S and a GF 45-100mm f/4 R LM OIS WR lens. The lighting is harsh, high-contrast midday sunlight, creating sharp, aggressive shadows that emphasize speed, endurance, and elite athletic performance. Cinematic, gritty, raw energy, 8k resolution.'
  },

  // ==========================================
  // LOTE 3: BRANDING MOCKUPS
  // ==========================================
  {
    id: 'mock-21',
    categoryId: 'branding-mockups',
    title: 'Premium Shipping Box',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800',
    gradient: 'from-purple-500 to-fuchsia-400',
    prompt: 'A sleek, photorealistic commercial mockup shot of a [YOUR PRODUCT HERE: e.g., minimalist, matte black premium cardboard shipping box] resting closed on a pristine, seamless [BACKGROUND COLOR: e.g., soft beige] surface. The box features perfectly sharp, geometric edges and a completely blank top surface, ideal for modern tech-inspired logo placement. Captured with a Hasselblad H6D-100c and a 100mm f/2.2 lens. The lighting is an elegant, soft, diffused studio setup with a large overhead octabank, creating a subtle, luxurious gradient shadow across the matte surface that emphasizes the high-quality cardboard texture. 8k resolution, minimalist corporate aesthetic, ultra-clean.'
  },
  {
    id: 'mock-22',
    categoryId: 'branding-mockups',
    title: 'Macro Business Cards',
    image: 'https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?q=80&w=800',
    gradient: 'from-purple-600 to-indigo-500',
    prompt: 'An ultra-macro, high-end editorial visualization of a stack of blank, [MATERIAL/COLOR: e.g., thick, textured cotton white business cards] casually scattered on a raw, distressed [SURFACE TEXTURE: e.g., dark slate stone] surface. Shot with a Sony A7R IV and a Sony FE 90mm f/2.8 Macro G OSS lens to capture the microscopic fibers of the premium paper. The lighting employs a strong, directional, hard light source to cast distinct, sharp shadows, creating a dramatic, high-contrast look that highlights the edge-painting and heavy weight of the cards. Modern, brutalist graphic design presentation, cinematic, 8k.'
  },
  {
    id: 'mock-23',
    categoryId: 'branding-mockups',
    title: 'Designer Shopping Bag',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800',
    gradient: 'from-fuchsia-600 to-pink-500',
    prompt: 'A sophisticated, luxurious studio mockup of a standing, completely blank [YOUR PRODUCT HERE: e.g., heavy-weight matte white paper shopping bag with thick cotton rope handles]. The bag sits gracefully on a highly polished, reflective [SURFACE: e.g., black marble] floor. Captured using a Phase One XF IQ4 150MP with a Schneider Kreuznach 80mm LS f/2.8 lens. The lighting features dual Profoto strip boxes positioned at 45-degree rear angles to create striking, razor-sharp edge highlights along the folds of the bag, separating it perfectly from the deep, moody studio background. High fashion retail branding, 8k, flawless crisp details.'
  },
  {
    id: 'mock-24',
    categoryId: 'branding-mockups',
    title: 'Digital Screen',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800',
    gradient: 'from-violet-600 to-purple-500',
    prompt: 'A hyper-realistic, tech-focused lifestyle shot of a sleek, bezel-less [DEVICE: e.g., modern smartphone or tablet] lying flat on a minimalist [SURFACE: e.g., matte dark grey aluminum] desk. The screen is a perfectly blank, vibrant [SCREEN COLOR: e.g., solid glowing neon green] display, ready for digital app or branding integration. Captured with a RED Monstro 8K VV and a Zeiss CP.3 50mm T2.1 lens. The scene is dimly lit to allow the glow from the blank screen to softly illuminate the surrounding metallic desk surface and subtle background elements like a blurred, minimalist desk lamp. Cyberpunk undertones, sleek tech aesthetic, 8k.'
  },
  {
    id: 'mock-25',
    categoryId: 'branding-mockups',
    title: 'Minimalist Coffee Cup',
    image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800',
    gradient: 'from-orange-400 to-amber-500',
    prompt: 'A beautiful, modern lifestyle mockup featuring a blank, [YOUR PRODUCT HERE: e.g., matte white paper coffee cup with a black lid], held gently by a hand with an elegant aesthetic. The background is a beautifully blurred, warm, and inviting [ENVIRONMENT: e.g., modern indie coffee shop with wooden textures and warm Edison bulbs]. Shot with a Canon EOS R5 and an RF 50mm f/1.2L USM lens, shot wide open at f/1.2 to create an incredibly creamy, dreamy bokeh that completely isolates the crisp, sharp cup in the foreground. Natural, cinematic window lighting, artisan branding mockup, 8k.'
  },
  {
    id: 'mock-26',
    categoryId: 'branding-mockups',
    title: 'Corporate Stationery Flat Lay',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800',
    gradient: 'from-teal-500 to-emerald-400',
    prompt: 'An impeccably organized, geometric overhead flat-lay photograph of a premium corporate stationery set. The composition includes a blank [ITEM 1: e.g., A4 letterhead on textured cream paper], a blank [ITEM 2: e.g., matching business envelope], and a sleek metallic pen, all arranged with mathematical precision on a smooth, solid [BACKGROUND COLOR: e.g., muted sage green] background. Captured using a Fujifilm GFX 100S with a GF 63mm f/2.8 R WR lens, mounted perfectly parallel to the surface. The lighting is absolutely even and shadowless, utilizing massive diffusion panels to ensure pristine color accuracy and a clean, modern corporate vibe. 8k, ultra-crisp.'
  },
  {
    id: 'mock-27',
    categoryId: 'branding-mockups',
    title: 'Cotton Tote Bag',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800',
    gradient: 'from-amber-200 to-yellow-400',
    prompt: 'A natural, eco-friendly product visualization of a blank, unbleached [YOUR PRODUCT HERE: e.g., raw cotton canvas tote bag] hanging organically from a minimalist wooden peg against a clean, white plaster wall. The lighting simulates beautiful, soft, directional morning window light, casting a gentle, elongated shadow to the right. Captured with a Leica SL2-S and a 50mm f/1.4 lens to capture the highly tactile, woven texture of the natural canvas fabric and the organic drape of the material. Ideal for sustainable fashion brands, minimalist, airy, bright, 8k resolution.'
  },
  {
    id: 'mock-28',
    categoryId: 'branding-mockups',
    title: 'Open Mailer Box',
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=800',
    gradient: 'from-orange-300 to-amber-500',
    prompt: 'An engaging, premium unboxing mockup shot from a 45-degree overhead angle. A sturdy, blank [YOUR PRODUCT HERE: e.g., kraft corrugated mailer box] sits open on a clean desk, revealing perfectly folded, blank [INNER MATERIAL: e.g., crisp white tissue paper] inside, sealed with a blank circular sticker. Captured with a Nikon D850 and a 105mm macro lens to show the contrast between the rough corrugated exterior and the delicate, semi-translucent tissue paper. Lit with a large, bright softbox to simulate premium e-commerce studio lighting, creating a welcoming and high-value brand presentation. 8k, hyper-detailed.'
  },
  {
    id: 'mock-29',
    categoryId: 'branding-mockups',
    title: 'Glass Beverage Bottle',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800',
    gradient: 'from-rose-400 to-orange-400',
    prompt: 'A striking, photorealistic studio mockup of a blank, clear [YOUR PRODUCT HERE: e.g., glass kombucha or cold-pressed juice bottle] filled with a vibrant, translucent [LIQUID COLOR: e.g., sunset orange liquid]. The bottle rests on a sleek, white acrylic podium. Shot with a Phase One XF IQ4 150MP. The lighting is an advanced dual-backlight setup, heavily backlighting the liquid to make it glow from within, while precise white bounce cards create long, elegant vertical reflections down the sides of the blank glass, defining its cylindrical shape perfectly. Crisp, refreshing, modern beverage branding, 8k.'
  },
  {
    id: 'mock-30',
    categoryId: 'branding-mockups',
    title: 'Clothing Tag',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800',
    gradient: 'from-slate-700 to-gray-800',
    prompt: 'An intimate, ultra-macro mockup of a blank, [MATERIAL/COLOR: e.g., thick matte black cardboard hang tag] attached by a sleek safety pin to a piece of beautifully textured, folded [FABRIC TYPE: e.g., heavy beige knitted wool]. The tag is perfectly in focus, offering a sharp, clean space for logo mockups. Captured with a RED Monstro 8K VV and a Zeiss CP.3 50mm T2.1 macro lens. The lighting is warm and highly directional, raking across the fabric to emphasize the deep shadows of the knit and the rigid, premium feel of the tag. High fashion apparel branding, tactile, 8k.'
  },

  // ==========================================
  // LOTE 4: AUTOMOTIVE
  // ==========================================
  {
    id: 'auto-31',
    categoryId: 'automotive',
    title: 'LED Taillight',
    image: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=800&auto=format&fit=crop',
    gradient: 'from-red-600 to-orange-500',
    prompt: 'A dramatic, ultra-realistic studio shot of a massive, [YOUR PRODUCT HERE: e.g., high-performance modern smoked LED taillight assembly for a rugged pickup truck]. The glowing red light strips cut through the pitch-black studio environment. Shot with a Phase One XF IQ4 150MP and a 120mm macro lens. Lighting consists of a single large overhead softbox creating a smooth, continuous reflection along the glossy black plastic housing, and a sharp rim light to define the metallic edges. High-end automotive parts catalog aesthetic, cinematic chiaroscuro, 8k resolution, photorealistic.'
  },
  {
    id: 'auto-32',
    categoryId: 'automotive',
    title: 'Alloy Wheel',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop',
    gradient: 'from-red-700 to-rose-500',
    prompt: 'A sleek, aggressive commercial product shot of a massive, [YOUR PRODUCT HERE: e.g., high-performance forged aluminum alloy wheel rim resting elegantly on a polished concrete floor]. Captured with a Hasselblad H6D-100c and a 100mm f/2.2 lens. The lighting is an advanced multi-strobe setup using massive light modifiers to create perfect, sweeping highlights across the geometric metallic spokes, completely eliminating unwanted room reflections. Dark, moody, high-performance tuning aesthetic, razor-sharp focus, 8k.'
  },
  {
    id: 'auto-33',
    categoryId: 'automotive',
    title: 'Steering Wheel Stitching',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop',
    gradient: 'from-orange-600 to-amber-500',
    prompt: 'An intimate, ultra-macro interior shot of a massive, [YOUR PRODUCT HERE: e.g., premium Alcantara steering wheel with aggressive red stitching]. Shot with a RED Monstro 8K VV and a Zeiss CP.3 50mm T2.1 macro lens to capture every microscopic pore of the material and the tension of the woven thread. The lighting is warm and highly directional, simulating late afternoon sun hitting the driver\'s seat, casting deep micro-shadows that emphasize the luxurious, tactile texture of the sports car interior. 8k, photorealistic depth.'
  },
  {
    id: 'auto-34',
    categoryId: 'automotive',
    title: 'Off-Road Shock Absorber',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
    gradient: 'from-yellow-600 to-yellow-400',
    prompt: 'A rugged, heavy-duty visualization of a massive, [YOUR PRODUCT HERE: e.g., high-performance off-road shock absorber coil spring finished in signature textured black paint, resting on raw dark crushed gravel]. Captured with a Sony A7R IV and a 90mm Macro G OSS lens. The lighting is harsh and high-contrast, utilizing dual rim lights to make the metallic shaft gleam and highlight the heavy industrial build quality against the gritty, dark background. 4x4 off-road adventure aesthetic, hyper-detailed, 8k.'
  },
  {
    id: 'auto-35',
    categoryId: 'automotive',
    title: 'Brake Caliper',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    gradient: 'from-red-500 to-pink-500',
    prompt: 'A detailed macro-photographic close-up of a massive, [YOUR PRODUCT HERE: e.g., bright red Brembo six-piston high-performance brake caliper with drilled carbon-ceramic rotor]. Captured with a Nikon D850 and a 105mm f/2.8 lens. The lighting is exceptionally dramatic, using cool, blue-toned LED panels to create a tech-inspired background, while a sharp, neutral white spotlight perfectly illuminates the vibrant paint and metallic texture of the caliper. High-speed racing aesthetic, pristine studio isolation, 8k resolution, photorealistic.'
  },
  {
    id: 'auto-36',
    categoryId: 'automotive',
    title: 'Carbon Fiber Part',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
    gradient: 'from-slate-700 to-gray-500',
    prompt: 'A mesmerizing, tech-forward visualization of a massive, [YOUR PRODUCT HERE: e.g., sleek, complex geometric carbon fiber automotive component, designed for a modern hypercar side mirror cover]. Captured on a Leica SL2-S with a 50mm f/1.4 ASPH lens. The lighting setup uses precisely positioned strip boxes to cast long, elegant highlights that catch the intricate, interwoven pattern of the glossy carbon fiber weave, showcasing its lightweight and futuristic properties. Hyper-realistic, 8k, photorealistic.'
  },
  {
    id: 'auto-37',
    categoryId: 'automotive',
    title: 'Titanium Exhaust',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop',
    gradient: 'from-blue-600 to-purple-500',
    prompt: 'A stunning, aggressive close-up of a massive, [YOUR PRODUCT HERE: e.g., dual titanium exhaust pipe tip showcasing the beautiful, intricate, dynamic blue and purple burnt metal gradient]. Captured with a Canon EOS R5 and an RF 100mm f/2.8L Macro lens. The lighting is intensely dramatic and directional, using a hard snoot light to make the metallic colors pop violently against the dark, moody background. Tuning culture raw power aesthetic, mathematical precision detail, 8k.'
  },
  {
    id: 'auto-38',
    categoryId: 'automotive',
    title: 'Projector Headlight',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop',
    gradient: 'from-blue-400 to-cyan-300',
    prompt: 'A dramatic, front-facing macro shot of a massive, [YOUR PRODUCT HERE: e.g., multi-element modern Matrix LED projector headlight cluster with an intricate daytime running light signature]. Shot with a Fujifilm GFX 100S and a 120mm Macro lens. The lighting is exclusively generated by the headlight itself, surrounded by complete pitch-black darkness, creating an intimidating, predatory aesthetic. The extreme resolution captures the pristine clarity of the glass lens and internal reflectors. 8k, photorealistic.'
  },
  {
    id: 'auto-39',
    categoryId: 'automotive',
    title: 'Custom Seatbelt',
    image: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=800&auto=format&fit=crop',
    gradient: 'from-emerald-500 to-teal-400',
    prompt: 'A clean, minimalist studio shot of a massive, [YOUR PRODUCT HERE: e.g., vibrant neon green racing seatbelt harness with intricate tactical metallic buckles, draped over a matte black metallic roll cage tube]. Captured with a Phase One XF IQ4 150MP. The lighting is soft and perfectly even, utilizing massive overhead diffusion to ensure the vivid color of the nylon webbing is reproduced with absolute precision, while highlighting the brushed texture of the metal buckle. Motorsport aesthetic, crisp details, 8k.'
  },
  {
    id: 'auto-40',
    categoryId: 'automotive',
    title: 'Front Grille',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-gray-800 to-black',
    prompt: 'An imposing, low-angle product visualization of a massive, [YOUR PRODUCT HERE: e.g., gloss black honeycomb front grille for a sports car, catching the light from various angles]. Shot with a RED Monstro 8K VV and a 35mm wide-angle lens. The lighting utilizes a massive overhead light bank to illuminate the complex geometric depth of the honeycomb mesh, casting deep, repeating shadows that emphasize airflow and aerodynamics. Pristine dark studio setting, hyper-realistic, 8k.'
  },
  // ==========================================
  // LOTE 5: TECH GADGETS
  // ==========================================
  {
    id: 'tech-41',
    categoryId: 'tech-gadgets',
    title: 'Titanium Smartwatch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800',
    gradient: 'from-slate-600 to-slate-400',
    prompt: 'A hyper-detailed, sleek commercial macro shot of a [YOUR PRODUCT HERE: e.g., premium matte titanium smartwatch with a blank glowing screen]. The device rests on a sleek, dark grey brushed aluminum surface. Captured using a Phase One XF IQ4 150MP and a 120mm macro lens. The lighting utilizes dual Profoto strip boxes positioned closely on either side to create razor-sharp, elegant edge highlights along the metallic chassis and the curved glass of the display. Sophisticated, tech-forward aesthetic, hyper-realistic, 8k resolution.'
  },
  {
    id: 'tech-42',
    categoryId: 'tech-gadgets',
    title: 'Zero-G Wireless Earbuds',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800',
    gradient: 'from-gray-300 to-slate-200',
    prompt: 'A dynamic, anti-gravity studio visualization of [YOUR PRODUCT HERE: e.g., pristine white true wireless earbuds and their open charging case] suspended effortlessly in mid-air. The background is a seamless, soft [BACKGROUND COLOR: e.g., pastel lavender]. Captured with a Hasselblad H6D-100c using a fast shutter speed to freeze the floating elements perfectly. The lighting is an immaculate, shadowless, brilliant white studio setup with massive overhead softboxes to emphasize the smooth, glossy, pebble-like texture of the product. Clean, airy, modern audio tech, 8k.'
  },
  {
    id: 'tech-43',
    categoryId: 'tech-gadgets',
    title: 'Dark Gamer Setup',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800',
    gradient: 'from-purple-600 to-blue-500',
    prompt: 'A dark, moody, tech-focused product shot of a [YOUR PRODUCT HERE: e.g., high-performance ergonomic gaming mouse] resting on a textured, extended black mousepad. The product features subtle, glowing [LIGHT COLOR: e.g., neon cyan RGB lighting accents]. Shot with a Sony A7R IV and a 90mm Macro G OSS lens. The lighting is intensely dramatic, using a single overhead snoot to carve out the angular, aggressive shape of the hardware, while the internal RGB lights cast a soft, vibrant glow on the desk surface. Cyberpunk aesthetic, esports equipment, 8k.'
  },
  {
    id: 'tech-44',
    categoryId: 'tech-gadgets',
    title: 'Smartphone Camera Module',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800',
    gradient: 'from-slate-800 to-gray-600',
    prompt: 'An ultra-modern, geometric product photograph focusing on the back of a [YOUR PRODUCT HERE: e.g., flagship smartphone with a massive, multi-lens circular camera module]. The device is propped up diagonally against a solid concrete block. Captured with a Leica SL2-S and a 50mm f/1.4 ASPH lens. The lighting uses a hard, directional light source to cast distinct, angular shadows across the minimalist backdrop, while a white bounce card creates beautiful, sweeping reflections across the polished glass back and the camera lenses. Brutalist tech aesthetic, 8k.'
  },
  {
    id: 'tech-45',
    categoryId: 'tech-gadgets',
    title: 'Premium Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800',
    gradient: 'from-amber-700 to-orange-600',
    prompt: 'A luxurious, tactile studio mockup of [YOUR PRODUCT HERE: e.g., over-ear noise-canceling headphones featuring soft vegan leather and brushed aluminum accents]. The headphones rest on a sleek, minimalist wooden stand. Shot with a Fujifilm GFX 100S and a GF 63mm f/2.8 R WR lens. The lighting simulates warm, sophisticated studio light, heavily utilizing a gold reflector to bring out the rich, premium textures of the leather earcups and the cold, precise finish of the metal headband. Audiophile branding, high-end lifestyle tech, 8k.'
  },
  {
    id: 'tech-46',
    categoryId: 'tech-gadgets',
    title: 'Hovering Drone',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800',
    gradient: 'from-cyan-700 to-blue-600',
    prompt: 'A futuristic, sleek commercial visualization of a [YOUR PRODUCT HERE: e.g., compact foldable camera drone] hovering perfectly still in a pure, infinite black void. The drone\'s small LED indicator lights glow vibrantly. Captured on a RED Monstro 8K VV with a Zeiss CP.3 50mm T2.1 lens, utilizing a fast shutter to freeze the spinning propellers. The lighting setup uses precisely positioned rim lights to outline the aerodynamic shape and carbon-fiber elements of the device against the absolute darkness. High-tech exploration, pristine isolation, 8k.'
  },
  {
    id: 'tech-47',
    categoryId: 'tech-gadgets',
    title: 'Cyberpunk VR',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800',
    gradient: 'from-fuchsia-600 to-purple-600',
    prompt: 'A cyberpunk-inspired commercial shot of a [YOUR PRODUCT HERE: e.g., sleek white virtual reality headset] resting on a glossy black acrylic table. The scene is illuminated entirely by vibrant, off-camera neon lights casting striking [NEON COLORS: e.g., vibrant pink and electric blue] reflections across the smooth plastic surface and the dark lenses of the headset. Captured with a Canon EOS R5 and an RF 50mm f/1.2L USM lens for a cinematic, slightly shallow depth of field. Futuristic, metaverse aesthetic, neon-noir, 8k resolution.'
  },
  {
    id: 'tech-48',
    categoryId: 'tech-gadgets',
    title: 'Living Room Smart Speaker',
    image: 'https://images.unsplash.com/photo-1543661858-a579624b553c?q=80&w=800',
    gradient: 'from-stone-500 to-stone-300',
    prompt: 'A warm, inviting lifestyle tech shot of a [YOUR PRODUCT HERE: e.g., minimalist, fabric-wrapped smart home speaker] placed elegantly on a mid-century modern wooden credenza. Next to it sits a small, thriving indoor potted plant. Shot with a Nikon D850 and an 85mm f/1.4 lens. The lighting is beautifully soft and natural, mimicking morning window light streaming into a cozy living room, highlighting the tactile woven texture of the speaker\'s acoustic fabric. Smart home living, organic tech integration, photorealistic, 8k.'
  },
  {
    id: 'tech-49',
    categoryId: 'tech-gadgets',
    title: 'Engineering Macro',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800',
    gradient: 'from-yellow-500 to-amber-400',
    prompt: 'An incredibly detailed, ultra-macro view of [YOUR PRODUCT HERE: e.g., the exposed golden circuitry and translucent plastic housing of a custom mechanical keyboard switch]. Captured with a Phase One XF IQ4 150MP and a specialized 120mm macro lens to reveal the absolute microscopic precision of the engineering. The lighting is clinical and bright, utilizing a tethered ring light to completely eliminate shadows and focus entirely on the raw materials, metallic pins, and complex internal structure. Hardware enthusiast, industrial design, 8k.'
  },
  {
    id: 'tech-50',
    categoryId: 'tech-gadgets',
    title: 'Productivity Flat Lay',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800',
    gradient: 'from-blue-200 to-cyan-100',
    prompt: 'A clean, productive workspace flat-lay photograph featuring a closed, ultra-thin [YOUR PRODUCT HERE: e.g., matte silver aluminum laptop] centered on a pristine white desk. Beside it are a minimalist wireless mouse and a blank, modern notebook. Captured perfectly top-down using a Hasselblad H6D-100c. The lighting is perfectly even, utilizing a massive overhead diffusion silk to create a shadowless, brilliantly lit environment that emphasizes productivity, modern remote work, and premium tech ecosystems. 8k, crisp geometric composition.'
  },

  // ==========================================
  // LOTE 6: JEWELRY
  // ==========================================
  {
    id: 'jewel-51',
    categoryId: 'jewelry',
    title: 'Diamond Ring on Velvet',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800',
    gradient: 'from-blue-900 to-indigo-800',
    prompt: 'A breathtaking, ultra-macro studio shot of a [YOUR PRODUCT HERE: e.g., flawless solitaire diamond engagement ring with a gleaming platinum band] resting delicately on folds of rich, dark [FABRIC COLOR: e.g., midnight blue] velvet. Captured with a Phase One XF IQ4 150MP and a 120mm macro lens to reveal the precise, microscopic cuts and internal fire of the gemstone. The lighting is meticulously controlled using a specialized ring flash and multiple black bounce cards to create deep contrast within the diamond, maximizing its sparkle against the moody, light-absorbing fabric. Elite high-jewelry advertising, 8k resolution, photorealistic.'
  },
  {
    id: 'jewel-52',
    categoryId: 'jewelry',
    title: 'Luxury Watch on Marble',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800',
    gradient: 'from-stone-800 to-stone-600',
    prompt: 'A sophisticated, imposing commercial photograph of a [YOUR PRODUCT HERE: e.g., heavy 18k rose gold automatic chronograph watch with a black leather strap] lying on a highly polished slab of dark, veined Nero Marquina marble. Shot with a Hasselblad H6D-100c and a 100mm f/2.2 lens. The lighting utilizes a large overhead softbox to cast a continuous, elegant reflection across the curved sapphire crystal glass, while a sharp rim light emphasizes the intricate, machined details of the watch bezel and the metallic hands. High-end horology, executive lifestyle, razor-sharp focus, 8k.'
  },
  {
    id: 'jewel-53',
    categoryId: 'jewelry',
    title: 'Pearls on White Silk',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800',
    gradient: 'from-rose-100 to-teal-50',
    prompt: 'A soft, ethereal, and beautifully styled product visualization of a [YOUR PRODUCT HERE: e.g., delicate strand of luminous South Sea pearls featuring a minimalist diamond clasp]. The jewelry cascades gracefully across a landscape of rippling, pure white silk fabric. Captured with a Canon EOS R5 and an RF 100mm f/2.8L Macro IS USM. The lighting is incredibly soft and diffused, simulating gentle morning window light through sheer curtains. This eliminates harsh shadows and enhances the creamy, iridescent luster of the pearls. High-fashion bridal jewelry aesthetic, dreamy, 8k.'
  },
  {
    id: 'jewel-54',
    categoryId: 'jewelry',
    title: 'Floating Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800',
    gradient: 'from-orange-500 to-amber-400',
    prompt: 'A striking, modern commercial visualization of [YOUR PRODUCT HERE: e.g., geometric emerald and yellow gold drop earrings] suspended perfectly in mid-air against a seamless, matte [BACKGROUND COLOR: e.g., warm terracotta] background. Captured on a RED Monstro 8K VV with a Zeiss CP.3 50mm T2.1 macro lens using an incredibly fast shutter speed. The lighting uses dual Profoto strip boxes to create striking, sharp highlights along the gold edges, emphasizing the architectural shape of the jewelry, while separating it flawlessly from the solid background. Contemporary avant-garde jewelry, hyper-realistic, 8k.'
  },
  {
    id: 'jewel-55',
    categoryId: 'jewelry',
    title: 'Brutalist Bracelet',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800',
    gradient: 'from-zinc-600 to-zinc-400',
    prompt: 'A minimalist, brutalist-inspired product shot of a sleek [YOUR PRODUCT HERE: e.g., heavy matte silver cuff bracelet with a singular embedded black onyx stone]. The product is displayed on a block of raw, porous grey concrete. Shot with a Sony A7R IV and a Sony FE 90mm f/2.8 Macro G OSS lens. The lighting is a hard, highly directional spotlight angled at 45 degrees, casting a sharp, dramatic shadow that heavily contrasts the refined, smooth surface of the precious metal against the aggressive, industrial texture of the concrete. Modern luxury, architectural, 8k resolution.'
  },
  {
    id: 'jewel-56',
    categoryId: 'jewelry',
    title: 'Vintage Pocket Watch',
    image: 'https://images.unsplash.com/photo-1501163268664-3fdf329d019f?q=80&w=800',
    gradient: 'from-amber-800 to-yellow-600',
    prompt: 'An intimate, richly detailed macro photograph of an [YOUR PRODUCT HERE: e.g., intricately engraved antique brass pocket watch with exposed internal gears] resting on a piece of beautifully aged, distressed leather. Captured with a Fujifilm GFX 100S and a GF 120mm f/4 Macro lens. The lighting simulates the warm, golden glow of a late afternoon sunbeam or candlelight, using a snoot modifier to create a tight pool of light directly on the watch face, leaving the edges of the frame in warm, moody shadows. Heritage craftsmanship, steampunk undertones, cinematic, 8k.'
  },
  {
    id: 'jewel-57',
    categoryId: 'jewelry',
    title: 'Extreme Gem Facet',
    image: 'https://images.unsplash.com/photo-1601119479271-21ca92049c81?q=80&w=800',
    gradient: 'from-blue-500 to-cyan-400',
    prompt: 'An extreme, ultra-macro conceptual shot focusing entirely on the highly polished surface and sharp facets of a [YOUR PRODUCT HERE: e.g., massive princess-cut sapphire gemstone set in white gold]. The perspective is so close it borders on abstract art. Shot with a Nikon D850 and a specialized 105mm macro lens coupled with extension tubes. The lighting is an immaculate, shadowless studio setup utilizing a tethered macro ring light to illuminate the complex, microscopic geometry and the intense inner color of the gemstone. Scientific precision, pure luxury, flawlessly sharp, 8k.'
  },
  {
    id: 'jewel-58',
    categoryId: 'jewelry',
    title: 'Dive Watch',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800',
    gradient: 'from-cyan-600 to-blue-500',
    prompt: 'A dynamic, rugged lifestyle product shot of a [YOUR PRODUCT HERE: e.g., heavy-duty stainless steel dive watch with a luminescent blue dial] fully submerged in crystal-clear water. Tiny, perfect oxygen bubbles cling to the metal casing and the sapphire glass. Captured with a Phase One XF IQ4 150MP and a waterproof macro housing. The lighting is intense and cool-toned, mimicking strong sunlight piercing through the water\'s surface, creating caustic light patterns across the watch face and highlighting its extreme durability and aquatic performance. Deep sea exploration aesthetic, 8k.'
  },
  {
    id: 'jewel-59',
    categoryId: 'jewelry',
    title: 'Pendant in Sunbeam',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800',
    gradient: 'from-orange-300 to-rose-400',
    prompt: 'A serene, naturally beautiful lifestyle visualization of a [YOUR PRODUCT HERE: e.g., delicate teardrop ruby pendant on a fine rose gold chain] resting on a smooth, sun-warmed piece of light sandstone. Captured with a Leica SL2-S and a 50mm f/1.4 ASPH lens. The scene is illuminated by a single, distinct ray of harsh natural sunlight cutting through the shade, striking the gemstone perfectly to make it glow vibrantly from within, while the rock falls into soft, natural shadow. Organic luxury, earthy, highly detailed, 8k resolution.'
  },
  {
    id: 'jewel-60',
    categoryId: 'jewelry',
    title: 'High-Fashion Jewelry in the Dark',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800',
    gradient: 'from-black to-slate-900',
    prompt: 'A dark, highly dramatic avant-garde commercial shot of a [YOUR PRODUCT HERE: e.g., bold, sculptural cocktail ring featuring a massive black opal] resting on a highly reflective black obsidian mirror. Captured with a Hasselblad H6D-100c. The lighting is entirely cinematic and moody, utilizing a single, razor-thin slit of bright white light that rakes across the jewelry, illuminating only the top edges of the metal and the fiery colors of the opal, leaving everything else submerged in pure, luxurious blackness. Intense chiaroscuro, high-fashion editorial, masterpiece, 8k.'
  },

  // ==========================================
  // LOTE 7: FASHION & APPAREL
  // ==========================================
  {
    id: 'fash-61',
    categoryId: 'fashion',
    title: 'Floating Sneaker',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800',
    gradient: 'from-pink-500 to-rose-400',
    prompt: 'A dynamic, high-end commercial studio shot of a [YOUR PRODUCT HERE: e.g., pristine white chunky leather streetwear sneaker] suspended in mid-air against a seamless, solid [BACKGROUND COLOR: e.g., pale mint green] backdrop. Captured with a Phase One XF IQ4 150MP and a Schneider Kreuznach 80mm LS f/2.8 lens using an incredibly fast shutter speed to freeze the floating laces and dynamic angle perfectly. The lighting utilizes massive overhead softboxes and bounce cards to create an absolute shadowless, pure environment that highlights the premium leather texture, intricate stitching, and bold silhouette of the shoe. Hypebeast aesthetic, crisp, 8k resolution.'
  },
  {
    id: 'fash-62',
    categoryId: 'fashion',
    title: 'Streetwear Flat Lay',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800',
    gradient: 'from-stone-700 to-stone-500',
    prompt: 'An impeccably styled, geometric overhead flat-lay photograph of a premium [YOUR PRODUCT HERE: e.g., heavy-weight oversized vintage black cotton hoodie] resting perfectly flat on a clean, raw [SURFACE: e.g., brushed concrete floor]. Shot with a Hasselblad H6D-100c and a 100mm f/2.2 lens mounted perfectly parallel to the ground. The lighting uses a single, slightly directional softbox to cast subtle, elegant micro-shadows across the folds of the fabric, heavily emphasizing the thick, 400gsm cotton texture and the high-quality ribbed cuffs. Modern urban apparel branding, minimalist, hyper-detailed, 8k.'
  },
  {
    id: 'fash-63',
    categoryId: 'fashion',
    title: 'Haute Couture on Mannequin',
    image: 'https://images.unsplash.com/photo-1566206091558-f9b908b9e69d?q=80&w=800',
    gradient: 'from-red-800 to-rose-700',
    prompt: 'A breathtaking, high-fashion editorial visualization of a [YOUR PRODUCT HERE: e.g., flowing crimson red silk evening dress on an invisible mannequin]. The garment stands alone in a dark, moody studio environment. Captured with a Leica SL2-S and a 50mm f/1.4 ASPH lens. The lighting features a dramatic, cinematic setup: a strong rim light from the back to illuminate the translucent quality of the silk, and a precise snoot light from the front to catch the delicate folds, draping, and luxurious sheen of the fabric. Vogue magazine aesthetic, avant-garde, flawless draping, 8k.'
  },
  {
    id: 'fash-64',
    categoryId: 'fashion',
    title: 'Denim Macro',
    image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=800',
    gradient: 'from-blue-800 to-indigo-700',
    prompt: 'An intimate, ultra-macro lifestyle photograph focusing entirely on the intricate texture of a [YOUR PRODUCT HERE: e.g., rugged selvedge denim jacket with heavy brass rivets and golden contrast stitching]. Captured with a Sony A7R IV and a Sony FE 90mm f/2.8 Macro G OSS lens to reveal the diagonal twill weave of the thick indigo denim fabric. The lighting is warm and highly directional, raking across the textile to create deep shadows between the woven threads and bright, specular highlights on the metallic hardware. Authentic heritage clothing, rugged, highly tactile, 8k resolution.'
  },
  {
    id: 'fash-65',
    categoryId: 'fashion',
    title: 'Performance Running Shoe',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=800',
    gradient: 'from-orange-500 to-amber-500',
    prompt: 'A gritty, high-octane commercial lifestyle shot of a [YOUR PRODUCT HERE: e.g., neon orange trail running shoe] kicking up a cloud of fine, dry dust on a rugged [ENVIRONMENT: e.g., desert trail]. Captured with a RED Monstro 8K VV and a Zeiss CP.3 50mm T2.1 lens. The scene is illuminated by harsh, high-contrast late afternoon sunlight. An ultra-fast shutter speed freezes the explosive motion of the dirt and rocks flying from the deeply treaded rubber sole, emphasizing extreme durability, speed, and athletic performance. Cinematic action sports photography, raw energy, 8k.'
  },
  {
    id: 'fash-66',
    categoryId: 'fashion',
    title: 'Leather Accessory',
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800',
    gradient: 'from-slate-800 to-gray-700',
    prompt: 'A luxurious, sophisticated product mockup of a [YOUR PRODUCT HERE: e.g., structured matte black leather crossbody bag with minimalist silver hardware] resting on a highly polished block of [SURFACE: e.g., white Carrara marble]. Shot with a Canon EOS R5 and an RF 85mm f/1.2L USM lens. The lighting is incredibly soft and diffused, simulating high-end boutique window lighting. Precise white bounce panels are used to create long, elegant reflections along the smooth, premium leather surface and the metallic clasps, ensuring accurate color rendering and a feeling of absolute exclusivity. High fashion accessories, 8k.'
  },
  {
    id: 'fash-67',
    categoryId: 'fashion',
    title: 'Neon Techwear',
    image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=800',
    gradient: 'from-fuchsia-600 to-cyan-500',
    prompt: 'A moody, cyberpunk-inspired commercial shot of a [YOUR PRODUCT HERE: e.g., technical waterproof windbreaker jacket with reflective accents] hanging organically on a sleek metallic rack. The scene is illuminated entirely by off-camera, vibrant [NEON COLORS: e.g., magenta and cyan] neon street signs. Captured with a Nikon D850 and a 50mm f/1.4 lens. The glowing lights cast sharp, striking reflections across the glossy, water-resistant synthetic fabric and the futuristic zippers, while the rest of the garment falls into deep, cinematic shadows. Techwear apparel, futuristic urban aesthetic, rain-slicked atmosphere, 8k.'
  },
  {
    id: 'fash-68',
    categoryId: 'fashion',
    title: 'Studio Sunglasses',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800',
    gradient: 'from-yellow-400 to-amber-500',
    prompt: 'A striking, photorealistic studio macro shot of [YOUR PRODUCT HERE: e.g., thick-framed translucent acetate sunglasses with dark polarized lenses] resting on a perfectly smooth, solid [BACKGROUND COLOR: e.g., vibrant mustard yellow] surface. Captured with a Fujifilm GFX 100S and a GF 120mm f/4 Macro lens. The lighting is a masterclass in reflection control: dual overhead strip boxes create perfectly straight, professional white highlights across the curved dark lenses and the polished plastic frames, giving the product a premium, designer feel while keeping the background pure and flat. 8k, crisp.'
  },
  {
    id: 'fash-69',
    categoryId: 'fashion',
    title: 'Summer Linen',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e32f6b717?q=80&w=800',
    gradient: 'from-sky-300 to-blue-200',
    prompt: 'A bright, sun-drenched premium lifestyle shot of a [YOUR PRODUCT HERE: e.g., neatly folded pastel blue linen summer shirt] lying on pristine, powdery white beach sand. A harsh, direct overhead sunlight casts the distinct, sharp shadow of a [TROPICAL ELEMENT: e.g., large Monstera leaf] directly across the fabric and the sand. Captured with a Phase One XF IQ4 150MP. A polarizing filter eliminates glare, while the extreme resolution captures the breathable, organic, and slightly wrinkled texture of the natural linen fibers. High-end resort wear advertising, vibrant, crisp, 8k resolution.'
  },
  {
    id: 'fash-70',
    categoryId: 'fashion',
    title: 'Winter Knit',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800',
    gradient: 'from-neutral-300 to-stone-200',
    prompt: 'A warm, inviting, highly textured product photograph of a [YOUR PRODUCT HERE: e.g., chunky ribbed-knit merino wool winter beanie] resting naturally on a piece of [SURFACE: e.g., weathered reclaimed oak wood]. Captured with a Canon EOS 5D Mark IV and an 85mm f/1.2L II USM lens for a creamy, dreamy depth of field that gently blurs the background. The lighting simulates soft, diffused natural window light on a snowy day, softly illuminating the thick, cozy loops of the yarn without creating any harsh shadows. Cozy winter apparel, organic textures, 8k.'
  },

  // ==========================================
  // LOTE 8: HOME DECOR
  // ==========================================
  {
    id: 'home-71',
    categoryId: 'home-decor',
    title: 'Sun-Drenched Armchair',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800',
    gradient: 'from-orange-200 to-amber-100',
    prompt: 'A stunning, photorealistic interior design shot of a [YOUR PRODUCT HERE: e.g., plush rust-orange velvet lounge chair] sitting elegantly in a sun-drenched, minimalist living room. Captured with a Phase One XF IQ4 150MP and a 50mm lens to provide a natural, inviting perspective. The lighting simulates beautiful, soft, directional morning sunlight streaming through a large unseen window to the right, casting long, gentle shadows across the [FLOORING: e.g., light oak herringbone wood floor]. The light perfectly highlights the rich, tactile texture of the fabric. Architectural Digest aesthetic, warm, serene, 8k resolution.'
  },
  {
    id: 'home-72',
    categoryId: 'home-decor',
    title: 'Rustic Ceramics',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800',
    gradient: 'from-stone-400 to-stone-300',
    prompt: 'An intimate, ultra-detailed macro product shot of a [YOUR PRODUCT HERE: e.g., handcrafted matte white ceramic vase holding dried pampas grass] resting on a [SURFACE: e.g., raw reclaimed oak console table]. Shot with a Sony A7R IV and a Sony FE 90mm f/2.8 Macro G OSS lens to capture the beautifully imperfect, grainy texture of the artisanal clay. The lighting is heavily diffused and soft, utilizing a large overhead silk to create a shadowless, calm, and highly tactile environment. Wabi-sabi interior styling, minimalist home decor, earthy tones, 8k.'
  },
  {
    id: 'home-73',
    categoryId: 'home-decor',
    title: 'Linen Bed',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800',
    gradient: 'from-emerald-100 to-teal-50',
    prompt: 'A serene, dreamy lifestyle photograph of a neatly made bed featuring a [YOUR PRODUCT HERE: e.g., pure French linen duvet cover set in sage green]. The scene is captured from a slightly elevated 45-degree angle. Shot with a Canon EOS R5 and an RF 50mm f/1.2L USM lens, shot wide open to create a creamy, soft-focus background that fades gently into a bright, airy bedroom. The lighting is brilliant and diffused, mimicking a cloudy but bright morning, enhancing the organic, slightly wrinkled texture of the natural linen fibers. Cozy, premium bedding advertising, 8k.'
  },
  {
    id: 'home-74',
    categoryId: 'home-decor',
    title: 'Sculptural Lamp',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800',
    gradient: 'from-yellow-600 to-amber-700',
    prompt: 'A moody, sophisticated architectural rendering of a [YOUR PRODUCT HERE: e.g., sleek brushed brass mid-century modern floor lamp with a frosted glass globe]. The product stands in the corner of a dimly lit, luxurious room with [WALL TEXTURE: e.g., dark charcoal Venetian plaster walls]. Captured with a Hasselblad H6D-100c and a 100mm f/2.2 lens. The scene is illuminated primarily by the soft, warm, glowing light emitting from the lamp itself, which casts a beautiful, intimate halo on the textured wall and highlights the premium metallic finish of the stand. Cinematic, elegant interior lighting, 8k.'
  },
  {
    id: 'home-75',
    categoryId: 'home-decor',
    title: 'Minimalist Table Setting',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=800',
    gradient: 'from-zinc-300 to-stone-200',
    prompt: 'An impeccably styled, top-down flat-lay photograph of a [YOUR PRODUCT HERE: e.g., minimalist matte black ceramic dinnerware set] arranged beautifully on a [SURFACE: e.g., natural walnut dining table]. The composition includes elegant gold cutlery and a folded linen napkin. Captured perfectly parallel to the surface using a Fujifilm GFX 100S with a GF 63mm f/2.8 R WR lens. The lighting is an advanced studio setup utilizing massive overhead softboxes to create a completely even, shadowless wash of light that eliminates harsh reflections on the plates and emphasizes the organic geometry of the setting. 8k, crisp.'
  },
  {
    id: 'home-76',
    categoryId: 'home-decor',
    title: 'Tactile Cushion',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?q=80&w=800',
    gradient: 'from-amber-100 to-orange-50',
    prompt: 'A warm, tactile lifestyle close-up of a [YOUR PRODUCT HERE: e.g., chunky knit throw pillow with large woven tassels] resting naturally on a [FURNITURE: e.g., soft beige leather sofa]. Shot with a RED Monstro 8K VV and a Zeiss CP.3 50mm T2.1 lens. The depth of field is exceptionally shallow, blurring the background into a cozy, inviting living space. The lighting is a highly directional, warm beam mimicking golden hour sunlight, raking across the heavy yarn to create deep micro-shadows that make the texture jump off the screen. High-end home textiles, highly detailed, 8k resolution.'
  },
  {
    id: 'home-77',
    categoryId: 'home-decor',
    title: 'Luxury Scented Candle',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800',
    gradient: 'from-orange-300 to-yellow-200',
    prompt: 'A calming, spa-like product visualization of a [YOUR PRODUCT HERE: e.g., luxury scented soy wax candle in a heavy amber glass jar], the wick softly burning. The candle sits on the edge of a [SURFACE: e.g., white marble bathtub] surrounded by a soft, ethereal mist. Captured with a Nikon D850 and a 105mm f/2.8 macro lens. The lighting is predominantly dark and moody, allowing the warm, flickering yellow glow of the candle flame to illuminate the translucent wax and the rim of the glass, creating a feeling of absolute relaxation and premium self-care. 8k, photorealistic.'
  },
  {
    id: 'home-78',
    categoryId: 'home-decor',
    title: 'Designer Bookshelf',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800',
    gradient: 'from-slate-200 to-gray-100',
    prompt: 'A bright, airy architectural interior shot featuring a [YOUR PRODUCT HERE: e.g., sleek matte black metal leaning bookshelf] styled perfectly with [DECOR ELEMENTS: e.g., art books, small trailing plants, and abstract sculptures]. The background is a clean, bright white studio wall. Shot on a Leica SL2-S with a 35mm wide-angle cine lens to capture the full height of the furniture without distortion. The lighting is brilliantly crisp and even, simulating professional interior real estate photography, ensuring every decorative object on the shelves is perfectly visible and beautifully contrasted. Modern home office aesthetic, 8k.'
  },
  {
    id: 'home-79',
    categoryId: 'home-decor',
    title: 'Blank Picture Frame',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800',
    gradient: 'from-gray-300 to-zinc-200',
    prompt: 'A highly realistic interior mockup featuring a blank, empty [YOUR PRODUCT HERE: e.g., large oak wood picture frame with a white passe-partout] hanging on a flawless [WALL TEXTURE: e.g., light grey concrete wall]. The blank white space inside the frame is perfectly lit, ready for art or poster placement. Captured with a Phase One XF IQ4 150MP. The lighting utilizes a single, powerful strobe off-camera to the left, casting a crisp, realistic, diagonal shadow from the frame onto the wall, grounding the mockup in physical reality and giving it a premium gallery feel. High-resolution art mockup, 8k.'
  },
  {
    id: 'home-80',
    categoryId: 'home-decor',
    title: 'Premium Appliance',
    image: 'https://images.unsplash.com/photo-1585227702677-1bfa3cbf46e0?q=80&w=800',
    gradient: 'from-slate-400 to-gray-300',
    prompt: 'A high-end commercial lifestyle shot of a [YOUR PRODUCT HERE: e.g., premium stainless steel espresso machine] sitting proudly on a polished [SURFACE: e.g., white Calacatta marble kitchen countertop]. A beautifully crafted cappuccino with latte art sits beside it. Captured with a Canon EOS R5 and an RF 85mm f/1.2L USM lens. The lighting is a masterclass in metallic reflection control: massive white bounce boards surround the product, creating clean, straight, and elegant highlights across the curved stainless steel, perfectly conveying the heavy, expensive, and professional build quality of the appliance. 8k, razor-sharp.'
  },

  // ==========================================
  // LOTE 9: FOOD & BEVERAGE
  // ==========================================
  {
    id: 'food-81',
    categoryId: 'food-beverage',
    title: 'Rustic Dish',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800',
    gradient: 'from-orange-800 to-red-900',
    prompt: 'Capture the essence of exquisite rustic cuisine for a world-class culinary publication featuring a [YOUR DISH HERE: e.g., hearty slow-braised beef stew in a cast-iron skillet]. Artfully arrange the dish on a [SURFACE: e.g., weathered wooden farmhouse table], surrounded by [GARNISH/PROPS: e.g., scattered fresh thyme, rustic bread slices, and a dusting of sea salt]. Inspired by the naturalistic approach of premium food styling. Shot with a Nikon D850 and a 105mm f/2.8 macro lens. The lighting relies on soft, enveloping natural daylight filtering through a large nearby window, highlighting the rich, savory textures and the glistening, unctuous sauce. Earthy, authentic, mouth-watering, 8k resolution.'
  },
  {
    id: 'food-82',
    categoryId: 'food-beverage',
    title: 'Clean Dessert',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800',
    gradient: 'from-yellow-100 to-amber-50',
    prompt: 'A bright, exquisitely clean, and minimalist food photography shot of a [YOUR DISH HERE: e.g., delicate lemon meringue tart with a perfectly toasted marshmallow topping]. The dessert rests on a [SURFACE: e.g., pure white ceramic plate over a light pastel linen cloth]. Inspired by the bright, elegant compositions of Donna Hay. Captured with a Canon EOS R5 and an RF 85mm f/1.2L USM lens, shot wide open for a creamy, dreamy background blur. The lighting is brilliantly even and shadowless, utilizing massive overhead softboxes to enhance the vibrant, optimistic colors and the delicate, crisp textures of the pastry. High-end editorial, flawless, 8k.'
  },
  {
    id: 'food-83',
    categoryId: 'food-beverage',
    title: 'Premium Fast Food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800',
    gradient: 'from-red-600 to-orange-500',
    prompt: 'An ultra-high definition, photorealistic commercial still life of a [YOUR DISH HERE: e.g., towering, juicy gourmet cheeseburger] capturing the vibrant essence of premium commercial food. Inspired by the technical mastery of Francesco Tonelli. Shot using a Phase One XF IQ4 150MP with a Schneider Kreuznach 120mm LS f/4.0 Macro lens. The setup includes an array of Broncolor Siros L strobes fitted with large octabanks for brilliantly even light. The scene captures dynamic action, with [ACTION ELEMENT: e.g., a splash of rich BBQ sauce in mid-air and wisps of hot steam rising from the melted cheese]. Mist a fine spray of water on fresh ingredients to imbue freshness. 8k, mouth-watering.'
  },
  {
    id: 'food-84',
    categoryId: 'food-beverage',
    title: 'Ingredients Macro',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba88061?q=80&w=800',
    gradient: 'from-emerald-500 to-green-400',
    prompt: 'A mesmerizing, ultra-macro shot focusing entirely on the vibrant colors and microscopic textures of [YOUR DISH HERE: e.g., a fresh Mediterranean salad with heirloom tomatoes, creamy burrata, and a drizzle of emerald green olive oil]. The ingredients are presented on a [SURFACE: e.g., dark slate serving board]. Captured with a Sony A7R IV and a Sony FE 90mm f/2.8 Macro G OSS lens. The lighting is highly directional and precise, using a snoot modifier to rake light across the ingredients, creating deep micro-shadows that make the water droplets and the glistening oil pop off the screen. Vibrant, fresh, farm-to-table aesthetic, 8k.'
  },
  {
    id: 'food-85',
    categoryId: 'food-beverage',
    title: 'Moody Hot Beverage',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800',
    gradient: 'from-stone-800 to-amber-900',
    prompt: 'A dark, moody, and highly atmospheric commercial shot of a [YOUR DISH HERE: e.g., freshly poured cup of artisan espresso with a rich, golden crema] resting on a [SURFACE: e.g., dark roasted coffee bean scattered rustic iron table]. Shot with a Hasselblad H6D-100c and a 100mm f/2.2 lens. The scene is illuminated by a single, dramatic rim light cutting through the pitch-black studio, perfectly backlighting the thick, swirling tendrils of hot steam rising gracefully from the cup. Chiaroscuro effect, intense color contrast, cozy but sophisticated coffee shop vibe, hyper-detailed, 8k resolution.'
  },
  {
    id: 'food-86',
    categoryId: 'food-beverage',
    title: 'Haute Cuisine',
    image: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=800',
    gradient: 'from-slate-900 to-zinc-800',
    prompt: 'A sophisticated, Michelin-star level culinary presentation featuring a meticulously plated [YOUR DISH HERE: e.g., seared scallop with a vibrant green pea purée and delicate micro-herb garnish]. The dish is centered on a [SURFACE: e.g., massive, matte black geometric ceramic plate]. Captured with a Leica SL2-S and a 50mm f/1.4 ASPH lens. The lighting is an advanced studio setup using precise, narrow strip boxes to cast elegant, controlled highlights across the glossy sauces and the perfectly seared protein, leaving the dark plate completely reflection-free. Fine dining, avant-garde gastronomy, flawless symmetry, 8k.'
  },
  {
    id: 'food-87',
    categoryId: 'food-beverage',
    title: 'Controlled Chaos',
    image: 'https://images.unsplash.com/photo-1556910110-a5a63dfd393c?q=80&w=800',
    gradient: 'from-amber-200 to-yellow-100',
    prompt: 'A dynamic, action-oriented culinary photograph capturing the chaotic beauty of making [YOUR DISH HERE: e.g., fresh handmade fettuccine pasta]. The scene shows the food resting on a [SURFACE: e.g., flour-dusted vintage wooden cutting board], with a massive, cinematic cloud of [FLYING INGREDIENT: e.g., white flour] suspended in mid-air, frozen by a high-speed shutter. Shot with a Nikon D850 and a 105mm f/2.8 lens. The lighting utilizes dual Profoto flashes to edge-light the flying particles, making them glow against a dark, moody background. Authentic heritage cooking, raw ingredients, highly tactile, cinematic, 8k.'
  },
  {
    id: 'food-88',
    categoryId: 'food-beverage',
    title: 'Tropical Splash',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800',
    gradient: 'from-cyan-400 to-blue-500',
    prompt: 'A bright, intensely colorful pop-art inspired commercial shot of [YOUR DISH HERE: e.g., a vibrant sliced ruby red grapefruit and fresh mint leaves] plunging into a pool of pure, crystal-clear water. Captured with a Fujifilm GFX 100S and a GF 120mm Macro lens. The lighting is exceptionally bright and crisp, utilizing hard flashes to perfectly freeze the explosive water splash and the effervescent bubbles clinging to the fruit. The background is a seamless, vibrant [BACKGROUND COLOR: e.g., tropical coral pink]. Refreshing, energetic, perfectly color-graded, 8k resolution.'
  },
  {
    id: 'food-89',
    categoryId: 'food-beverage',
    title: 'The Perfect Roast',
    image: 'https://images.unsplash.com/photo-1544025162-83b631d8e578?q=80&w=800',
    gradient: 'from-red-900 to-orange-800',
    prompt: 'A mouth-watering, rugged commercial visualization of a [YOUR DISH HERE: e.g., thick, perfectly grilled Tomahawk steak with aggressive, charred grill marks]. The meat is presented on a [SURFACE: e.g., heavy wooden butcher\'s block], surrounded by [GARNISH: e.g., roasted garlic bulbs and sprigs of charred rosemary]. Shot with a RED Monstro 8K VV and a Zeiss CP.3 50mm T2.1 lens. The lighting is warm, dramatic, and masculine, utilizing a gold reflector to bring out the rich, caramelized crust of the meat and the glistening, savory juices. High-end steakhouse advertising, primal, hyper-realistic, 8k.'
  },
  {
    id: 'food-90',
    categoryId: 'food-beverage',
    title: 'Fine Chocolates & Sweets',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800',
    gradient: 'from-amber-900 to-stone-800',
    prompt: 'A luxurious, velvety macro photograph of [YOUR DISH HERE: e.g., artisanal dark chocolate truffles dusted with rich cocoa powder and edible gold leaf]. The chocolates are meticulously arranged on a [SURFACE: e.g., polished black marble slab]. Captured with a Phase One XF IQ4 150MP and a 120mm macro lens. The lighting is incredibly soft, employing large overhead diffusion to create a rich, enveloping glow that avoids harsh reflections on the chocolate, highlighting its smooth, creamy, and expensive texture. Decadent, luxurious dessert branding, 8k, flawless depth of field.'
  },

  // ==========================================
  // LOTE 10: PET PRODUCTS
  // ==========================================
  {
    id: 'pets-91',
    categoryId: 'pets',
    title: 'Cozy Pet Bed',
    image: 'https://images.unsplash.com/photo-1591429939960-b7d5add10bc5?q=80&w=800',
    gradient: 'from-orange-200 to-amber-300',
    prompt: 'A heartwarming, cozy lifestyle product shot of a [YOUR PRODUCT HERE: e.g., plush, orthopedic memory foam dog bed in neutral beige]. The product is placed on a [SURFACE: e.g., warm oak wood floor next to a textured wool rug]. Captured with a Canon EOS R5 and an RF 50mm f/1.2L USM lens, shot wide open to create a dreamy, soft-focus background of a beautifully blurred living room. The lighting simulates gentle, golden late-afternoon sunlight streaming through a window, highlighting the incredibly soft, tactile texture of the faux fur. Premium pet comfort, incredibly inviting, 8k resolution.'
  },
  {
    id: 'pets-92',
    categoryId: 'pets',
    title: 'Indestructible Toy',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800',
    gradient: 'from-cyan-400 to-blue-500',
    prompt: 'A vibrant, playful commercial studio macro of a [YOUR PRODUCT HERE: e.g., durable natural rubber chew toy in bright cyan] resting on a pristine, seamless [BACKGROUND COLOR: e.g., pastel yellow] background. Shot with a Nikon D850 and a 105mm f/2.8 macro lens. The lighting is absolutely flawless and shadowless, utilizing massive overhead softboxes to make the vibrant colors pop while revealing the rugged, textured surface of the rubber designed for heavy chewing. Clean, energetic, optimistic pet lifestyle branding, hyper-realistic, 8k.'
  },
  {
    id: 'pets-93',
    categoryId: 'pets',
    title: 'Luxury Pet Bowl',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800',
    gradient: 'from-stone-300 to-zinc-200',
    prompt: 'An elegant, photorealistic interior shot of a [YOUR PRODUCT HERE: e.g., minimalist matte black ceramic elevated dog bowl set on a bamboo stand] placed beautifully on a [SURFACE: e.g., polished terrazzo kitchen floor]. Captured with a Phase One XF IQ4 150MP and a 50mm lens. The background features a softly blurred, modern white kitchen. The lighting uses soft, diffused natural window light from the left, casting a gentle shadow to the right and catching the subtle, premium matte finish of the ceramic bowls. Architectural interior aesthetic, modern pet living, 8k.'
  },
  {
    id: 'pets-94',
    categoryId: 'pets',
    title: 'Premium Leather Collar',
    image: 'https://images.unsplash.com/photo-1544371720-d3ba04161b2e?q=80&w=800',
    gradient: 'from-amber-800 to-orange-700',
    prompt: 'A high-end, luxurious macro photograph of a [YOUR PRODUCT HERE: e.g., premium genuine brown leather dog collar with solid brass hardware]. The product is displayed on a [SURFACE: e.g., dark, distressed wooden workbench]. Shot with a Sony A7R IV and a Sony FE 90mm f/2.8 Macro G OSS lens to capture the rich grain of the leather and the intricate details of the stitching. The lighting is warm and highly directional, raking across the materials to create deep micro-shadows that emphasize the artisanal craftsmanship and the heavy, expensive feel of the metal buckle. 8k, photorealistic.'
  },
  {
    id: 'pets-95',
    categoryId: 'pets',
    title: 'Spa & Bath Line',
    image: 'https://images.unsplash.com/photo-1585237889392-7484bd5c234a?q=80&w=800',
    gradient: 'from-sky-200 to-blue-100',
    prompt: 'A fresh, clean, and invigorating product visualization of a blank [YOUR PRODUCT HERE: e.g., frosted pump bottle of organic pet shampoo] resting on a wet, white marble surface, surrounded by perfectly spherical, iridescent soap bubbles and a few delicate splashes of pure water. Captured with a Hasselblad H6D-100c and a 100mm f/2.2 lens using a fast shutter speed to freeze the bubbles. The lighting mimics a bright, airy, luxurious bathroom, utilizing massive white bounce cards to create pure, clinical reflections on the frosted glass. Pet grooming, spa aesthetic, 8k resolution.'
  },
  {
    id: 'pets-96',
    categoryId: 'pets',
    title: 'Winter Pet Apparel',
    image: 'https://images.unsplash.com/photo-1606337321936-afcc177bb320?q=80&w=800',
    gradient: 'from-yellow-500 to-amber-600',
    prompt: 'A warm, highly textured winter lifestyle shot of a [YOUR PRODUCT HERE: e.g., chunky cable-knit dog sweater in mustard yellow] resting neatly on a [SURFACE: e.g., cozy plaid fleece blanket]. Shot with a RED Monstro 8K VV and a Zeiss CP.3 50mm T2.1 macro lens. The depth of field is incredibly shallow. The lighting simulates the warm, flickering glow of a nearby fireplace, casting soft, inviting highlights across the thick loops of the yarn, heavily emphasizing the cozy, insulating texture of the fabric. Premium pet apparel, rustic cabin vibe, 8k.'
  },
  {
    id: 'pets-97',
    categoryId: 'pets',
    title: 'Pet Carrier Bag',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800',
    gradient: 'from-slate-300 to-gray-200',
    prompt: 'A premium, modern travel lifestyle shot of a [YOUR PRODUCT HERE: e.g., sleek, airline-approved canvas pet carrier bag with breathable mesh] resting on a [SURFACE: e.g., polished concrete floor of a bright, modern airport terminal]. Captured with a Leica SL2-S and a 35mm wide-angle lens. The background is a beautifully blurred, dynamic scene of travelers walking by, conveying a sense of luxury travel and mobility. The lighting is crisp, even, and architectural, highlighting the sturdy construction, premium zippers, and structured shape of the carrier. High-end pet travel, 8k.'
  },
  {
    id: 'pets-98',
    categoryId: 'pets',
    title: 'Designer Scratching Post',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=800',
    gradient: 'from-emerald-200 to-teal-100',
    prompt: 'A beautiful, architectural interior design shot featuring a modern [YOUR PRODUCT HERE: e.g., minimalist wooden cat tree with natural sisal scratching posts and white plush cushions] styled perfectly in a sun-drenched living room. The background is a clean, bright white wall with a large Monstera plant. Shot on a Fujifilm GFX 100S with a GF 63mm f/2.8 R WR lens. The lighting is brilliantly crisp and even, simulating professional interior real estate photography, ensuring the natural wood grain and the rough texture of the sisal rope are perfectly visible. Seamless home integration, 8k.'
  },
  {
    id: 'pets-99',
    categoryId: 'pets',
    title: 'Gourmet Pet Treat',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800',
    gradient: 'from-rose-500 to-red-600',
    prompt: 'A dynamic, mouth-watering commercial food photography shot of [YOUR PRODUCT HERE: e.g., premium freeze-dried salmon cat treats scattered around a blank matte foil pouch]. The setup rests on a [SURFACE: e.g., dark slate serving board]. A few pieces of the treats and tiny flakes of dried fish are suspended in mid-air, frozen by a high-speed shutter. Captured with a Canon EOS R5 and a 100mm Macro lens. The lighting utilizes dual Profoto flashes to edge-light the flying particles, making them pop against a dark, moody studio background. Gourmet pet nutrition, hyper-detailed, 8k.'
  },
  {
    id: 'pets-100',
    categoryId: 'pets',
    title: 'Smart Tech Collar',
    image: 'https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?q=80&w=800',
    gradient: 'from-blue-600 to-cyan-500',
    prompt: 'A futuristic, sleek tech-gadget shot of a [YOUR PRODUCT HERE: e.g., smart GPS pet tracker collar with a subtle glowing LED indicator] resting on a dark, reflective obsidian surface. Captured using a Phase One XF IQ4 150MP and a 120mm macro lens. The scene is dimly lit to allow the glowing [LED COLOR: e.g., electric blue] light from the tracker to softly illuminate the premium matte silicone material of the collar and cast a vibrant reflection on the glass surface beneath. Cyberpunk undertones, modern pet safety technology, highly detailed, 8k resolution.'
  }
];