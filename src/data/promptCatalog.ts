export type PromptCategory =
    | "cosmetics"
    | "supplements"
    | "branding"
    | "automotive"
    | "jewelry"
    | "fashion"
    | "food_beverage"
    | "home_decor"
    | "tech"
    | "universal"

export type PromptItem = {
    id: string
    category: PromptCategory
    title: string
    style_dna: string
    image_direction: string
    prompt: string
}

export const promptCatalog: PromptItem[] = [

    {
        "id": "cos-01",
        "category": "cosmetics",
        "title": "Luxury Marble Glow",
        "style_dna": "Premium • Clean • Editorial",
        "image_direction": "High-end skincare product centered on white marble with soft diffused lighting and subtle depth blur.",
        "prompt": "Create a high-end commercial photograph featuring [YOUR PRODUCT HERE] placed centrally on a refined white marble surface with natural vein texture. The product must appear proportionally accurate and physically grounded with a soft, realistic contact shadow beneath it. Use a minimal editorial studio environment with controlled negative space to emphasize luxury. Lighting should be soft and diffused from the front-left direction, creating smooth highlight transitions without overexposure. A subtle rim light may separate the product from the background while maintaining realism. Camera perspective should simulate an 85mm commercial lens at eye level with shallow depth of field, keeping the product fully sharp and background gently blurred. Materials such as glass, plastic, or metallic finishes must display accurate reflectivity and light behavior.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-02",
        "category": "cosmetics",
        "title": "Soft Beige Editorial",
        "style_dna": "Warm • Minimal • Elegant",
        "image_direction": "Skincare product on soft beige seamless background with warm natural lighting.",
        "prompt": "Photograph [YOUR PRODUCT HERE] positioned on a seamless soft beige studio backdrop. The composition should feel warm, minimal, and editorial while maintaining physical realism. The product must be accurately scaled and naturally grounded with a visible contact shadow. Lighting should simulate natural window light entering from the right side, producing soft gradients and realistic highlight transitions across surfaces. Avoid exaggerated glow or unrealistic brightness. Use an 85mm lens simulation at eye level, with shallow depth of field to isolate the product. Surfaces such as frosted glass, matte plastic, or polished metal must display realistic material response. Maintain clean label visibility without distortion.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-03",
        "category": "cosmetics",
        "title": "Dark Luxury Contrast",
        "style_dna": "Moody • High Contrast • Premium",
        "image_direction": "Cosmetic product on dark matte surface with controlled rim lighting.",
        "prompt": "Create a dramatic editorial image of [YOUR PRODUCT HERE] placed on a dark matte surface in a controlled studio environment. The product must appear solid and properly weighted, with realistic contact shadow anchoring it to the surface. Lighting should come from a single directional source on the upper left, producing defined highlights and controlled contrast without blown-out reflections. Add subtle rim light to define the silhouette while preserving natural material response. Simulate a 90mm lens with shallow depth of field, keeping the product sharply in focus. Avoid surreal glow or exaggerated shine. Surface textures must appear authentic.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-04",
        "category": "cosmetics",
        "title": "Glass Reflection Precision",
        "style_dna": "Clean • Reflective • Studio Control",
        "image_direction": "Cosmetic bottle on subtle reflective surface with controlled mirror effect beneath.",
        "prompt": "Create a premium commercial image of [YOUR PRODUCT HERE] positioned on a lightly reflective studio surface that produces a subtle, physically accurate mirror reflection beneath the product. The reflection must obey correct opacity falloff and perspective alignment, without appearing artificial or overly sharp. The product must be precisely scaled and firmly grounded with a realistic contact shadow. Lighting should be soft and diffused from the front with controlled highlight roll-off across glass or metallic surfaces. Avoid exaggerated shine or unrealistic glow. Use an 85mm commercial lens simulation at eye level with shallow depth of field to keep the product sharp and background softly blurred. Labels must remain legible and undistorted. Surface reflections must respect real-world material physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-05",
        "category": "cosmetics",
        "title": "Botanical Natural Frame",
        "style_dna": "Organic • Fresh • Balanced",
        "image_direction": "Skincare product near subtle blurred botanical elements with natural window lighting.",
        "prompt": "Photograph [YOUR PRODUCT HERE] placed on a clean neutral surface with softly blurred botanical elements in the background. The greenery must remain secondary and not overpower the product. The product must appear correctly scaled and grounded with a visible contact shadow. Lighting should simulate natural window daylight entering from one side, producing realistic shadow gradients and gentle highlights without artificial bloom. Avoid fantasy lighting or oversaturated tones. Use an 85mm lens simulation with shallow depth of field to isolate the product while maintaining environmental realism. Materials such as frosted glass or matte packaging must display accurate light absorption and reflection behavior. Labels must remain crisp and geometrically stable.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-06",
        "category": "cosmetics",
        "title": "Macro Texture Detail",
        "style_dna": "Detail • Texture • Precision",
        "image_direction": "Extreme close-up of cosmetic surface texture with directional side lighting.",
        "prompt": "Create a macro commercial photograph focusing closely on [YOUR PRODUCT HERE], emphasizing surface texture, material detail, and structural precision. The product must appear physically solid and properly scaled. Lighting should be directional from the side to highlight micro-texture and edge definition without creating unrealistic glare. Avoid exaggerated shine or distorted highlights. Simulate a 100mm macro lens with shallow depth of field, ensuring the focal area is sharp while background transitions naturally into blur. Surface materials such as glass, cream, or plastic must behave according to real-world physics. No warped geometry or artificial smoothing. Labels must remain proportionally correct and legible.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-07",
        "category": "cosmetics",
        "title": "Warm Interior Lifestyle",
        "style_dna": "Lifestyle • Soft • Refined",
        "image_direction": "Cosmetic product placed in warm interior setting with soft ambient lighting.",
        "prompt": "Place [YOUR PRODUCT HERE] naturally within a refined interior environment, such as a vanity or wooden tabletop. The product must remain the clear focal point and appear physically grounded with accurate scale relative to surrounding elements. Lighting should simulate soft ambient interior light with gentle highlight transitions and natural shadow falloff. Avoid cinematic exaggeration or artificial glow effects. Use an 85mm portrait lens simulation with shallow depth of field to subtly blur the background while maintaining context. Materials such as polished glass, matte containers, or metallic lids must exhibit realistic reflectivity and texture. Labels must remain undistorted and clean.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-08",
        "category": "cosmetics",
        "title": "Cool Clinical Minimal",
        "style_dna": "Clinical • Clean • Modern",
        "image_direction": "Skincare product on white seamless background with cool-toned lighting.",
        "prompt": "Create a clean, clinical-style commercial photograph of [YOUR PRODUCT HERE] placed on a seamless white surface. The product must be accurately scaled and grounded with a subtle, realistic contact shadow. Lighting should be balanced, cool-toned, and evenly diffused to avoid harsh glare. Avoid overexposure or unrealistic brightness. Simulate a 70mm lens at eye level for a professional catalog feel. Materials must display accurate reflection, refraction, or absorption properties. Keep geometry precise and labels fully legible. The image should feel sterile, minimal, and retail-ready without appearing artificial.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-09",
        "category": "cosmetics",
        "title": "Elevated Platform Composition",
        "style_dna": "Modern • Structured • Balanced",
        "image_direction": "Cosmetic product placed on minimal pedestal with soft directional lighting.",
        "prompt": "Photograph [YOUR PRODUCT HERE] placed on a minimal pedestal or platform within a neutral studio environment. The product must remain proportionally accurate and visibly grounded on the platform with correct contact shadows. Lighting should be soft and directional, creating subtle dimensionality without unrealistic glow. Avoid exaggerated reflections or fantasy effects. Use an 85mm lens simulation with balanced depth of field to maintain product sharpness while softly separating the background. Materials must behave according to real-world physics, including accurate reflection intensity and edge clarity. Labels must remain crisp and geometrically stable.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-10",
        "category": "cosmetics",
        "title": "Catalog Clean Authority",
        "style_dna": "Commercial • Balanced • Retail Ready",
        "image_direction": "Straight-on cosmetic product shot on neutral seamless background.",
        "prompt": "Create a retail-ready commercial photograph of [YOUR PRODUCT HERE] isolated on a seamless neutral background. The product must appear precisely centered, proportionally accurate, and fully grounded with a visible contact shadow. Lighting should be evenly diffused from the front, producing balanced highlight transitions and natural material response. Avoid dramatic effects or artistic distortion. Simulate a 70mm lens for a clean catalog aesthetic. Materials such as glass, plastic, or metallic finishes must exhibit realistic reflectivity and edge sharpness. Labels must remain legible and undistorted. The final image should feel precise, commercial, and physically credible.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-01",
        "category": "supplements",
        "title": "Athletic Studio Authority",
        "style_dna": "Strong • Clean • Performance",
        "image_direction": "Supplement container centered on matte gym-style surface with directional lighting.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] placed on a matte gym-inspired surface such as dark rubber or textured composite flooring. The product must appear solid, correctly scaled, and fully grounded with a natural contact shadow beneath it. Lighting should be directional from the upper side to create controlled contrast and subtle edge definition without exaggerated shine. Avoid artificial glow or dramatic fantasy lighting. Use an 85mm commercial lens simulation at eye level with shallow depth of field to isolate the product while keeping background textures softly blurred. The container geometry must remain precise, labels fully legible, and packaging structurally accurate. Materials such as plastic, matte labels, or metallic lids must display realistic reflection and light absorption.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-02",
        "category": "supplements",
        "title": "Clean Clinical Precision",
        "style_dna": "Minimal • Scientific • Modern",
        "image_direction": "Supplement bottle on seamless white background with cool balanced lighting.",
        "prompt": "Photograph [YOUR PRODUCT HERE] positioned on a seamless white studio background for a clean, clinical presentation. The container must be accurately scaled and visibly grounded with a subtle contact shadow. Lighting should be evenly diffused with cool tonal balance to create a professional and science-driven atmosphere. Avoid overexposure or unrealistic glare. Simulate a 70mm commercial lens at eye level for a retail-ready composition. Labels must remain sharp, undistorted, and proportionally correct. Materials such as matte plastic, glossy coating, or foil seals must exhibit accurate light behavior and realistic reflectivity.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-03",
        "category": "supplements",
        "title": "Powder Macro Texture",
        "style_dna": "Detail • Texture • Ingredient Focus",
        "image_direction": "Close-up of supplement container with subtle powder texture context.",
        "prompt": "Create a macro commercial image of [YOUR PRODUCT HERE] emphasizing surface texture and material precision. The product must remain physically stable and correctly scaled. If powder context is included, it must obey realistic gravity behavior and sit naturally on the surface without floating or exaggerated dispersion. Lighting should be directional from the side to highlight texture depth and container geometry without artificial shine. Simulate a 100mm macro lens with shallow depth of field, ensuring the focal area remains crisp and realistic. Labels must stay proportionally accurate and legible.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-04",
        "category": "supplements",
        "title": "Dark Performance Editorial",
        "style_dna": "Moody • Intense • Premium",
        "image_direction": "Supplement container on dark matte surface with strong side lighting.",
        "prompt": "Create a dramatic commercial image of [YOUR PRODUCT HERE] positioned on a dark matte surface in a controlled studio environment. The container must appear physically solid and properly weighted, with accurate contact shadow anchoring it to the surface. Lighting should come from a single directional source to produce defined contrast and subtle edge highlights without unrealistic glare. Avoid exaggerated shine or artificial glow. Use a 90mm lens simulation at eye level with shallow depth of field. Labels must remain sharp and undistorted. Plastic, metallic, or matte finishes must behave according to real-world material physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-05",
        "category": "supplements",
        "title": "Kitchen Counter Lifestyle",
        "style_dna": "Natural • Lifestyle • Balanced",
        "image_direction": "Supplement container on clean kitchen counter with soft window lighting.",
        "prompt": "Photograph [YOUR PRODUCT HERE] placed naturally on a clean kitchen countertop with subtle background blur. The product must remain the primary focal point and appear accurately scaled relative to the environment. Lighting should simulate soft daylight entering from a window, producing realistic shadow gradients and natural highlight transitions. Avoid cinematic exaggeration or artificial glow. Use an 85mm lens simulation to maintain product sharpness while softly blurring the background. Packaging must retain precise geometry and legible labels. Materials must reflect and absorb light realistically.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-06",
        "category": "supplements",
        "title": "Reflective Platform Focus",
        "style_dna": "Modern • Structured • Clean",
        "image_direction": "Supplement on subtle reflective surface with controlled mirror effect.",
        "prompt": "Create a premium studio photograph of [YOUR PRODUCT HERE] placed on a lightly reflective surface. The reflection must appear physically plausible with correct opacity and perspective alignment. The container must remain proportionally accurate and fully grounded with visible contact shadow. Lighting should be soft and balanced, avoiding artificial bloom or exaggerated highlights. Use an 85mm lens simulation for a refined commercial composition. Labels must remain crisp and undistorted. Materials such as glossy plastic or metallic caps must exhibit realistic reflection behavior.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-07",
        "category": "supplements",
        "title": "Ingredient Context Balance",
        "style_dna": "Clean • Contextual • Realistic",
        "image_direction": "Supplement container with subtle ingredient elements in soft focus.",
        "prompt": "Photograph [YOUR PRODUCT HERE] with subtle ingredient context placed nearby in soft focus. The ingredients must appear naturally positioned and proportionally accurate, not floating or exaggerated. The supplement container must remain fully grounded with realistic shadow contact. Lighting should be soft and diffused from one side to create dimensionality without artificial glow. Simulate an 85mm lens with shallow depth of field to isolate the product while maintaining context. Labels must remain legible and geometrically stable. Materials must display realistic light interaction.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-08",
        "category": "supplements",
        "title": "Cool Performance Minimal",
        "style_dna": "Modern • Balanced • Athletic",
        "image_direction": "Supplement container on cool gray seamless background with soft lighting.",
        "prompt": "Create a commercial image of [YOUR PRODUCT HERE] isolated on a cool gray seamless studio background. The container must appear proportionally accurate and fully grounded with subtle contact shadow. Lighting should be evenly diffused to create balanced highlights without artificial shine. Avoid surreal or dramatic effects. Simulate a 70mm lens for a clean, retail-ready composition. Labels must remain sharp and undistorted. Materials such as matte plastic or metallic lids must exhibit realistic reflectivity and edge precision.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-09",
        "category": "supplements",
        "title": "Macro Label Precision",
        "style_dna": "Detail • Commercial • Sharp",
        "image_direction": "Close-up of supplement label with crisp typography and realistic lighting.",
        "prompt": "Create a macro commercial photograph focusing closely on the label and structural details of [YOUR PRODUCT HERE]. The container must remain geometrically accurate and proportionally correct. Lighting should be directional yet controlled, highlighting typography and material finish without glare or distortion. Simulate a 100mm macro lens with shallow depth of field to isolate the focal area. Ensure text remains sharp and undistorted. Materials such as matte or glossy coatings must respond to light realistically.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-10",
        "category": "supplements",
        "title": "Retail Catalog Clean Shot",
        "style_dna": "Commercial • Precise • Neutral",
        "image_direction": "Straight-on supplement container shot on neutral seamless background.",
        "prompt": "Create a retail-ready commercial photograph of [YOUR PRODUCT HERE] centered on a neutral seamless background. The container must appear accurately scaled and fully grounded with visible contact shadow. Lighting should be evenly diffused from the front to produce balanced highlights and realistic material response. Avoid dramatic styling or artificial glow. Simulate a 70mm lens for a clean catalog aesthetic. Labels must remain legible and undistorted. Packaging geometry must stay precise and physically credible.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-01",
        "category": "branding",
        "title": "Premium Logo Surface Mockup",
        "style_dna": "Minimal • Corporate • Clean",
        "image_direction": "Brand logo embossed on matte wall surface with soft directional lighting.",
        "prompt": "Create a high-end commercial branding image featuring [YOUR PRODUCT HERE] represented as a premium logo or brand mark applied onto a matte wall surface. The logo must appear physically embedded or embossed with realistic depth and shadow contact. Lighting should be directional from the upper side, creating natural shadow falloff along edges without artificial glow or exaggerated contrast. The surface texture must remain realistic, with subtle wall imperfections visible under light. Simulate an 85mm commercial lens at eye level with shallow depth of field for refined presentation. Edges of the logo must be geometrically precise and free from distortion. Avoid floating elements or unrealistic shine. Materials must respond to light accurately according to their finish.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-02",
        "category": "branding",
        "title": "Metallic Signage Authority",
        "style_dna": "Corporate • Industrial • Premium",
        "image_direction": "Metal brand signage mounted on concrete wall with controlled lighting.",
        "prompt": "Create a commercial branding photograph of [YOUR PRODUCT HERE] represented as metallic signage mounted onto a concrete or stone wall. The sign must appear physically attached with realistic mounting depth and natural contact shadows. Lighting should be directional and controlled to emphasize metallic edges without producing unrealistic reflections or artificial glow. Simulate a 90mm lens at eye level to capture accurate scale and perspective. The wall surface must display authentic texture, and the metallic finish must reflect light according to real-world physics. No distortion of logo geometry is allowed. Edges must remain sharp and proportionally correct.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-03",
        "category": "branding",
        "title": "Business Card Texture Detail",
        "style_dna": "Elegant • Texture • Close-Up",
        "image_direction": "Macro shot of brand printed on textured business card.",
        "prompt": "Create a macro commercial photograph of [YOUR PRODUCT HERE] represented as branding printed on a textured business card. The card must appear physically resting on a flat surface with accurate contact shadow. Lighting should be directional to emphasize paper grain and embossing detail without glare. Simulate a 100mm macro lens with shallow depth of field, ensuring crisp typography and precise geometry. Ink and embossing must display realistic material behavior and light absorption. No warped text or floating effects. Maintain proportional accuracy of the printed design.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-04",
        "category": "branding",
        "title": "Minimal Stationery Flatlay",
        "style_dna": "Clean • Structured • Corporate",
        "image_direction": "Flatlay of branded stationery on neutral desk surface.",
        "prompt": "Create a professional flatlay branding image of [YOUR PRODUCT HERE] represented across stationery items such as envelopes or letterheads. All items must be proportionally accurate and naturally positioned on a flat surface. Lighting should be soft and diffused from above, creating realistic shadows and depth without dramatic styling. Simulate a 70mm lens top-down perspective for a balanced commercial composition. Typography must remain sharp and geometrically correct. Paper texture must behave realistically under light. Avoid floating elements or artificial effects.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-05",
        "category": "branding",
        "title": "Retail Packaging Mockup",
        "style_dna": "Commercial • Structured • Clean",
        "image_direction": "Brand printed on packaging box displayed in studio lighting.",
        "prompt": "Create a commercial packaging mockup of [YOUR PRODUCT HERE] displayed on a neutral studio surface. The packaging must appear physically solid and proportionally correct with visible contact shadow. Lighting should be evenly diffused to emphasize structure and typography without glare. Simulate an 85mm commercial lens for refined framing. Cardboard or box materials must exhibit realistic texture and edge sharpness. Typography must remain undistorted and properly aligned. Avoid unrealistic reflections or floating effects.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-06",
        "category": "branding",
        "title": "Window Decal Realism",
        "style_dna": "Modern • Architectural • Clean",
        "image_direction": "Brand logo applied as window decal with realistic transparency.",
        "prompt": "Create a branding image of [YOUR PRODUCT HERE] represented as a window decal applied to glass. The decal must appear physically adhered to the glass surface with realistic transparency and correct light interaction. Reflections must behave according to real-world physics and not distort the geometry of the logo. Lighting should simulate natural daylight with accurate shadow falloff. Use an 85mm lens simulation at eye level. Ensure proportional accuracy and geometric stability.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-07",
        "category": "branding",
        "title": "Embossed Leather Detail",
        "style_dna": "Luxury • Texture • Detail",
        "image_direction": "Brand embossed on leather surface with directional lighting.",
        "prompt": "Create a macro branding image of [YOUR PRODUCT HERE] embossed onto a leather surface. The embossing must appear physically pressed into the material with realistic depth and shadow contact. Lighting should be directional to emphasize texture without producing artificial shine. Simulate a 100mm macro lens with shallow depth of field. Leather grain must behave realistically under light, and typography must remain geometrically stable. Avoid distortion or exaggerated glow.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-08",
        "category": "branding",
        "title": "Corporate Lobby Installation",
        "style_dna": "Architectural • Professional • Clean",
        "image_direction": "Brand signage mounted inside modern corporate lobby.",
        "prompt": "Create a commercial branding photograph of [YOUR PRODUCT HERE] represented as signage mounted within a modern corporate lobby interior. The sign must appear physically attached to the wall with accurate scale relative to the space. Lighting should simulate interior ambient light with realistic shadow falloff. Use an 85mm lens simulation to maintain proportional perspective. Materials such as brushed metal or acrylic must exhibit realistic reflection behavior. Avoid floating elements or distorted geometry.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-09",
        "category": "branding",
        "title": "Foil Stamp Precision",
        "style_dna": "Elegant • Print • Premium",
        "image_direction": "Close-up of foil stamped logo on premium paper.",
        "prompt": "Create a macro branding image of [YOUR PRODUCT HERE] represented as foil-stamped print on premium paper. The foil must reflect light realistically with correct highlight behavior and no artificial glow. The paper must show subtle texture and remain physically grounded on a flat surface with natural shadow contact. Simulate a 100mm macro lens for precise detail capture. Typography must remain undistorted and proportionally accurate.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-10",
        "category": "branding",
        "title": "Clean Digital Presentation",
        "style_dna": "Modern • Minimal • Professional",
        "image_direction": "Brand displayed on realistic digital screen device in studio lighting.",
        "prompt": "Create a professional branding image of [YOUR PRODUCT HERE] displayed on a realistic digital device screen placed on a neutral studio surface. The screen must remain proportionally accurate and geometrically stable. Lighting should be balanced to minimize glare while preserving realistic reflections. Simulate an 85mm lens for clean commercial framing. The device must appear physically grounded with visible contact shadow. Avoid distortion or artificial glow effects.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-01",
        "category": "automotive",
        "title": "Garage Precision Studio",
        "style_dna": "Industrial • Clean • Mechanical",
        "image_direction": "Automotive product placed on textured garage floor with directional lighting.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] positioned on a realistic garage-style concrete floor. The product must appear proportionally accurate and fully grounded with visible contact shadow and correct weight distribution. Surface texture of the concrete must be realistic and not exaggerated. Lighting should be directional from one side to create defined yet natural shadows without artificial glow. Avoid dramatic cinematic exaggeration. Simulate an 85mm commercial lens at eye level with shallow depth of field, keeping the product sharp and background subtly blurred. Materials such as metal, rubber, plastic, or painted surfaces must respond to light according to real-world physics. Edges must remain geometrically precise with no distortion.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-02",
        "category": "automotive",
        "title": "Engine Bay Detail",
        "style_dna": "Mechanical • Precision • Technical",
        "image_direction": "Automotive component positioned inside realistic engine bay context.",
        "prompt": "Create a commercial image of [YOUR PRODUCT HERE] integrated naturally within a realistic engine bay environment. The component must appear proportionally accurate and physically installed with proper mounting alignment. All surrounding mechanical elements must maintain correct scale and geometry. Lighting should simulate natural garage lighting with soft directional highlights to reveal texture and form without artificial shine. Avoid exaggerated reflections or fantasy effects. Use a 90mm lens simulation at eye level with controlled depth of field. Metal surfaces must display realistic reflectivity and edge sharpness. Rubber or plastic materials must exhibit accurate texture and light absorption.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-03",
        "category": "automotive",
        "title": "Chrome Reflection Control",
        "style_dna": "Polished • Controlled • Premium",
        "image_direction": "Automotive part with chrome finish under controlled studio lighting.",
        "prompt": "Create a premium studio photograph of [YOUR PRODUCT HERE] featuring polished chrome or metallic surfaces. The product must remain geometrically precise and proportionally accurate. Chrome reflections must obey realistic environmental reflection behavior without distortion or exaggerated shine. Lighting should be diffused yet directional to create controlled highlight gradients. Simulate an 85mm lens for refined framing. The product must remain grounded with natural contact shadow. Avoid artificial glow or unrealistic reflection artifacts.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-04",
        "category": "automotive",
        "title": "Matte Performance Detail",
        "style_dna": "Performance • Modern • Structured",
        "image_direction": "Automotive product on matte surface with soft directional lighting.",
        "prompt": "Photograph [YOUR PRODUCT HERE] placed on a matte industrial surface in a controlled studio environment. The product must appear solid, proportionally accurate, and fully grounded with realistic contact shadow. Lighting should be soft yet directional, emphasizing edges and texture without exaggerated contrast. Simulate a 90mm lens at eye level with shallow depth of field. Matte finishes must absorb light realistically without artificial bloom. Avoid distortion or unrealistic reflections. Maintain precise geometry and structural integrity.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-05",
        "category": "automotive",
        "title": "Outdoor Natural Context",
        "style_dna": "Realistic • Practical • Balanced",
        "image_direction": "Automotive product displayed outdoors with natural daylight.",
        "prompt": "Create a realistic outdoor commercial image of [YOUR PRODUCT HERE] positioned naturally within an automotive context. The product must appear correctly scaled and grounded relative to its environment. Lighting should simulate natural daylight with accurate shadow direction and soft highlight transitions. Avoid dramatic cinematic exaggeration. Use an 85mm lens simulation with shallow depth of field. Metal, rubber, or plastic materials must respond to light according to real-world physics. Geometry must remain precise and undistorted.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-06",
        "category": "automotive",
        "title": "Mechanical Macro Focus",
        "style_dna": "Detail • Engineering • Technical",
        "image_direction": "Close-up macro of automotive component texture and precision.",
        "prompt": "Create a macro commercial photograph focusing on [YOUR PRODUCT HERE] highlighting structural precision and material detail. The component must remain geometrically accurate and proportionally correct. Lighting should be directional to emphasize edges and surface texture without glare. Simulate a 100mm macro lens with shallow depth of field. Metal grain, rubber texture, or paint finish must exhibit realistic material response. Avoid distortion or artificial effects.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-07",
        "category": "automotive",
        "title": "Showroom Display Authority",
        "style_dna": "Clean • Premium • Retail",
        "image_direction": "Automotive product displayed in modern showroom lighting.",
        "prompt": "Create a premium showroom-style commercial photograph of [YOUR PRODUCT HERE]. The product must appear proportionally accurate and physically grounded within a clean display environment. Lighting should simulate soft indoor showroom lighting with balanced highlight control and realistic shadow falloff. Avoid exaggerated shine or cinematic bloom. Use an 85mm lens simulation for refined commercial framing. Materials must respond realistically to ambient light. Maintain sharp geometry and precise structural detail.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-08",
        "category": "automotive",
        "title": "Performance Carbon Detail",
        "style_dna": "Sport • Texture • Precision",
        "image_direction": "Automotive component on carbon fiber surface with directional lighting.",
        "prompt": "Create a high-end commercial image of [YOUR PRODUCT HERE] positioned on a carbon fiber surface. The product must appear physically grounded with accurate contact shadow and proper scale. Lighting should be directional to emphasize the weave texture without artificial glow. Simulate a 90mm lens with shallow depth of field. Carbon fiber pattern must remain geometrically consistent and realistic. The product geometry must remain precise with no distortion.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-09",
        "category": "automotive",
        "title": "Industrial Warehouse Context",
        "style_dna": "Industrial • Raw • Realistic",
        "image_direction": "Automotive product in subtle warehouse environment with controlled lighting.",
        "prompt": "Create a realistic industrial-style commercial image of [YOUR PRODUCT HERE] placed within a subtle warehouse context. The product must remain the primary focal point and appear proportionally accurate. Lighting should simulate natural overhead industrial light with realistic shadow behavior. Avoid cinematic exaggeration or artificial glow. Simulate an 85mm lens for balanced framing. Surfaces must behave according to real-world material physics. Geometry must remain stable and undistorted.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-10",
        "category": "automotive",
        "title": "Catalog Technical Presentation",
        "style_dna": "Commercial • Neutral • Precise",
        "image_direction": "Straight-on automotive product shot on neutral seamless background.",
        "prompt": "Create a clean catalog-style commercial photograph of [YOUR PRODUCT HERE] centered on a neutral seamless studio background. The product must appear proportionally accurate and fully grounded with visible contact shadow. Lighting should be evenly diffused from the front, producing balanced highlights and realistic material behavior. Avoid dramatic effects or artificial glow. Simulate a 70mm lens for a retail-ready presentation. Maintain sharp geometry and undistorted structure. Materials must reflect and absorb light according to real-world physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-01",
        "category": "jewelry",
        "title": "Black Velvet Radiance",
        "style_dna": "Luxury • High Contrast • Refined",
        "image_direction": "Jewelry piece resting on deep black velvet with controlled directional lighting.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] placed on deep black velvet fabric. The jewelry must appear proportionally accurate and physically grounded, with realistic contact shadow conforming to the fabric’s surface. Velvet texture must respond naturally to light with subtle depth variation, not appearing artificial or overly smooth. Lighting should be directional from the upper side to create controlled sparkle on gemstones and accurate highlight roll-off on metal surfaces without exaggerated shine. Avoid artificial glow or fantasy reflections. Simulate a 100mm macro lens with shallow depth of field, ensuring sharp focus on primary details while background softly transitions to blur. Gemstone facets must remain geometrically precise and physically plausible. Metal reflectivity must obey real-world optical behavior.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-02",
        "category": "jewelry",
        "title": "White Marble Elegance",
        "style_dna": "Clean • Premium • Editorial",
        "image_direction": "Jewelry positioned on white marble surface with soft diffused lighting.",
        "prompt": "Create a premium commercial photograph of [YOUR PRODUCT HERE] placed on a refined white marble surface. The marble must display realistic vein texture and subtle light reflection. The jewelry must appear physically stable with accurate contact shadow and correct scale relative to the surface. Lighting should be soft and diffused from the front-left direction to create balanced highlights on gemstones and natural metallic reflections. Avoid exaggerated sparkle or artificial glow. Simulate an 85mm lens at eye level with shallow depth of field. Gemstone transparency and refraction must follow realistic optical physics. Metal edges must remain sharp and geometrically precise.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-03",
        "category": "jewelry",
        "title": "Diamond Macro Precision",
        "style_dna": "Macro • Detail • Precision",
        "image_direction": "Extreme close-up of gemstone facet with controlled lighting.",
        "prompt": "Create a macro commercial photograph focusing closely on [YOUR PRODUCT HERE], emphasizing gemstone facet precision and metal prong structure. The piece must remain geometrically accurate and proportionally correct. Lighting should be directional to highlight facet definition without exaggerated sparkle or unrealistic dispersion. Simulate a 105mm macro lens with shallow depth of field, keeping focal details sharp while background softly blurs. Refraction and reflection inside the gemstone must obey physical optical behavior. Avoid artificial glow or distortion. Metal surfaces must exhibit realistic polish and reflection control.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-04",
        "category": "jewelry",
        "title": "Warm Interior Luxury",
        "style_dna": "Lifestyle • Elegant • Warm",
        "image_direction": "Jewelry placed on wooden surface with warm ambient lighting.",
        "prompt": "Create a refined lifestyle commercial image of [YOUR PRODUCT HERE] placed on a polished wooden surface within a softly lit interior. The jewelry must remain the focal point and appear proportionally accurate with realistic contact shadow. Lighting should simulate warm ambient interior light with gentle highlight transitions and natural shadow falloff. Avoid cinematic exaggeration or artificial bloom. Simulate an 85mm lens with shallow depth of field. Wood grain must behave realistically under light. Metal and gemstone surfaces must reflect light according to physical laws.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-05",
        "category": "jewelry",
        "title": "Platinum Studio Contrast",
        "style_dna": "Modern • Minimal • Sharp",
        "image_direction": "Jewelry on matte gray seamless background with directional lighting.",
        "prompt": "Create a clean studio commercial photograph of [YOUR PRODUCT HERE] positioned on a matte gray seamless surface. The jewelry must appear physically grounded with visible contact shadow and accurate scale. Lighting should be directional yet controlled, creating crisp metallic edges and natural highlight roll-off without exaggerated reflections. Simulate a 90mm lens at eye level with shallow depth of field. Metal surfaces must display realistic reflectivity. Gemstones must remain optically accurate and geometrically stable.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-06",
        "category": "jewelry",
        "title": "Engagement Ring Focus",
        "style_dna": "Romantic • Detailed • Clean",
        "image_direction": "Close-up engagement ring on soft neutral surface.",
        "prompt": "Create a refined macro photograph of [YOUR PRODUCT HERE] positioned on a soft neutral surface. The ring must appear proportionally accurate with visible contact shadow and realistic weight distribution. Lighting should be soft and directional to emphasize gemstone clarity and band curvature without artificial sparkle. Simulate a 100mm macro lens with shallow depth of field. Metal polish and gemstone facets must obey real optical physics. Avoid distortion or exaggerated shine.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-07",
        "category": "jewelry",
        "title": "Glossy Display Stand",
        "style_dna": "Retail • Premium • Balanced",
        "image_direction": "Jewelry displayed on glossy black acrylic stand.",
        "prompt": "Create a commercial retail-style image of [YOUR PRODUCT HERE] placed on a glossy black acrylic stand. The reflection must remain physically plausible and aligned with perspective. The jewelry must appear proportionally accurate and firmly grounded. Lighting should be soft and controlled to avoid unrealistic glare. Simulate an 85mm lens for balanced framing. Acrylic and metal surfaces must respond to light realistically.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-08",
        "category": "jewelry",
        "title": "Rose Gold Editorial Soft",
        "style_dna": "Warm • Feminine • Elegant",
        "image_direction": "Rose gold jewelry on blush-toned surface with diffused light.",
        "prompt": "Create a refined editorial image of [YOUR PRODUCT HERE] placed on a blush-toned surface. The jewelry must remain geometrically precise and proportionally accurate. Lighting should be diffused and soft to enhance warm metallic tones without artificial glow. Simulate an 85mm lens with shallow depth of field. Rose gold reflections must obey real-world light behavior. Avoid distortion or unrealistic shine.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-09",
        "category": "jewelry",
        "title": "Stone Texture Contrast",
        "style_dna": "Rustic • Natural • Textural",
        "image_direction": "Jewelry placed on textured natural stone surface.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] positioned on a textured natural stone surface. The jewelry must appear correctly scaled and grounded with realistic contact shadow. Lighting should be directional to emphasize contrast between stone texture and polished metal without artificial glow. Simulate a 90mm lens at eye level. Stone grain must remain realistic. Metal and gemstone materials must respond accurately to light.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-10",
        "category": "jewelry",
        "title": "Clean Catalog Presentation",
        "style_dna": "Commercial • Neutral • Precise",
        "image_direction": "Straight-on jewelry shot on seamless neutral background.",
        "prompt": "Create a clean catalog-style commercial photograph of [YOUR PRODUCT HERE] centered on a neutral seamless studio background. The jewelry must appear proportionally accurate and fully grounded with visible contact shadow. Lighting should be evenly diffused to produce balanced highlights and realistic material behavior. Avoid dramatic effects or artificial glow. Simulate a 70mm lens for a retail-ready presentation. Maintain sharp geometry and undistorted structure. Materials must reflect and refract light according to real-world physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "fas-01",
        "category": "fashion",
        "title": "Editorial Studio Minimal",
        "style_dna": "Clean • Modern • Commercial",
        "image_direction": "Fashion product centered on neutral seamless background with soft studio lighting.",
        "prompt": "Create a high-end commercial studio photograph of [YOUR PRODUCT HERE] displayed on a neutral seamless background. The product must appear proportionally accurate and physically grounded with visible contact shadow. Fabric texture must behave realistically under soft diffused lighting, showing accurate folds, stitching, and material density. Lighting should be frontal and slightly directional to define structure without harsh contrast or artificial glow. Simulate an 85mm commercial lens at eye level with shallow depth of field. Avoid surreal distortions, exaggerated wrinkles, or warped seams. Materials such as cotton, leather, denim, silk, or synthetic fabrics must reflect or absorb light according to real-world physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate fabric physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nFabric must respond to gravity and tension naturally.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "fas-02",
        "category": "fashion",
        "title": "On-Model Editorial Precision",
        "style_dna": "Premium • Structured • Realistic",
        "image_direction": "Fashion item worn naturally by model in controlled studio lighting.",
        "prompt": "Create a premium editorial photograph of [YOUR PRODUCT HERE] worn naturally by a model in a clean studio environment. The garment must fit proportionally correct with realistic tension lines and natural gravity-driven folds. No distortion or warped stitching. Lighting should be soft yet directional, revealing texture without artificial bloom. Simulate an 85mm portrait lens with shallow depth of field. Skin tones must remain natural. Fabric drape must obey real-world physics. Avoid unrealistic smoothness or exaggerated shine.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate fabric physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nFabric must respond to gravity and tension naturally.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens."
    },
    {
        "id": "fas-03",
        "category": "fashion",
        "title": "Luxury Fabric Macro Detail",
        "style_dna": "Textural • Detailed • Refined",
        "image_direction": "Close-up macro of fabric texture and stitching precision.",
        "prompt": "Create a macro commercial photograph focusing on the material detail of [YOUR PRODUCT HERE]. The fabric texture must appear realistic, showing weave pattern, stitching precision, and structural density. Simulate a 100mm macro lens with shallow depth of field. Lighting should be directional to emphasize texture without exaggerating contrast. Threads and seams must remain geometrically correct. Avoid artificial sharpness or distortion.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate fabric physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nFabric fibers must respond to light naturally.\nDepth of field must match the chosen lens."
    },
    {
        "id": "fas-04",
        "category": "fashion",
        "title": "Streetwear Natural Context",
        "style_dna": "Urban • Balanced • Realistic",
        "image_direction": "Fashion product photographed outdoors in natural daylight.",
        "prompt": "Create a realistic lifestyle image of [YOUR PRODUCT HERE] photographed in a natural urban environment. The garment must appear proportionally correct and naturally worn. Lighting should simulate soft daylight with accurate shadow direction and realistic highlight roll-off. Avoid cinematic exaggeration. Simulate an 85mm lens with shallow depth of field. Fabric must react naturally to wind and gravity without unnatural stretching or distortion.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate fabric physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos\n• No unrealistic reflections\n\nLighting must behave according to real-world outdoor physics."
    },
    {
        "id": "fas-05",
        "category": "fashion",
        "title": "Luxury Leather Precision",
        "style_dna": "Structured • Premium • Textured",
        "image_direction": "Leather fashion product under controlled directional lighting.",
        "prompt": "Create a premium commercial image of [YOUR PRODUCT HERE] featuring leather material. The leather must display realistic grain texture and natural light absorption. The product must appear proportionally accurate and physically grounded with visible contact shadow. Lighting should be directional to highlight edges and contours without artificial shine. Simulate a 90mm lens with shallow depth of field. Avoid warped stitching or unrealistic gloss.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate leather physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos\n• No unrealistic reflections."
    },
    {
        "id": "fas-06",
        "category": "fashion",
        "title": "Denim Structure Focus",
        "style_dna": "Raw • Textural • Authentic",
        "image_direction": "Denim product photographed with emphasis on stitching and grain.",
        "prompt": "Create a high-end commercial image of [YOUR PRODUCT HERE] with emphasis on denim texture and seam construction. The denim must show realistic fiber pattern and natural color variation. Stitching must be geometrically consistent and proportionally accurate. Lighting should be soft yet directional to reveal texture depth. Simulate an 85mm lens at eye level. Avoid artificial saturation or unrealistic texture enhancement.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate fabric physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos."
    },
    {
        "id": "fas-07",
        "category": "fashion",
        "title": "Floating Clean Display",
        "style_dna": "Modern • Minimal • Structured",
        "image_direction": "Fashion product suspended realistically with subtle support shadow.",
        "prompt": "Create a clean commercial image of [YOUR PRODUCT HERE] suspended in a minimal studio setting. The garment must appear naturally structured with gravity-driven folds and subtle support shadow indicating realistic positioning. Avoid unrealistic floating artifacts. Lighting should be diffused and balanced, emphasizing structure without harsh contrast. Simulate an 85mm lens. Fabric must behave according to real-world physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have accurate proportions, realistic fabric behavior, natural shadow physics, and no artificial glow."
    },
    {
        "id": "fas-08",
        "category": "fashion",
        "title": "Luxury Accessories Focus",
        "style_dna": "Refined • Close-Up • Detailed",
        "image_direction": "Close-up of accessory (bag, belt, shoe) on textured surface.",
        "prompt": "Create a premium close-up commercial image of [YOUR PRODUCT HERE] emphasizing accessory craftsmanship. Materials such as leather, metal hardware, or textile must respond to light realistically. The product must appear proportionally accurate and physically grounded. Lighting should be directional yet controlled. Simulate a 90mm lens with shallow depth of field. Avoid distortion or exaggerated shine.\n\nMaintain real-world material physics and geometric precision."
    },
    {
        "id": "fas-09",
        "category": "fashion",
        "title": "Runway Editorial Balance",
        "style_dna": "High Fashion • Editorial • Clean",
        "image_direction": "Fashion piece captured mid-walk with natural motion blur control.",
        "prompt": "Create an editorial runway-style photograph of [YOUR PRODUCT HERE] worn naturally in motion. Motion blur must be subtle and physically accurate. Fabric movement must obey gravity and air resistance realistically. Lighting should be soft and balanced, not cinematic. Simulate an 85mm lens with shallow depth of field. Avoid warped limbs, distorted seams, or unrealistic fabric flow.\n\nMaintain strict geometric and physical realism."
    },
    {
        "id": "fas-10",
        "category": "fashion",
        "title": "Catalog Front View Precision",
        "style_dna": "Retail • Neutral • Structured",
        "image_direction": "Straight-on fashion product shot centered on white seamless background.",
        "prompt": "Create a clean catalog-style commercial photograph of [YOUR PRODUCT HERE] centered on a white seamless background. The garment must appear proportionally accurate and symmetrically aligned. Lighting should be evenly diffused from the front to minimize harsh shadow while maintaining structure. Avoid artificial glow or exaggerated contrast. Simulate a 70mm lens for retail-ready presentation. Maintain geometric precision and realistic fabric behavior.\n\nThe product must appear physically grounded with visible contact shadow and accurate scale."
    },
    {
        "id": "fnb-01",
        "category": "food_beverage",
        "title": "Hero Table Natural Light",
        "style_dna": "Commercial • Appetizing • Realistic",
        "image_direction": "Food product placed on wooden table with soft natural window light.",
        "prompt": "Create a high-end commercial food photograph of [YOUR PRODUCT HERE] placed on a natural wooden table near a soft window light source. The food must appear freshly prepared with realistic moisture, texture, and weight. Surface reflections must behave naturally without artificial gloss. Steam, if present, must be subtle and physically plausible. Lighting should come from one side, creating soft shadow falloff and gentle highlight transitions. Simulate an 85mm lens at table height with shallow depth of field. Avoid CGI plastic appearance, over-saturation, or unrealistic symmetry. Ingredients must look natural and imperfect in a believable way.\n\nYou are generating a real commercial food photograph.\n\nThe product is a real edible item inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• Realistic texture and moisture\n• Natural shadow behavior\n• Correct light falloff\n• No plastic surfaces\n• No artificial glow\n• No unrealistic reflections\n• No floating ingredients\n• No warped geometry\n• No hyper-saturation\n\nLighting must behave according to real-world physics.\nSteam, condensation, and gloss must be subtle and believable.\nDepth of field must match the lens choice.\nThe food must look edible and physically present."
    },
    {
        "id": "fnb-02",
        "category": "food_beverage",
        "title": "Macro Texture Detail",
        "style_dna": "Close • Detailed • Sensory",
        "image_direction": "Macro close-up showing texture of food surface.",
        "prompt": "Create a macro commercial photograph focusing closely on the texture of [YOUR PRODUCT HERE]. The surface must show realistic pores, crumbs, fibers, glaze, or liquid behavior depending on the product. Simulate a 100mm macro lens with shallow depth of field. Lighting should be directional to emphasize micro-texture without exaggeration. Avoid plastic shine or artificial contrast. Moisture must appear natural and subtle. The product must look edible and physically tangible.\n\nMaintain real-world food physics and natural imperfection."
    },
    {
        "id": "fnb-03",
        "category": "food_beverage",
        "title": "Cold Beverage Condensation",
        "style_dna": "Fresh • Clean • Refreshing",
        "image_direction": "Cold beverage with realistic condensation on glass surface.",
        "prompt": "Create a premium beverage photograph of [YOUR PRODUCT HERE] served in a realistic glass container. Condensation droplets must be physically plausible, randomly distributed, and naturally sized. Glass transparency and refraction must follow real optical physics. Lighting should be soft yet directional to highlight liquid clarity without artificial glow. Simulate an 85mm lens at eye level. Avoid unrealistic symmetry or exaggerated shine. The beverage must look refreshing and physically present.\n\nMaintain realistic liquid density, reflection, and shadow behavior."
    },
    {
        "id": "fnb-04",
        "category": "food_beverage",
        "title": "Overhead Flat Lay Composition",
        "style_dna": "Clean • Balanced • Editorial",
        "image_direction": "Top-down view of food product on textured surface.",
        "prompt": "Create a high-end flat lay photograph of [YOUR PRODUCT HERE] viewed directly from above. The composition must feel balanced and natural, not overly symmetrical. Surface textures such as linen, marble, or wood must behave realistically under soft diffused lighting. Shadows must be subtle and directional. Simulate a 50mm lens top-down perspective. Avoid unrealistic color grading or artificial gloss. Ingredients must appear naturally arranged.\n\nThe product must look edible and physically grounded."
    },
    {
        "id": "fnb-05",
        "category": "food_beverage",
        "title": "Dark Mood Culinary Contrast",
        "style_dna": "Moody • Contrast • Gourmet",
        "image_direction": "Food photographed on dark surface with directional low-key lighting.",
        "prompt": "Create a premium low-key food photograph of [YOUR PRODUCT HERE] placed on a dark matte surface. Lighting should be directional and controlled to create dramatic yet realistic contrast without losing detail. Highlights must be natural, not glossy. Simulate an 85mm lens with shallow depth of field. Avoid artificial glow or extreme saturation. The food must look gourmet and physically tangible.\n\nMaintain realistic texture, moisture, and shadow physics."
    },
    {
        "id": "fnb-06",
        "category": "food_beverage",
        "title": "Fresh Ingredient Context",
        "style_dna": "Natural • Organic • Authentic",
        "image_direction": "Food product surrounded by raw natural ingredients.",
        "prompt": "Create a commercial photograph of [YOUR PRODUCT HERE] presented alongside fresh raw ingredients. All elements must appear proportionally accurate and physically grounded. Ingredients should show natural imperfections and varied texture. Lighting should simulate soft daylight with realistic shadow direction. Avoid artificial gloss or hyper-saturation. Simulate an 85mm lens with shallow depth of field.\n\nMaintain natural color science and realistic moisture behavior."
    },
    {
        "id": "fnb-07",
        "category": "food_beverage",
        "title": "Pour Action Freeze Frame",
        "style_dna": "Dynamic • Crisp • Realistic",
        "image_direction": "Liquid being poured realistically into container.",
        "prompt": "Create a high-end action food photograph of [YOUR PRODUCT HERE] being poured naturally into a container. The liquid must obey gravity and fluid dynamics realistically. Splash and droplets must be physically plausible and not exaggerated. Lighting should be directional to freeze motion without artificial glow. Simulate a high shutter speed with 85mm lens perspective. Avoid unrealistic splash shapes or symmetry.\n\nMaintain real-world liquid physics and accurate shadow behavior."
    },
    {
        "id": "fnb-08",
        "category": "food_beverage",
        "title": "Packaging Hero Presentation",
        "style_dna": "Retail • Clean • Commercial",
        "image_direction": "Food product packaging centered on neutral background.",
        "prompt": "Create a clean commercial packaging photograph of [YOUR PRODUCT HERE] on a neutral seamless background. Packaging must appear proportionally accurate and physically grounded. Printed labels must be sharp and undistorted. Lighting should be evenly diffused from the front with soft shadow beneath the product. Avoid artificial reflections or warped packaging. Simulate a 70mm commercial lens.\n\nMaintain realistic material behavior and geometric precision."
    },
    {
        "id": "fnb-09",
        "category": "food_beverage",
        "title": "Warm Bakery Freshness",
        "style_dna": "Warm • Inviting • Natural",
        "image_direction": "Baked product photographed with warm ambient light.",
        "prompt": "Create a warm, inviting food photograph of [YOUR PRODUCT HERE] with soft ambient lighting. The product must show realistic crumb texture, crust detail, and subtle steam if applicable. Lighting should be warm but not oversaturated. Simulate an 85mm lens with shallow depth of field. Avoid artificial gloss or plastic appearance.\n\nMaintain natural shadow transitions and edible realism."
    },
    {
        "id": "fnb-10",
        "category": "food_beverage",
        "title": "Clean Beverage Studio Shot",
        "style_dna": "Minimal • Fresh • Retail",
        "image_direction": "Straight-on beverage product shot on seamless white background.",
        "prompt": "Create a clean commercial beverage photograph of [YOUR PRODUCT HERE] centered on a white seamless background. The container must appear geometrically accurate and proportionally correct. Glass or plastic transparency must follow realistic optical physics. Lighting should be evenly diffused to minimize harsh shadows while maintaining dimensionality. Avoid artificial glow or exaggerated condensation.\n\nThe product must appear refreshing, physically grounded, and commercially viable."
    },
    {
        "id": "home-01",
        "category": "home_decor",
        "title": "Modern Living Room Integration",
        "style_dna": "Minimal • Balanced • Architectural",
        "image_direction": "Decor product integrated naturally in modern living room with soft daylight.",
        "prompt": "Create a high-end editorial interior photograph of [YOUR PRODUCT HERE] naturally integrated inside a modern living room. The object must appear proportionally accurate relative to furniture and architecture. Lighting should simulate soft natural window daylight entering from one side, producing realistic shadow direction and gentle light falloff. Materials such as wood, ceramic, fabric, glass, or metal must respond to light according to real-world physics. Avoid artificial glow, exaggerated contrast, or unrealistic reflections. Simulate a 50mm lens at eye level with subtle depth of field. All perspective lines must remain straight and geometrically correct.\n\nYou are generating a real architectural interior photograph.\n\nThe product is a physical decor object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• Correct scale relative to furniture\n• Realistic material physics\n• Natural shadow behavior\n• Accurate light falloff\n• No warped perspective\n• No floating objects\n• No artificial glow\n• No distorted geometry\n• No exaggerated reflections\n\nLighting must behave according to real interior physics.\nThe object must feel physically present in the room."
    },
    {
        "id": "home-02",
        "category": "home_decor",
        "title": "Tabletop Styling Editorial",
        "style_dna": "Soft • Refined • Styled",
        "image_direction": "Decor object styled on wooden or marble tabletop with diffused light.",
        "prompt": "Create a refined editorial tabletop photograph of [YOUR PRODUCT HERE] styled naturally on a wooden or marble surface. The object must appear proportionally accurate and physically grounded with visible contact shadow. Lighting should be soft and diffused from one direction, emphasizing texture without artificial shine. Simulate an 85mm lens with shallow depth of field. Surface materials must behave realistically under light. Avoid CGI plastic appearance or exaggerated smoothness.\n\nMaintain natural imperfection and believable interior styling."
    },
    {
        "id": "home-03",
        "category": "home_decor",
        "title": "Wall Decor Architectural Precision",
        "style_dna": "Clean • Structured • Symmetrical",
        "image_direction": "Wall decor mounted realistically on interior wall.",
        "prompt": "Create a high-end architectural photograph of [YOUR PRODUCT HERE] mounted on a neutral interior wall. The object must be geometrically aligned and proportionally correct. Wall texture must respond naturally to light. Lighting should simulate indirect daylight with soft shadows. Simulate a 50mm lens at eye height. Avoid warped perspective, artificial glow, or unrealistic symmetry.\n\nThe decor piece must appear securely mounted and physically present."
    },
    {
        "id": "home-04",
        "category": "home_decor",
        "title": "Ceramic & Texture Close-Up",
        "style_dna": "Textural • Organic • Refined",
        "image_direction": "Macro detail of ceramic or textured decor surface.",
        "prompt": "Create a macro commercial photograph focusing on the surface texture of [YOUR PRODUCT HERE]. Ceramic glaze, matte finish, or fabric weave must behave realistically under directional light. Simulate a 100mm macro lens with shallow depth of field. Lighting should highlight texture depth without artificial shine. Avoid distortion or unrealistic smoothing.\n\nMaintain true material realism and scale accuracy."
    },
    {
        "id": "home-05",
        "category": "home_decor",
        "title": "Luxury Bedroom Context",
        "style_dna": "Calm • Elegant • Natural",
        "image_direction": "Decor product integrated into soft bedroom setting.",
        "prompt": "Create a premium interior photograph of [YOUR PRODUCT HERE] naturally placed within a bedroom environment. The object must be proportionally accurate relative to bed, linens, and surrounding furniture. Lighting should simulate soft morning daylight entering from a window. Fabric textures must behave naturally under light. Simulate a 50mm lens with shallow depth of field. Avoid artificial glow or unrealistic shadow directions.\n\nThe product must feel integrated and physically grounded."
    },
    {
        "id": "home-06",
        "category": "home_decor",
        "title": "Natural Wood & Earth Tone Styling",
        "style_dna": "Organic • Warm • Textured",
        "image_direction": "Decor piece styled with natural wood and neutral tones.",
        "prompt": "Create a high-end interior styling photograph of [YOUR PRODUCT HERE] combined with natural wood and earth-tone elements. Lighting should be soft and directional, creating warm highlight transitions. Wood grain must remain realistic. The decor object must appear proportionally accurate and grounded with visible contact shadow. Simulate an 85mm lens. Avoid hyper-saturation or unrealistic glow.\n\nMaintain natural realism and balanced composition."
    },
    {
        "id": "home-07",
        "category": "home_decor",
        "title": "Modern Minimal Catalog Shot",
        "style_dna": "Retail • Neutral • Structured",
        "image_direction": "Straight-on decor product shot on neutral seamless background.",
        "prompt": "Create a clean catalog-style commercial photograph of [YOUR PRODUCT HERE] centered on a neutral seamless background. The object must be proportionally accurate and physically grounded with visible contact shadow. Lighting should be evenly diffused from the front. Avoid artificial glow or dramatic contrast. Simulate a 70mm lens for retail-ready presentation.\n\nMaintain geometric precision and realistic material behavior."
    },
    {
        "id": "home-08",
        "category": "home_decor",
        "title": "Glass & Reflection Control",
        "style_dna": "Precise • Clean • Balanced",
        "image_direction": "Glass decor object with controlled reflections.",
        "prompt": "Create a high-end commercial image of [YOUR PRODUCT HERE] made of glass or reflective material. Reflections must obey real optical physics and perspective alignment. Lighting should be controlled and diffused to avoid unrealistic glare. Simulate an 85mm lens with shallow depth of field. The object must appear proportionally accurate and grounded.\n\nAvoid artificial bloom, distortion, or unrealistic reflections."
    },
    {
        "id": "home-09",
        "category": "home_decor",
        "title": "Outdoor Patio Context",
        "style_dna": "Natural • Airy • Realistic",
        "image_direction": "Decor product placed in outdoor patio environment with natural light.",
        "prompt": "Create a realistic outdoor photograph of [YOUR PRODUCT HERE] placed within a patio or terrace setting. Lighting should simulate natural daylight with correct shadow direction and light falloff. Materials must respond to light according to real-world physics. Simulate a 50mm lens at eye level. Avoid cinematic exaggeration or artificial glow.\n\nThe object must appear stable and proportionally accurate within the environment."
    },
    {
        "id": "home-10",
        "category": "home_decor",
        "title": "Styled Shelf Composition",
        "style_dna": "Editorial • Balanced • Natural",
        "image_direction": "Decor product placed naturally on interior shelf with layered depth.",
        "prompt": "Create a refined editorial interior photograph of [YOUR PRODUCT HERE] styled naturally on a shelf among complementary decor elements. The object must remain the focal point and proportionally accurate. Lighting should be soft and directional with realistic shadow layering. Simulate an 85mm lens with shallow depth of field. Avoid artificial symmetry, distortion, or exaggerated shine.\n\nMaintain realistic depth, scale, and material behavior."
    },
    {
        "id": "tech-01",
        "category": "tech",
        "title": "Clean Studio Device Presentation",
        "style_dna": "Minimal • Precision • Commercial",
        "image_direction": "Tech device centered on neutral seamless background with diffused lighting.",
        "prompt": "Create a high-end commercial studio photograph of [YOUR PRODUCT HERE] centered on a neutral seamless background. The device must be geometrically precise with perfectly straight edges and correct proportions. Lighting should be evenly diffused from the front with subtle directional shaping to define edges without artificial glow. Screen surfaces must display realistic glass reflectivity and accurate light falloff. Avoid unrealistic bloom, warped UI, or exaggerated shine. Simulate a 70mm commercial lens at eye level. Reflections must obey real optical physics and align with perspective. The device must appear physically grounded with visible contact shadow.\n\nYou are generating a real commercial tech product photograph.\n\nThe product is a physical electronic device inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• Perfect geometric accuracy\n• Realistic material physics\n• Correct screen reflection behavior\n• Natural shadow physics\n• No warped edges\n• No floating elements\n• No artificial glow\n• No distorted UI\n• No unrealistic reflections\n\nLighting must behave according to real studio physics.\nGlass, metal, and plastic must reflect light correctly.\nPerspective must remain optically accurate."
    },
    {
        "id": "tech-02",
        "category": "tech",
        "title": "Floating Precision Rendered Realism",
        "style_dna": "Modern • Balanced • Structured",
        "image_direction": "Tech device suspended realistically with subtle shadow beneath.",
        "prompt": "Create a premium commercial photograph of [YOUR PRODUCT HERE] suspended in a clean studio environment. The device must appear proportionally accurate and geometrically perfect. A subtle grounding shadow must exist beneath the product to indicate realistic depth. Lighting should be soft and directional, emphasizing structural edges without artificial glow. Simulate an 85mm lens with shallow depth of field. Screen surfaces must display physically plausible reflections. Avoid unrealistic symmetry, distortion, or hyper-gloss.\n\nMaintain real-world material behavior and optical accuracy."
    },
    {
        "id": "tech-03",
        "category": "tech",
        "title": "Screen UI Precision Control",
        "style_dna": "Sharp • Controlled • Technical",
        "image_direction": "Device with visible UI displayed clearly and proportionally accurate.",
        "prompt": "Create a high-end commercial image of [YOUR PRODUCT HERE] with the screen visible and perfectly aligned. The UI must appear proportionally correct with no warping, stretching, or distortion. Lighting should be soft yet directional to create subtle glass reflections without obscuring the screen content. Simulate an 85mm lens at eye level. Glass must reflect light realistically without artificial bloom. Edges must remain geometrically precise.\n\nThe device must appear physically tangible and professionally photographed."
    },
    {
        "id": "tech-04",
        "category": "tech",
        "title": "Metal & Edge Detail Macro",
        "style_dna": "Macro • Precision • Industrial",
        "image_direction": "Close-up detail of metallic edge and port precision.",
        "prompt": "Create a macro commercial photograph focusing on the metallic edge and construction details of [YOUR PRODUCT HERE]. The metal must show realistic brushed or polished texture. Ports and structural elements must be geometrically accurate. Simulate a 100mm macro lens with shallow depth of field. Lighting should emphasize texture without exaggerated shine. Avoid distortion or artificial glow.\n\nMaintain strict geometric realism and accurate material physics."
    },
    {
        "id": "tech-05",
        "category": "tech",
        "title": "Workspace Integration Context",
        "style_dna": "Professional • Natural • Balanced",
        "image_direction": "Tech device placed naturally on modern desk environment.",
        "prompt": "Create a refined lifestyle photograph of [YOUR PRODUCT HERE] integrated into a modern workspace environment. The device must be proportionally accurate relative to desk objects. Lighting should simulate soft natural daylight entering from one side. Reflections on screen and metal must obey real optical behavior. Simulate a 50mm lens at eye level. Avoid artificial glow or unrealistic symmetry.\n\nThe device must appear functional and physically grounded."
    },
    {
        "id": "tech-06",
        "category": "tech",
        "title": "Dark Mode Studio Contrast",
        "style_dna": "Low-Key • Premium • Structured",
        "image_direction": "Tech device on dark matte surface with directional lighting.",
        "prompt": "Create a premium low-key commercial photograph of [YOUR PRODUCT HERE] placed on a dark matte surface. Lighting should be directional and controlled, emphasizing edges without creating artificial glow. Screen reflections must remain subtle and physically plausible. Simulate an 85mm lens with shallow depth of field. Avoid exaggerated bloom or unrealistic contrast.\n\nMaintain strict material realism and optical accuracy."
    },
    {
        "id": "tech-07",
        "category": "tech",
        "title": "Glass & Reflection Mastery",
        "style_dna": "Refined • Clean • Optical Precision",
        "image_direction": "Device emphasizing glass and reflective surface realism.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] focusing on glass and reflective surfaces. Reflections must align with real-world environmental physics and perspective. Lighting should be diffused yet directional. Simulate an 85mm lens. Avoid artificial glow, distortion, or unrealistic bloom. Geometry must remain perfect and edges straight.\n\nThe device must appear physically manufactured and professionally photographed."
    },
    {
        "id": "tech-08",
        "category": "tech",
        "title": "Hands-On Natural Interaction",
        "style_dna": "Human • Realistic • Balanced",
        "image_direction": "Device naturally held or used by hand with accurate scale.",
        "prompt": "Create a realistic lifestyle photograph of [YOUR PRODUCT HERE] being naturally held or used by a person. The scale between device and hand must be proportionally accurate. Lighting should be soft and natural. Skin tones must remain realistic. Screen reflections must obey real optical physics. Simulate an 85mm lens with shallow depth of field. Avoid warped fingers, distorted UI, or artificial glow.\n\nMaintain true-to-life realism and physical plausibility."
    },
    {
        "id": "tech-09",
        "category": "tech",
        "title": "Exploded Structural Layout",
        "style_dna": "Technical • Clean • Engineering",
        "image_direction": "Controlled exploded view showing component layers with precision.",
        "prompt": "Create a technically accurate exploded view photograph of [YOUR PRODUCT HERE] showing internal layers separated slightly in vertical alignment. All components must remain geometrically precise and proportionally accurate. Lighting should be evenly diffused. Avoid floating inconsistencies or unrealistic spacing. Simulate a 70mm lens. The exploded layout must feel engineered, not artistic.\n\nMaintain strict structural realism and accurate scale."
    },
    {
        "id": "tech-10",
        "category": "tech",
        "title": "Retail Catalog Front Precision",
        "style_dna": "Neutral • Commercial • Structured",
        "image_direction": "Straight-on device shot on white seamless background.",
        "prompt": "Create a clean retail-ready commercial photograph of [YOUR PRODUCT HERE] centered on a white seamless background. The device must appear proportionally accurate with perfectly straight geometry. Lighting should be evenly diffused from the front with subtle grounding shadow beneath. Screen reflections must remain realistic and aligned with perspective. Avoid artificial glow or distortion. Simulate a 70mm lens for catalog presentation.\n\nThe device must appear professionally manufactured and physically present."
    },
    {
        "id": "uni-01",
        "category": "universal",
        "title": "Neutral Studio Precision",
        "style_dna": "Clean • Controlled • Commercial",
        "image_direction": "Product centered on neutral seamless background with diffused lighting.",
        "prompt": "Create a high-end commercial studio photograph of [YOUR PRODUCT HERE] centered on a neutral seamless background. The product must appear proportionally accurate and physically grounded with visible contact shadow. Lighting should be evenly diffused from the front with subtle directional shaping to define structure. Materials must behave according to real-world physics, reflecting or absorbing light correctly. Avoid artificial glow, warped geometry, exaggerated shine, or unrealistic reflections. Simulate a 70mm commercial lens at eye level. Depth of field must be subtle and natural. Perspective must remain geometrically correct.\n\nYou are generating a real commercial product photograph.\n\nThe product is a physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken structure\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nShadows must connect the product to the surface.\nThe object must appear physically tangible."
    },
    {
        "id": "uni-02",
        "category": "universal",
        "title": "Soft Window Editorial",
        "style_dna": "Natural • Balanced • Realistic",
        "image_direction": "Product near window light with soft directional shadow.",
        "prompt": "Create an editorial-style photograph of [YOUR PRODUCT HERE] positioned near a soft window light source. Lighting must simulate natural daylight with realistic shadow direction and smooth highlight transitions. The product must remain proportionally accurate and grounded with visible contact shadow. Avoid exaggerated color grading, artificial bloom, or unrealistic symmetry. Simulate an 85mm lens at eye level with shallow depth of field. Materials must respond to light according to physical laws.\n\nThe object must look photographed, not rendered."
    },
    {
        "id": "uni-03",
        "category": "universal",
        "title": "Dark Matte Contrast",
        "style_dna": "Moody • Controlled • Structured",
        "image_direction": "Product placed on dark matte surface with directional lighting.",
        "prompt": "Create a premium low-key commercial photograph of [YOUR PRODUCT HERE] placed on a dark matte surface. Lighting should be directional and controlled to create contrast while maintaining realistic highlight roll-off. The product must appear physically grounded with visible contact shadow. Avoid artificial glow or exaggerated reflections. Simulate an 85mm lens with shallow depth of field. Materials must behave according to real-world optical physics.\n\nMaintain geometric precision and physical realism."
    },
    {
        "id": "uni-04",
        "category": "universal",
        "title": "Macro Material Focus",
        "style_dna": "Textural • Detailed • Precise",
        "image_direction": "Close-up of product surface texture.",
        "prompt": "Create a macro commercial photograph focusing on the surface detail of [YOUR PRODUCT HERE]. Texture must appear realistic and proportionally accurate. Lighting should emphasize micro-structure without artificial contrast. Simulate a 100mm macro lens with shallow depth of field. Avoid distortion, unrealistic smoothing, or exaggerated shine.\n\nThe product must look physically tangible and precisely manufactured."
    },
    {
        "id": "uni-05",
        "category": "universal",
        "title": "Lifestyle Context Integration",
        "style_dna": "Balanced • Natural • Contextual",
        "image_direction": "Product integrated naturally into environment relevant to its function.",
        "prompt": "Create a realistic lifestyle photograph of [YOUR PRODUCT HERE] integrated naturally into a relevant environment. The product must appear proportionally accurate relative to surrounding elements. Lighting should simulate soft natural daylight with correct shadow direction. Avoid artificial glow or unrealistic reflections. Simulate a 50mm lens at eye level. Materials must behave according to real-world physics.\n\nThe product must feel physically present and naturally placed."
    },
    {
        "id": "uni-06",
        "category": "universal",
        "title": "Minimal Elevated Platform",
        "style_dna": "Modern • Clean • Structured",
        "image_direction": "Product placed on simple elevated platform with diffused lighting.",
        "prompt": "Create a clean commercial image of [YOUR PRODUCT HERE] positioned on a minimal elevated platform. The product must remain geometrically accurate and proportionally correct. Lighting should be diffused yet directional to define edges without artificial glow. Simulate an 85mm lens with shallow depth of field. Avoid unrealistic reflections or exaggerated contrast.\n\nMaintain strict physical realism."
    },
    {
        "id": "uni-07",
        "category": "universal",
        "title": "Reflective Surface Control",
        "style_dna": "Polished • Balanced • Realistic",
        "image_direction": "Product placed on reflective surface with subtle reflection.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] placed on a reflective surface. The reflection must align correctly with perspective and obey real optical physics. The product must appear proportionally accurate and grounded. Lighting should be soft and controlled to avoid artificial glare. Simulate an 85mm lens.\n\nAvoid distortion, bloom, or unrealistic reflection behavior."
    },
    {
        "id": "uni-08",
        "category": "universal",
        "title": "Top-Down Flat Lay Neutral",
        "style_dna": "Editorial • Balanced • Clean",
        "image_direction": "Overhead top-down product shot on neutral surface.",
        "prompt": "Create a high-end flat lay photograph of [YOUR PRODUCT HERE] viewed directly from above. Composition must feel balanced and natural. Surface textures must behave realistically under diffused lighting. Shadows must be subtle and directionally consistent. Simulate a 50mm top-down perspective. Avoid artificial symmetry or hyper-saturation.\n\nMaintain physical plausibility and accurate scale."
    },
    {
        "id": "uni-09",
        "category": "universal",
        "title": "Industrial Realism",
        "style_dna": "Raw • Textured • Authentic",
        "image_direction": "Product placed on concrete or industrial surface.",
        "prompt": "Create a realistic commercial photograph of [YOUR PRODUCT HERE] placed on a textured industrial surface such as concrete or brushed metal. The product must appear proportionally accurate and physically grounded. Lighting should be directional with realistic shadow falloff. Avoid artificial glow or exaggerated shine. Simulate an 85mm lens.\n\nMaintain material authenticity and geometric precision."
    },
    {
        "id": "uni-10",
        "category": "universal",
        "title": "Front Catalog Symmetry",
        "style_dna": "Retail • Neutral • Precise",
        "image_direction": "Straight-on front-facing product shot on white seamless.",
        "prompt": "Create a clean catalog-ready commercial photograph of [YOUR PRODUCT HERE] centered on a white seamless background. The product must be symmetrically aligned with perfect geometric accuracy. Lighting should be evenly diffused from the front with subtle grounding shadow. Avoid artificial glow, distortion, or unrealistic reflections. Simulate a 70mm commercial lens. The object must appear professionally manufactured and physically present.\n\nMaintain strict real-world lighting and material physics."
    }
];

