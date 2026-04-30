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
        "title": "Brilho de Mármore Luxuoso",
        "style_dna": "Premium • Limpo • Editorial",
        "image_direction": "Produto de skincare premium centralizado em mármore branco com iluminação difusa suave e desfoque sutil.",
        "prompt": "Create a high-end commercial photograph featuring [YOUR PRODUCT HERE] placed centrally on a refined white marble surface with natural vein texture. The product must appear proportionally accurate and physically grounded with a soft, realistic contact shadow beneath it. Use a minimal editorial studio environment with controlled negative space to emphasize luxury. Lighting should be soft and diffused from the front-left direction, creating smooth highlight transitions without overexposure. A subtle rim light may separate the product from the background while maintaining realism. Camera perspective should simulate an 85mm commercial lens at eye level with shallow depth of field, keeping the product fully sharp and background gently blurred. Materials such as glass, plastic, or metallic finishes must display accurate reflectivity and light behavior.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-02",
        "category": "cosmetics",
        "title": "Editorial Bege Suave",
        "style_dna": "Quente • Minimalista • Elegante",
        "image_direction": "Produto de skincare em fundo contínuo bege suave com iluminação natural quente.",
        "prompt": "Photograph [YOUR PRODUCT HERE] positioned on a seamless soft beige studio backdrop. The composition should feel warm, minimal, and editorial while maintaining physical realism. The product must be accurately scaled and naturally grounded with a visible contact shadow. Lighting should simulate natural window light entering from the right side, producing soft gradients and realistic highlight transitions across surfaces. Avoid exaggerated glow or unrealistic brightness. Use an 85mm lens simulation at eye level, with shallow depth of field to isolate the product. Surfaces such as frosted glass, matte plastic, or polished metal must display realistic material response. Maintain clean label visibility without distortion.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-03",
        "category": "cosmetics",
        "title": "Contraste de Luxo Escuro",
        "style_dna": "Dramático • Alto Contraste • Premium",
        "image_direction": "Produto cosmético em superfície fosca escura com iluminação lateral controlada.",
        "prompt": "Create a dramatic editorial image of [YOUR PRODUCT HERE] placed on a dark matte surface in a controlled studio environment. The product must appear solid and properly weighted, with realistic contact shadow anchoring it to the surface. Lighting should come from a single directional source on the upper left, producing defined highlights and controlled contrast without blown-out reflections. Add subtle rim light to define the silhouette while preserving natural material response. Simulate a 90mm lens with shallow depth of field, keeping the product sharply in focus. Avoid surreal glow or exaggerated shine. Surface textures must appear authentic.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-04",
        "category": "cosmetics",
        "title": "Precisão de Reflexo em Vidro",
        "style_dna": "Limpo • Reflexivo • Controle de Estúdio",
        "image_direction": "Frasco cosmético em superfície reflexiva sutil com efeito espelho controlado abaixo.",
        "prompt": "Create a premium commercial image of [YOUR PRODUCT HERE] positioned on a lightly reflective studio surface that produces a subtle, physically accurate mirror reflection beneath the product. The reflection must obey correct opacity falloff and perspective alignment, without appearing artificial or overly sharp. The product must be precisely scaled and firmly grounded with a realistic contact shadow. Lighting should be soft and diffused from the front with controlled highlight roll-off across glass or metallic surfaces. Avoid exaggerated shine or unrealistic glow. Use an 85mm commercial lens simulation at eye level with shallow depth of field to keep the product sharp and background softly blurred. Labels must remain legible and undistorted. Surface reflections must respect real-world material physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-05",
        "category": "cosmetics",
        "title": "Moldura Natural Botânica",
        "style_dna": "Orgânico • Fresco • Equilibrado",
        "image_direction": "Produto de skincare próximo a elementos botânicos desfocados com iluminação natural de janela.",
        "prompt": "Photograph [YOUR PRODUCT HERE] placed on a clean neutral surface with softly blurred botanical elements in the background. The greenery must remain secondary and not overpower the product. The product must appear correctly scaled and grounded with a visible contact shadow. Lighting should simulate natural window daylight entering from one side, producing realistic shadow gradients and gentle highlights without artificial bloom. Avoid fantasy lighting or oversaturated tones. Use an 85mm lens simulation with shallow depth of field to isolate the product while maintaining environmental realism. Materials such as frosted glass or matte packaging must display accurate light absorption and reflection behavior. Labels must remain crisp and geometrically stable.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-06",
        "category": "cosmetics",
        "title": "Detalhe de Textura Macro",
        "style_dna": "Detalhe • Texture • Precisao",
        "image_direction": "Close-up extremo da textura superficial cosmética com iluminação lateral direcional.",
        "prompt": "Create a macro commercial photograph focusing closely on [YOUR PRODUCT HERE], emphasizing surface texture, material detail, and structural precision. The product must appear physically solid and properly scaled. Lighting should be directional from the side to highlight micro-texture and edge definition without creating unrealistic glare. Avoid exaggerated shine or distorted highlights. Simulate a 100mm macro lens with shallow depth of field, ensuring the focal area is sharp while background transitions naturally into blur. Surface materials such as glass, cream, or plastic must behave according to real-world physics. No warped geometry or artificial smoothing. Labels must remain proportionally correct and legible.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-07",
        "category": "cosmetics",
        "title": "Estilo de Vida Interior Quente",
        "style_dna": "Lifestyle • Suave • Refinado",
        "image_direction": "Produto cosmético em ambiente interior quente com iluminação ambiente suave.",
        "prompt": "Place [YOUR PRODUCT HERE] naturally within a refined interior environment, such as a vanity or wooden tabletop. The product must remain the clear focal point and appear physically grounded with accurate scale relative to surrounding elements. Lighting should simulate soft ambient interior light with gentle highlight transitions and natural shadow falloff. Avoid cinematic exaggeration or artificial glow effects. Use an 85mm portrait lens simulation with shallow depth of field to subtly blur the background while maintaining context. Materials such as polished glass, matte containers, or metallic lids must exhibit realistic reflectivity and texture. Labels must remain undistorted and clean.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-08",
        "category": "cosmetics",
        "title": "Mínimo Clínico Frio",
        "style_dna": "Clinico • Limpo • Modernoo",
        "image_direction": "Produto de skincare em fundo contínuo branco com iluminação em tons frios.",
        "prompt": "Create a clean, clinical-style commercial photograph of [YOUR PRODUCT HERE] placed on a seamless white surface. The product must be accurately scaled and grounded with a subtle, realistic contact shadow. Lighting should be balanced, cool-toned, and evenly diffused to avoid harsh glare. Avoid overexposure or unrealistic brightness. Simulate a 70mm lens at eye level for a professional catalog feel. Materials must display accurate reflection, refraction, or absorption properties. Keep geometry precise and labels fully legible. The image should feel sterile, minimal, and retail-ready without appearing artificial.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-09",
        "category": "cosmetics",
        "title": "Composição de Plataforma Elevada",
        "style_dna": "Modernoo • Estruturado • Equilibrado",
        "image_direction": "Produto cosmético em pedestal minimalista com iluminação direcional suave.",
        "prompt": "Photograph [YOUR PRODUCT HERE] placed on a minimal pedestal or platform within a neutral studio environment. The product must remain proportionally accurate and visibly grounded on the platform with correct contact shadows. Lighting should be soft and directional, creating subtle dimensionality without unrealistic glow. Avoid exaggerated reflections or fantasy effects. Use an 85mm lens simulation with balanced depth of field to maintain product sharpness while softly separating the background. Materials must behave according to real-world physics, including accurate reflection intensity and edge clarity. Labels must remain crisp and geometrically stable.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "cos-10",
        "category": "cosmetics",
        "title": "Autoridade de Catálogo Limpa",
        "style_dna": "Comercial • Equilibrado • Pronto para Varejo",
        "image_direction": "Foto frontal de produto cosmético em fundo contínuo neutro.",
        "prompt": "Create a retail-ready commercial photograph of [YOUR PRODUCT HERE] isolated on a seamless neutral background. The product must appear precisely centered, proportionally accurate, and fully grounded with a visible contact shadow. Lighting should be evenly diffused from the front, producing balanced highlight transitions and natural material response. Avoid dramatic effects or artistic distortion. Simulate a 70mm lens for a clean catalog aesthetic. Materials such as glass, plastic, or metallic finishes must exhibit realistic reflectivity and edge sharpness. Labels must remain legible and undistorted. The final image should feel precise, commercial, and physically credible.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-01",
        "category": "supplements",
        "title": "Autoridade de Estúdio Atlética",
        "style_dna": "Forte • Limpo • Performance",
        "image_direction": "Frasco de suplemento centralizado em superfície estilo academia com iluminação direcional.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] placed on a matte gym-inspired surface such as dark rubber or textured composite flooring. The product must appear solid, correctly scaled, and fully grounded with a natural contact shadow beneath it. Lighting should be directional from the upper side to create controlled contrast and subtle edge definition without exaggerated shine. Avoid artificial glow or dramatic fantasy lighting. Use an 85mm commercial lens simulation at eye level with shallow depth of field to isolate the product while keeping background textures softly blurred. The container geometry must remain precise, labels fully legible, and packaging structurally accurate. Materials such as plastic, matte labels, or metallic lids must display realistic reflection and light absorption.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-02",
        "category": "supplements",
        "title": "Precisão Clínica Limpa",
        "style_dna": "Minimalista • Scientific • Modernoo",
        "image_direction": "Frasco de suplemento em fundo contínuo branco com iluminação fria e equilibrada.",
        "prompt": "Photograph [YOUR PRODUCT HERE] positioned on a seamless white studio background for a clean, clinical presentation. The container must be accurately scaled and visibly grounded with a subtle contact shadow. Lighting should be evenly diffused with cool tonal balance to create a professional and science-driven atmosphere. Avoid overexposure or unrealistic glare. Simulate a 70mm commercial lens at eye level for a retail-ready composition. Labels must remain sharp, undistorted, and proportionally correct. Materials such as matte plastic, glossy coating, or foil seals must exhibit accurate light behavior and realistic reflectivity.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-03",
        "category": "supplements",
        "title": "Textura Macro em Pó",
        "style_dna": "Detalhe • Texture • Foco em Ingredientes",
        "image_direction": "Close-up de frasco de suplemento com contexto sutil de textura em pó.",
        "prompt": "Create a macro commercial image of [YOUR PRODUCT HERE] emphasizing surface texture and material precision. The product must remain physically stable and correctly scaled. If powder context is included, it must obey realistic gravity behavior and sit naturally on the surface without floating or exaggerated dispersion. Lighting should be directional from the side to highlight texture depth and container geometry without artificial shine. Simulate a 100mm macro lens with shallow depth of field, ensuring the focal area remains crisp and realistic. Labels must stay proportionally accurate and legible.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-04",
        "category": "supplements",
        "title": "Editorial de Performance Escura",
        "style_dna": "Dramático • Intenso • Premium",
        "image_direction": "Frasco de suplemento em superfície fosca escura com iluminação lateral forte.",
        "prompt": "Create a dramatic commercial image of [YOUR PRODUCT HERE] positioned on a dark matte surface in a controlled studio environment. The container must appear physically solid and properly weighted, with accurate contact shadow anchoring it to the surface. Lighting should come from a single directional source to produce defined contrast and subtle edge highlights without unrealistic glare. Avoid exaggerated shine or artificial glow. Use a 90mm lens simulation at eye level with shallow depth of field. Labels must remain sharp and undistorted. Plastic, metallic, or matte finishes must behave according to real-world material physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-05",
        "category": "supplements",
        "title": "Estilo de Vida de Bancada de Cozinha",
        "style_dna": "Natural • Lifestyle • Equilibrado",
        "image_direction": "Frasco de suplemento em bancada de cozinha limpa com iluminação suave de janela.",
        "prompt": "Photograph [YOUR PRODUCT HERE] placed naturally on a clean kitchen countertop with subtle background blur. The product must remain the primary focal point and appear accurately scaled relative to the environment. Lighting should simulate soft daylight entering from a window, producing realistic shadow gradients and natural highlight transitions. Avoid cinematic exaggeration or artificial glow. Use an 85mm lens simulation to maintain product sharpness while softly blurring the background. Packaging must retain precise geometry and legible labels. Materials must reflect and absorb light realistically.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-06",
        "category": "supplements",
        "title": "Foco em Plataforma Reflexiva",
        "style_dna": "Modernoo • Estruturado • Limpo",
        "image_direction": "Suplemento em superfície reflexiva sutil com efeito espelho controlado.",
        "prompt": "Create a premium studio photograph of [YOUR PRODUCT HERE] placed on a lightly reflective surface. The reflection must appear physically plausible with correct opacity and perspective alignment. The container must remain proportionally accurate and fully grounded with visible contact shadow. Lighting should be soft and balanced, avoiding artificial bloom or exaggerated highlights. Use an 85mm lens simulation for a refined commercial composition. Labels must remain crisp and undistorted. Materials such as glossy plastic or metallic caps must exhibit realistic reflection behavior.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-07",
        "category": "supplements",
        "title": "Equilíbrio de Contexto de Ingredientes",
        "style_dna": "Limpo • Contextual • Realista",
        "image_direction": "Frasco de suplemento com elementos de ingredientes em foco suave.",
        "prompt": "Photograph [YOUR PRODUCT HERE] with subtle ingredient context placed nearby in soft focus. The ingredients must appear naturally positioned and proportionally accurate, not floating or exaggerated. The supplement container must remain fully grounded with realistic shadow contact. Lighting should be soft and diffused from one side to create dimensionality without artificial glow. Simulate an 85mm lens with shallow depth of field to isolate the product while maintaining context. Labels must remain legible and geometrically stable. Materials must display realistic light interaction.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-08",
        "category": "supplements",
        "title": "Mínimo de Performance Frio",
        "style_dna": "Modernoo • Equilibrado • Atletico",
        "image_direction": "Frasco de suplemento em fundo contínuo cinza frio com iluminação suave.",
        "prompt": "Create a commercial image of [YOUR PRODUCT HERE] isolated on a cool gray seamless studio background. The container must appear proportionally accurate and fully grounded with subtle contact shadow. Lighting should be evenly diffused to create balanced highlights without artificial shine. Avoid surreal or dramatic effects. Simulate a 70mm lens for a clean, retail-ready composition. Labels must remain sharp and undistorted. Materials such as matte plastic or metallic lids must exhibit realistic reflectivity and edge precision.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-09",
        "category": "supplements",
        "title": "Precisão de Rótulo Macro",
        "style_dna": "Detalhe • Comercial • Nitido",
        "image_direction": "Close-up do rótulo do suplemento com tipografia nítida e iluminação realista.",
        "prompt": "Create a macro commercial photograph focusing closely on the label and structural details of [YOUR PRODUCT HERE]. The container must remain geometrically accurate and proportionally correct. Lighting should be directional yet controlled, highlighting typography and material finish without glare or distortion. Simulate a 100mm macro lens with shallow depth of field to isolate the focal area. Ensure text remains sharp and undistorted. Materials such as matte or glossy coatings must respond to light realistically.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "sup-10",
        "category": "supplements",
        "title": "Foto Limpa de Catálogo de Varejo",
        "style_dna": "Comercial • Preciso • Neutro",
        "image_direction": "Foto frontal do frasco de suplemento em fundo contínuo neutro.",
        "prompt": "Create a retail-ready commercial photograph of [YOUR PRODUCT HERE] centered on a neutral seamless background. The container must appear accurately scaled and fully grounded with visible contact shadow. Lighting should be evenly diffused from the front to produce balanced highlights and realistic material response. Avoid dramatic styling or artificial glow. Simulate a 70mm lens for a clean catalog aesthetic. Labels must remain legible and undistorted. Packaging geometry must stay precise and physically credible.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-01",
        "category": "branding",
        "title": "Mockup de Superfície de Logo Premium",
        "style_dna": "Minimalista • Corporativo • Limpo",
        "image_direction": "Logo da marca em relevo em parede fosca com iluminação direcional suave.",
        "prompt": "Create a high-end commercial branding image featuring [YOUR PRODUCT HERE] represented as a premium logo or brand mark applied onto a matte wall surface. The logo must appear physically embedded or embossed with realistic depth and shadow contact. Lighting should be directional from the upper side, creating natural shadow falloff along edges without artificial glow or exaggerated contrast. The surface texture must remain realistic, with subtle wall imperfections visible under light. Simulate an 85mm commercial lens at eye level with shallow depth of field for refined presentation. Edges of the logo must be geometrically precise and free from distortion. Avoid floating elements or unrealistic shine. Materials must respond to light accurately according to their finish.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-02",
        "category": "branding",
        "title": "Autoridade de Sinalização Metálica",
        "style_dna": "Corporativo • Industrial • Premium",
        "image_direction": "Placa metálica da marca em parede de concreto com iluminação controlada.",
        "prompt": "Create a commercial branding photograph of [YOUR PRODUCT HERE] represented as metallic signage mounted onto a concrete or stone wall. The sign must appear physically attached with realistic mounting depth and natural contact shadows. Lighting should be directional and controlled to emphasize metallic edges without producing unrealistic reflections or artificial glow. Simulate a 90mm lens at eye level to capture accurate scale and perspective. The wall surface must display authentic texture, and the metallic finish must reflect light according to real-world physics. No distortion of logo geometry is allowed. Edges must remain sharp and proportionally correct.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-03",
        "category": "branding",
        "title": "Detalhe de Textura de Cartão de Visita",
        "style_dna": "Elegante • Texture • Close-Up",
        "image_direction": "Foto macro da marca impressa em cartão de visita texturizado.",
        "prompt": "Create a macro commercial photograph of [YOUR PRODUCT HERE] represented as branding printed on a textured business card. The card must appear physically resting on a flat surface with accurate contact shadow. Lighting should be directional to emphasize paper grain and embossing detail without glare. Simulate a 100mm macro lens with shallow depth of field, ensuring crisp typography and precise geometry. Ink and embossing must display realistic material behavior and light absorption. No warped text or floating effects. Maintain proportional accuracy of the printed design.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-04",
        "category": "branding",
        "title": "Flatlay de Papelaria Minimalista",
        "style_dna": "Limpo • Estruturado • Corporativo",
        "image_direction": "Flatlay de papelaria com branding em escrivaninha neutra.",
        "prompt": "Create a professional flatlay branding image of [YOUR PRODUCT HERE] represented across stationery items such as envelopes or letterheads. All items must be proportionally accurate and naturally positioned on a flat surface. Lighting should be soft and diffused from above, creating realistic shadows and depth without dramatic styling. Simulate a 70mm lens top-down perspective for a balanced commercial composition. Typography must remain sharp and geometrically correct. Paper texture must behave realistically under light. Avoid floating elements or artificial effects.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-05",
        "category": "branding",
        "title": "Mockup de Embalagem de Varejo",
        "style_dna": "Comercial • Estruturado • Limpo",
        "image_direction": "Marca impressa em caixa de embalagem com iluminação de estúdio.",
        "prompt": "Create a commercial packaging mockup of [YOUR PRODUCT HERE] displayed on a neutral studio surface. The packaging must appear physically solid and proportionally correct with visible contact shadow. Lighting should be evenly diffused to emphasize structure and typography without glare. Simulate an 85mm commercial lens for refined framing. Cardboard or box materials must exhibit realistic texture and edge sharpness. Typography must remain undistorted and properly aligned. Avoid unrealistic reflections or floating effects.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-06",
        "category": "branding",
        "title": "Realismo de Adesivo de Janela",
        "style_dna": "Modernoo • Arquitetônico • Limpo",
        "image_direction": "Logo da marca aplicado como adesivo de janela com transparência realista.",
        "prompt": "Create a branding image of [YOUR PRODUCT HERE] represented as a window decal applied to glass. The decal must appear physically adhered to the glass surface with realistic transparency and correct light interaction. Reflections must behave according to real-world physics and not distort the geometry of the logo. Lighting should simulate natural daylight with accurate shadow falloff. Use an 85mm lens simulation at eye level. Ensure proportional accuracy and geometric stability.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-07",
        "category": "branding",
        "title": "Detalhe de Couro em Relevo",
        "style_dna": "Luxo • Texture • Detalhe",
        "image_direction": "Marca em relevo em superfície de couro com iluminação direcional.",
        "prompt": "Create a macro branding image of [YOUR PRODUCT HERE] embossed onto a leather surface. The embossing must appear physically pressed into the material with realistic depth and shadow contact. Lighting should be directional to emphasize texture without producing artificial shine. Simulate a 100mm macro lens with shallow depth of field. Leather grain must behave realistically under light, and typography must remain geometrically stable. Avoid distortion or exaggerated glow.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-08",
        "category": "branding",
        "title": "Instalação de Lobby Corporativo",
        "style_dna": "Arquitetônico • Profissional • Limpo",
        "image_direction": "Placa da marca instalada em lobby corporativo moderno.",
        "prompt": "Create a commercial branding photograph of [YOUR PRODUCT HERE] represented as signage mounted within a modern corporate lobby interior. The sign must appear physically attached to the wall with accurate scale relative to the space. Lighting should simulate interior ambient light with realistic shadow falloff. Use an 85mm lens simulation to maintain proportional perspective. Materials such as brushed metal or acrylic must exhibit realistic reflection behavior. Avoid floating elements or distorted geometry.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-09",
        "category": "branding",
        "title": "Precisão de Estampa Metálica",
        "style_dna": "Elegante • Print • Premium",
        "image_direction": "Close-up de logo com hot stamping em papel premium.",
        "prompt": "Create a macro branding image of [YOUR PRODUCT HERE] represented as foil-stamped print on premium paper. The foil must reflect light realistically with correct highlight behavior and no artificial glow. The paper must show subtle texture and remain physically grounded on a flat surface with natural shadow contact. Simulate a 100mm macro lens for precise detail capture. Typography must remain undistorted and proportionally accurate.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "brand-10",
        "category": "branding",
        "title": "Apresentação Digital Limpa",
        "style_dna": "Modernoo • Minimalista • Profissional",
        "image_direction": "Marca exibida em tela digital realista com iluminação de estúdio.",
        "prompt": "Create a professional branding image of [YOUR PRODUCT HERE] displayed on a realistic digital device screen placed on a neutral studio surface. The screen must remain proportionally accurate and geometrically stable. Lighting should be balanced to minimize glare while preserving realistic reflections. Simulate an 85mm lens for clean commercial framing. The device must appear physically grounded with visible contact shadow. Avoid distortion or artificial glow effects.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-01",
        "category": "automotive",
        "title": "Estúdio de Precisão de Garagem",
        "style_dna": "Industrial • Limpo • Mecânico",
        "image_direction": "Produto automotivo em piso de garagem texturizado com iluminação direcional.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] positioned on a realistic garage-style concrete floor. The product must appear proportionally accurate and fully grounded with visible contact shadow and correct weight distribution. Surface texture of the concrete must be realistic and not exaggerated. Lighting should be directional from one side to create defined yet natural shadows without artificial glow. Avoid dramatic cinematic exaggeration. Simulate an 85mm commercial lens at eye level with shallow depth of field, keeping the product sharp and background subtly blurred. Materials such as metal, rubber, plastic, or painted surfaces must respond to light according to real-world physics. Edges must remain geometrically precise with no distortion.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-02",
        "category": "automotive",
        "title": "Detalhe do Compartimento do Motor",
        "style_dna": "Mecânico • Precisao • Técnico",
        "image_direction": "Componente automotivo em contexto realista de compartimento do motor.",
        "prompt": "Create a commercial image of [YOUR PRODUCT HERE] integrated naturally within a realistic engine bay environment. The component must appear proportionally accurate and physically installed with proper mounting alignment. All surrounding mechanical elements must maintain correct scale and geometry. Lighting should simulate natural garage lighting with soft directional highlights to reveal texture and form without artificial shine. Avoid exaggerated reflections or fantasy effects. Use a 90mm lens simulation at eye level with controlled depth of field. Metal surfaces must display realistic reflectivity and edge sharpness. Rubber or plastic materials must exhibit accurate texture and light absorption.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-03",
        "category": "automotive",
        "title": "Controle de Reflexo Cromado",
        "style_dna": "Polido • Controlado • Premium",
        "image_direction": "Peça automotiva com acabamento cromado sob iluminação de estúdio controlada.",
        "prompt": "Create a premium studio photograph of [YOUR PRODUCT HERE] featuring polished chrome or metallic surfaces. The product must remain geometrically precise and proportionally accurate. Chrome reflections must obey realistic environmental reflection behavior without distortion or exaggerated shine. Lighting should be diffused yet directional to create controlled highlight gradients. Simulate an 85mm lens for refined framing. The product must remain grounded with natural contact shadow. Avoid artificial glow or unrealistic reflection artifacts.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-04",
        "category": "automotive",
        "title": "Detalhe de Performance Fosca",
        "style_dna": "Performance • Modernoo • Estruturado",
        "image_direction": "Produto automotivo em superfície fosca com iluminação direcional suave.",
        "prompt": "Photograph [YOUR PRODUCT HERE] placed on a matte industrial surface in a controlled studio environment. The product must appear solid, proportionally accurate, and fully grounded with realistic contact shadow. Lighting should be soft yet directional, emphasizing edges and texture without exaggerated contrast. Simulate a 90mm lens at eye level with shallow depth of field. Matte finishes must absorb light realistically without artificial bloom. Avoid distortion or unrealistic reflections. Maintain precise geometry and structural integrity.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-05",
        "category": "automotive",
        "title": "Contexto Natural Externo",
        "style_dna": "Realista • Prático • Equilibrado",
        "image_direction": "Produto automotivo exibido ao ar livre com luz natural do dia.",
        "prompt": "Create a realistic outdoor commercial image of [YOUR PRODUCT HERE] positioned naturally within an automotive context. The product must appear correctly scaled and grounded relative to its environment. Lighting should simulate natural daylight with accurate shadow direction and soft highlight transitions. Avoid dramatic cinematic exaggeration. Use an 85mm lens simulation with shallow depth of field. Metal, rubber, or plastic materials must respond to light according to real-world physics. Geometry must remain precise and undistorted.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-06",
        "category": "automotive",
        "title": "Foco Macro Mecânico",
        "style_dna": "Detalhe • Engenharia • Técnico",
        "image_direction": "Macro close-up da textura e precisão de componente automotivo.",
        "prompt": "Create a macro commercial photograph focusing on [YOUR PRODUCT HERE] highlighting structural precision and material detail. The component must remain geometrically accurate and proportionally correct. Lighting should be directional to emphasize edges and surface texture without glare. Simulate a 100mm macro lens with shallow depth of field. Metal grain, rubber texture, or paint finish must exhibit realistic material response. Avoid distortion or artificial effects.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-07",
        "category": "automotive",
        "title": "Autoridade de Exibição de Showroom",
        "style_dna": "Limpo • Premium • Varejo",
        "image_direction": "Produto automotivo com iluminação de showroom moderno.",
        "prompt": "Create a premium showroom-style commercial photograph of [YOUR PRODUCT HERE]. The product must appear proportionally accurate and physically grounded within a clean display environment. Lighting should simulate soft indoor showroom lighting with balanced highlight control and realistic shadow falloff. Avoid exaggerated shine or cinematic bloom. Use an 85mm lens simulation for refined commercial framing. Materials must respond realistically to ambient light. Maintain sharp geometry and precise structural detail.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-08",
        "category": "automotive",
        "title": "Detalhe de Carbono de Performance",
        "style_dna": "Esportivo • Texture • Precisao",
        "image_direction": "Componente automotivo em superfície de fibra de carbono com iluminação direcional.",
        "prompt": "Create a high-end commercial image of [YOUR PRODUCT HERE] positioned on a carbon fiber surface. The product must appear physically grounded with accurate contact shadow and proper scale. Lighting should be directional to emphasize the weave texture without artificial glow. Simulate a 90mm lens with shallow depth of field. Carbon fiber pattern must remain geometrically consistent and realistic. The product geometry must remain precise with no distortion.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-09",
        "category": "automotive",
        "title": "Contexto de Armazém Industrial",
        "style_dna": "Industrial • Bruto • Realista",
        "image_direction": "Produto automotivo em ambiente de armazém com iluminação controlada.",
        "prompt": "Create a realistic industrial-style commercial image of [YOUR PRODUCT HERE] placed within a subtle warehouse context. The product must remain the primary focal point and appear proportionally accurate. Lighting should simulate natural overhead industrial light with realistic shadow behavior. Avoid cinematic exaggeration or artificial glow. Simulate an 85mm lens for balanced framing. Surfaces must behave according to real-world material physics. Geometry must remain stable and undistorted.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "auto-10",
        "category": "automotive",
        "title": "Apresentação Técnica de Catálogo",
        "style_dna": "Comercial • Neutro • Preciso",
        "image_direction": "Foto frontal de produto automotivo em fundo contínuo neutro.",
        "prompt": "Create a clean catalog-style commercial photograph of [YOUR PRODUCT HERE] centered on a neutral seamless studio background. The product must appear proportionally accurate and fully grounded with visible contact shadow. Lighting should be evenly diffused from the front, producing balanced highlights and realistic material behavior. Avoid dramatic effects or artificial glow. Simulate a 70mm lens for a retail-ready presentation. Maintain sharp geometry and undistorted structure. Materials must reflect and absorb light according to real-world physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-01",
        "category": "jewelry",
        "title": "Radiância em Veludo Preto",
        "style_dna": "Luxo • Alto Contraste • Refinado",
        "image_direction": "Peça de joalheria sobre veludo preto profundo com iluminação direcional controlada.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] placed on deep black velvet fabric. The jewelry must appear proportionally accurate and physically grounded, with realistic contact shadow conforming to the fabric’s surface. Velvet texture must respond naturally to light with subtle depth variation, not appearing artificial or overly smooth. Lighting should be directional from the upper side to create controlled sparkle on gemstones and accurate highlight roll-off on metal surfaces without exaggerated shine. Avoid artificial glow or fantasy reflections. Simulate a 100mm macro lens with shallow depth of field, ensuring sharp focus on primary details while background softly transitions to blur. Gemstone facets must remain geometrically precise and physically plausible. Metal reflectivity must obey real-world optical behavior.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-02",
        "category": "jewelry",
        "title": "Elegância em Mármore Branco",
        "style_dna": "Limpo • Premium • Editorial",
        "image_direction": "Joalheria em superfície de mármore branco com iluminação difusa suave.",
        "prompt": "Create a premium commercial photograph of [YOUR PRODUCT HERE] placed on a refined white marble surface. The marble must display realistic vein texture and subtle light reflection. The jewelry must appear physically stable with accurate contact shadow and correct scale relative to the surface. Lighting should be soft and diffused from the front-left direction to create balanced highlights on gemstones and natural metallic reflections. Avoid exaggerated sparkle or artificial glow. Simulate an 85mm lens at eye level with shallow depth of field. Gemstone transparency and refraction must follow realistic optical physics. Metal edges must remain sharp and geometrically precise.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-03",
        "category": "jewelry",
        "title": "Precisão Macro de Diamante",
        "style_dna": "Macro • Detalhe • Precisao",
        "image_direction": "Close-up extremo da faceta da pedra preciosa com iluminação controlada.",
        "prompt": "Create a macro commercial photograph focusing closely on [YOUR PRODUCT HERE], emphasizing gemstone facet precision and metal prong structure. The piece must remain geometrically accurate and proportionally correct. Lighting should be directional to highlight facet definition without exaggerated sparkle or unrealistic dispersion. Simulate a 105mm macro lens with shallow depth of field, keeping focal details sharp while background softly blurs. Refraction and reflection inside the gemstone must obey physical optical behavior. Avoid artificial glow or distortion. Metal surfaces must exhibit realistic polish and reflection control.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-04",
        "category": "jewelry",
        "title": "Luxo de Interior Quente",
        "style_dna": "Lifestyle • Elegante • Quente",
        "image_direction": "Joalheria em superfície de madeira com iluminação ambiente quente.",
        "prompt": "Create a refined lifestyle commercial image of [YOUR PRODUCT HERE] placed on a polished wooden surface within a softly lit interior. The jewelry must remain the focal point and appear proportionally accurate with realistic contact shadow. Lighting should simulate warm ambient interior light with gentle highlight transitions and natural shadow falloff. Avoid cinematic exaggeration or artificial bloom. Simulate an 85mm lens with shallow depth of field. Wood grain must behave realistically under light. Metal and gemstone surfaces must reflect light according to physical laws.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-05",
        "category": "jewelry",
        "title": "Contraste de Estúdio Platina",
        "style_dna": "Modernoo • Minimalista • Nitido",
        "image_direction": "Joalheria em fundo contínuo cinza fosco com iluminação direcional.",
        "prompt": "Create a clean studio commercial photograph of [YOUR PRODUCT HERE] positioned on a matte gray seamless surface. The jewelry must appear physically grounded with visible contact shadow and accurate scale. Lighting should be directional yet controlled, creating crisp metallic edges and natural highlight roll-off without exaggerated reflections. Simulate a 90mm lens at eye level with shallow depth of field. Metal surfaces must display realistic reflectivity. Gemstones must remain optically accurate and geometrically stable.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-06",
        "category": "jewelry",
        "title": "Foco em Anel de Noivado",
        "style_dna": "Românticoo • Detalheed • Limpo",
        "image_direction": "Close-up de anel de noivado em superfície neutra suave.",
        "prompt": "Create a refined macro photograph of [YOUR PRODUCT HERE] positioned on a soft neutral surface. The ring must appear proportionally accurate with visible contact shadow and realistic weight distribution. Lighting should be soft and directional to emphasize gemstone clarity and band curvature without artificial sparkle. Simulate a 100mm macro lens with shallow depth of field. Metal polish and gemstone facets must obey real optical physics. Avoid distortion or exaggerated shine.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-07",
        "category": "jewelry",
        "title": "Suporte de Exibição Brilhante",
        "style_dna": "Varejo • Premium • Equilibrado",
        "image_direction": "Joalheria exibida em suporte acrílico preto brilhante.",
        "prompt": "Create a commercial retail-style image of [YOUR PRODUCT HERE] placed on a glossy black acrylic stand. The reflection must remain physically plausible and aligned with perspective. The jewelry must appear proportionally accurate and firmly grounded. Lighting should be soft and controlled to avoid unrealistic glare. Simulate an 85mm lens for balanced framing. Acrylic and metal surfaces must respond to light realistically.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-08",
        "category": "jewelry",
        "title": "Editorial Suave Ouro Rosé",
        "style_dna": "Quente • Feminino • Elegante",
        "image_direction": "Joalheria em ouro rosé em superfície rosada com luz difusa.",
        "prompt": "Create a refined editorial image of [YOUR PRODUCT HERE] placed on a blush-toned surface. The jewelry must remain geometrically precise and proportionally accurate. Lighting should be diffused and soft to enhance warm metallic tones without artificial glow. Simulate an 85mm lens with shallow depth of field. Rose gold reflections must obey real-world light behavior. Avoid distortion or unrealistic shine.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-09",
        "category": "jewelry",
        "title": "Contraste de Textura de Pedra",
        "style_dna": "Rústicoo • Natural • Textural",
        "image_direction": "Joalheria em superfície de pedra natural texturizada.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] positioned on a textured natural stone surface. The jewelry must appear correctly scaled and grounded with realistic contact shadow. Lighting should be directional to emphasize contrast between stone texture and polished metal without artificial glow. Simulate a 90mm lens at eye level. Stone grain must remain realistic. Metal and gemstone materials must respond accurately to light.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "jew-10",
        "category": "jewelry",
        "title": "Apresentação de Catálogo Limpa",
        "style_dna": "Comercial • Neutro • Preciso",
        "image_direction": "Foto frontal de joalheria em fundo contínuo neutro.",
        "prompt": "Create a clean catalog-style commercial photograph of [YOUR PRODUCT HERE] centered on a neutral seamless studio background. The jewelry must appear proportionally accurate and fully grounded with visible contact shadow. Lighting should be evenly diffused to produce balanced highlights and realistic material behavior. Avoid dramatic effects or artificial glow. Simulate a 70mm lens for a retail-ready presentation. Maintain sharp geometry and undistorted structure. Materials must reflect and refract light according to real-world physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken packaging\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nMaterials must reflect, refract, or absorb light correctly.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "fas-01",
        "category": "fashion",
        "title": "Estúdio Editorial Minimalista",
        "style_dna": "Limpo • Modernoo • Comercial",
        "image_direction": "Produto de moda centralizado em fundo contínuo neutro com iluminação de estúdio suave.",
        "prompt": "Create a high-end commercial studio photograph of [YOUR PRODUCT HERE] displayed on a neutral seamless background. The product must appear proportionally accurate and physically grounded with visible contact shadow. Fabric texture must behave realistically under soft diffused lighting, showing accurate folds, stitching, and material density. Lighting should be frontal and slightly directional to define structure without harsh contrast or artificial glow. Simulate an 85mm commercial lens at eye level with shallow depth of field. Avoid surreal distortions, exaggerated wrinkles, or warped seams. Materials such as cotton, leather, denim, silk, or synthetic fabrics must reflect or absorb light according to real-world physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate fabric physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nFabric must respond to gravity and tension naturally.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens.\nSurface contact must be visible and realistic."
    },
    {
        "id": "fas-02",
        "category": "fashion",
        "title": "Precisão Editorial com Modelo",
        "style_dna": "Premium • Estruturado • Realista",
        "image_direction": "Peça de moda usada naturalmente por modelo em estúdio controlado.",
        "prompt": "Create a premium editorial photograph of [YOUR PRODUCT HERE] worn naturally by a model in a clean studio environment. The garment must fit proportionally correct with realistic tension lines and natural gravity-driven folds. No distortion or warped stitching. Lighting should be soft yet directional, revealing texture without artificial bloom. Simulate an 85mm portrait lens with shallow depth of field. Skin tones must remain natural. Fabric drape must obey real-world physics. Avoid unrealistic smoothness or exaggerated shine.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate fabric physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nFabric must respond to gravity and tension naturally.\nShadows must connect the product to the surface.\nDepth of field must match the chosen lens."
    },
    {
        "id": "fas-03",
        "category": "fashion",
        "title": "Detalhe Macro de Tecido de Luxo",
        "style_dna": "Textural • Detalheed • Refinado",
        "image_direction": "Macro close-up da textura do tecido e precisão das costuras.",
        "prompt": "Create a macro commercial photograph focusing on the material detail of [YOUR PRODUCT HERE]. The fabric texture must appear realistic, showing weave pattern, stitching precision, and structural density. Simulate a 100mm macro lens with shallow depth of field. Lighting should be directional to emphasize texture without exaggerating contrast. Threads and seams must remain geometrically correct. Avoid artificial sharpness or distortion.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate fabric physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nFabric fibers must respond to light naturally.\nDepth of field must match the chosen lens."
    },
    {
        "id": "fas-04",
        "category": "fashion",
        "title": "Contexto Natural Streetwear",
        "style_dna": "Urban • Equilibrado • Realista",
        "image_direction": "Produto de moda fotografado ao ar livre com luz natural do dia.",
        "prompt": "Create a realistic lifestyle image of [YOUR PRODUCT HERE] photographed in a natural urban environment. The garment must appear proportionally correct and naturally worn. Lighting should simulate soft daylight with accurate shadow direction and realistic highlight roll-off. Avoid cinematic exaggeration. Simulate an 85mm lens with shallow depth of field. Fabric must react naturally to wind and gravity without unnatural stretching or distortion.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate fabric physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos\n• No unrealistic reflections\n\nLighting must behave according to real-world outdoor physics."
    },
    {
        "id": "fas-05",
        "category": "fashion",
        "title": "Precisão de Couro de Luxo",
        "style_dna": "Estruturado • Premium • Textured",
        "image_direction": "Produto de moda em couro sob iluminação direcional controlada.",
        "prompt": "Create a premium commercial image of [YOUR PRODUCT HERE] featuring leather material. The leather must display realistic grain texture and natural light absorption. The product must appear proportionally accurate and physically grounded with visible contact shadow. Lighting should be directional to highlight edges and contours without artificial shine. Simulate a 90mm lens with shallow depth of field. Avoid warped stitching or unrealistic gloss.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate leather physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos\n• No unrealistic reflections."
    },
    {
        "id": "fas-06",
        "category": "fashion",
        "title": "Foco em Estrutura Denim",
        "style_dna": "Bruto • Textural • Autentico",
        "image_direction": "Produto jeans fotografado com ênfase nas costuras e no grão do tecido.",
        "prompt": "Create a high-end commercial image of [YOUR PRODUCT HERE] with emphasis on denim texture and seam construction. The denim must show realistic fiber pattern and natural color variation. Stitching must be geometrically consistent and proportionally accurate. Lighting should be soft yet directional to reveal texture depth. Simulate an 85mm lens at eye level. Avoid artificial saturation or unrealistic texture enhancement.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate fabric physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped seams\n• No floating elements\n• No artificial glow\n• No broken stitching\n• No distorted logos."
    },
    {
        "id": "fas-07",
        "category": "fashion",
        "title": "Exibição Limpa Flutuante",
        "style_dna": "Modernoo • Minimalista • Estruturado",
        "image_direction": "Produto de moda suspenso de forma realista com sombra de suporte sutil.",
        "prompt": "Create a clean commercial image of [YOUR PRODUCT HERE] suspended in a minimal studio setting. The garment must appear naturally structured with gravity-driven folds and subtle support shadow indicating realistic positioning. Avoid unrealistic floating artifacts. Lighting should be diffused and balanced, emphasizing structure without harsh contrast. Simulate an 85mm lens. Fabric must behave according to real-world physics.\n\nYou are generating a high-end commercial product photograph.\n\nThe product is a real, physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have accurate proportions, realistic fabric behavior, natural shadow physics, and no artificial glow."
    },
    {
        "id": "fas-08",
        "category": "fashion",
        "title": "Foco em Acessórios de Luxo",
        "style_dna": "Refinado • Close-Up • Detalheed",
        "image_direction": "Close-up de acessório (bolsa, cinto, sapato) em superfície texturizada.",
        "prompt": "Create a premium close-up commercial image of [YOUR PRODUCT HERE] emphasizing accessory craftsmanship. Materials such as leather, metal hardware, or textile must respond to light realistically. The product must appear proportionally accurate and physically grounded. Lighting should be directional yet controlled. Simulate a 90mm lens with shallow depth of field. Avoid distortion or exaggerated shine.\n\nMaintain real-world material physics and geometric precision."
    },
    {
        "id": "fas-09",
        "category": "fashion",
        "title": "Equilíbrio Editorial de Passarela",
        "style_dna": "High Fashion • Editorial • Limpo",
        "image_direction": "Peça de moda capturada em movimento com desfoque de movimento natural.",
        "prompt": "Create an editorial runway-style photograph of [YOUR PRODUCT HERE] worn naturally in motion. Motion blur must be subtle and physically accurate. Fabric movement must obey gravity and air resistance realistically. Lighting should be soft and balanced, not cinematic. Simulate an 85mm lens with shallow depth of field. Avoid warped limbs, distorted seams, or unrealistic fabric flow.\n\nMaintain strict geometric and physical realism."
    },
    {
        "id": "fas-10",
        "category": "fashion",
        "title": "Precisão de Vista Frontal de Catálogo",
        "style_dna": "Varejo • Neutro • Estruturado",
        "image_direction": "Foto frontal de produto de moda em fundo contínuo branco.",
        "prompt": "Create a clean catalog-style commercial photograph of [YOUR PRODUCT HERE] centered on a white seamless background. The garment must appear proportionally accurate and symmetrically aligned. Lighting should be evenly diffused from the front to minimize harsh shadow while maintaining structure. Avoid artificial glow or exaggerated contrast. Simulate a 70mm lens for retail-ready presentation. Maintain geometric precision and realistic fabric behavior.\n\nThe product must appear physically grounded with visible contact shadow and accurate scale."
    },
    {
        "id": "fnb-01",
        "category": "food_beverage",
        "title": "Luz Natural de Mesa Hero",
        "style_dna": "Comercial • Apetitoso • Realista",
        "image_direction": "Produto alimentar em mesa de madeira com luz natural suave de janela.",
        "prompt": "Create a high-end commercial food photograph of [YOUR PRODUCT HERE] placed on a natural wooden table near a soft window light source. The food must appear freshly prepared with realistic moisture, texture, and weight. Surface reflections must behave naturally without artificial gloss. Steam, if present, must be subtle and physically plausible. Lighting should come from one side, creating soft shadow falloff and gentle highlight transitions. Simulate an 85mm lens at table height with shallow depth of field. Avoid CGI plastic appearance, over-saturation, or unrealistic symmetry. Ingredients must look natural and imperfect in a believable way.\n\nYou are generating a real commercial food photograph.\n\nThe product is a real edible item inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• Realista texture and moisture\n• Natural shadow behavior\n• Correct light falloff\n• No plastic surfaces\n• No artificial glow\n• No unrealistic reflections\n• No floating ingredients\n• No warped geometry\n• No hyper-saturation\n\nLighting must behave according to real-world physics.\nSteam, condensation, and gloss must be subtle and believable.\nDepth of field must match the lens choice.\nThe food must look edible and physically present."
    },
    {
        "id": "fnb-02",
        "category": "food_beverage",
        "title": "Detalhe de Textura Macro",
        "style_dna": "Close • Detalheed • Sensorial",
        "image_direction": "Macro close-up mostrando a textura da superfície do alimento.",
        "prompt": "Create a macro commercial photograph focusing closely on the texture of [YOUR PRODUCT HERE]. The surface must show realistic pores, crumbs, fibers, glaze, or liquid behavior depending on the product. Simulate a 100mm macro lens with shallow depth of field. Lighting should be directional to emphasize micro-texture without exaggeration. Avoid plastic shine or artificial contrast. Moisture must appear natural and subtle. The product must look edible and physically tangible.\n\nMaintain real-world food physics and natural imperfection."
    },
    {
        "id": "fnb-03",
        "category": "food_beverage",
        "title": "Condensação de Bebida Gelada",
        "style_dna": "Fresco • Limpo • Refreshing",
        "image_direction": "Bebida gelada com condensação realista na superfície do copo.",
        "prompt": "Create a premium beverage photograph of [YOUR PRODUCT HERE] served in a realistic glass container. Condensation droplets must be physically plausible, randomly distributed, and naturally sized. Glass transparency and refraction must follow real optical physics. Lighting should be soft yet directional to highlight liquid clarity without artificial glow. Simulate an 85mm lens at eye level. Avoid unrealistic symmetry or exaggerated shine. The beverage must look refreshing and physically present.\n\nMaintain realistic liquid density, reflection, and shadow behavior."
    },
    {
        "id": "fnb-04",
        "category": "food_beverage",
        "title": "Composição Flat Lay Superior",
        "style_dna": "Limpo • Equilibrado • Editorial",
        "image_direction": "Vista superior de produto alimentar em superfície texturizada.",
        "prompt": "Create a high-end flat lay photograph of [YOUR PRODUCT HERE] viewed directly from above. The composition must feel balanced and natural, not overly symmetrical. Surface textures such as linen, marble, or wood must behave realistically under soft diffused lighting. Shadows must be subtle and directional. Simulate a 50mm lens top-down perspective. Avoid unrealistic color grading or artificial gloss. Ingredients must appear naturally arranged.\n\nThe product must look edible and physically grounded."
    },
    {
        "id": "fnb-05",
        "category": "food_beverage",
        "title": "Contraste Culinário Dramático",
        "style_dna": "Dramático • Contrast • Gourmet",
        "image_direction": "Alimento fotografado em superfície escura com iluminação low-key direcional.",
        "prompt": "Create a premium low-key food photograph of [YOUR PRODUCT HERE] placed on a dark matte surface. Lighting should be directional and controlled to create dramatic yet realistic contrast without losing detail. Highlights must be natural, not glossy. Simulate an 85mm lens with shallow depth of field. Avoid artificial glow or extreme saturation. The food must look gourmet and physically tangible.\n\nMaintain realistic texture, moisture, and shadow physics."
    },
    {
        "id": "fnb-06",
        "category": "food_beverage",
        "title": "Contexto de Ingredientes Frescos",
        "style_dna": "Natural • Orgânico • Autentico",
        "image_direction": "Produto alimentar cercado de ingredientes naturais frescos.",
        "prompt": "Create a commercial photograph of [YOUR PRODUCT HERE] presented alongside fresh raw ingredients. All elements must appear proportionally accurate and physically grounded. Ingredients should show natural imperfections and varied texture. Lighting should simulate soft daylight with realistic shadow direction. Avoid artificial gloss or hyper-saturation. Simulate an 85mm lens with shallow depth of field.\n\nMaintain natural color science and realistic moisture behavior."
    },
    {
        "id": "fnb-07",
        "category": "food_beverage",
        "title": "Congelamento de Ação de Despejo",
        "style_dna": "Dinamico • Nitido • Realista",
        "image_direction": "Líquido sendo derramado de forma realista em recipiente.",
        "prompt": "Create a high-end action food photograph of [YOUR PRODUCT HERE] being poured naturally into a container. The liquid must obey gravity and fluid dynamics realistically. Splash and droplets must be physically plausible and not exaggerated. Lighting should be directional to freeze motion without artificial glow. Simulate a high shutter speed with 85mm lens perspective. Avoid unrealistic splash shapes or symmetry.\n\nMaintain real-world liquid physics and accurate shadow behavior."
    },
    {
        "id": "fnb-08",
        "category": "food_beverage",
        "title": "Apresentação Hero de Embalagem",
        "style_dna": "Varejo • Limpo • Comercial",
        "image_direction": "Embalagem de produto alimentar centralizada em fundo neutro.",
        "prompt": "Create a clean commercial packaging photograph of [YOUR PRODUCT HERE] on a neutral seamless background. Packaging must appear proportionally accurate and physically grounded. Printed labels must be sharp and undistorted. Lighting should be evenly diffused from the front with soft shadow beneath the product. Avoid artificial reflections or warped packaging. Simulate a 70mm commercial lens.\n\nMaintain realistic material behavior and geometric precision."
    },
    {
        "id": "fnb-09",
        "category": "food_beverage",
        "title": "Frescor de Padaria Quente",
        "style_dna": "Quente • Inviting • Natural",
        "image_direction": "Produto de panificação fotografado com luz ambiente quente.",
        "prompt": "Create a warm, inviting food photograph of [YOUR PRODUCT HERE] with soft ambient lighting. The product must show realistic crumb texture, crust detail, and subtle steam if applicable. Lighting should be warm but not oversaturated. Simulate an 85mm lens with shallow depth of field. Avoid artificial gloss or plastic appearance.\n\nMaintain natural shadow transitions and edible realism."
    },
    {
        "id": "fnb-10",
        "category": "food_beverage",
        "title": "Foto de Estúdio de Bebida Limpa",
        "style_dna": "Minimalista • Fresco • Varejo",
        "image_direction": "Foto frontal de produto de bebida em fundo contínuo branco.",
        "prompt": "Create a clean commercial beverage photograph of [YOUR PRODUCT HERE] centered on a white seamless background. The container must appear geometrically accurate and proportionally correct. Glass or plastic transparency must follow realistic optical physics. Lighting should be evenly diffused to minimize harsh shadows while maintaining dimensionality. Avoid artificial glow or exaggerated condensation.\n\nThe product must appear refreshing, physically grounded, and commercially viable."
    },
    {
        "id": "home-01",
        "category": "home_decor",
        "title": "Integração em Sala de Estar Modernoa",
        "style_dna": "Minimalista • Equilibrado • Arquitetônico",
        "image_direction": "Produto de decoração integrado naturalmente em sala de estar moderna com luz natural suave.",
        "prompt": "Create a high-end editorial interior photograph of [YOUR PRODUCT HERE] naturally integrated inside a modern living room. The object must appear proportionally accurate relative to furniture and architecture. Lighting should simulate soft natural window daylight entering from one side, producing realistic shadow direction and gentle light falloff. Materials such as wood, ceramic, fabric, glass, or metal must respond to light according to real-world physics. Avoid artificial glow, exaggerated contrast, or unrealistic reflections. Simulate a 50mm lens at eye level with subtle depth of field. All perspective lines must remain straight and geometrically correct.\n\nYou are generating a real architectural interior photograph.\n\nThe product is a physical decor object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• Correct scale relative to furniture\n• Realista material physics\n• Natural shadow behavior\n• Accurate light falloff\n• No warped perspective\n• No floating objects\n• No artificial glow\n• No distorted geometry\n• No exaggerated reflections\n\nLighting must behave according to real interior physics.\nThe object must feel physically present in the room."
    },
    {
        "id": "home-02",
        "category": "home_decor",
        "title": "Editorial de Estilização de Mesa",
        "style_dna": "Suave • Refinado • Styled",
        "image_direction": "Objeto decorativo em tampo de madeira ou mármore com luz difusa.",
        "prompt": "Create a refined editorial tabletop photograph of [YOUR PRODUCT HERE] styled naturally on a wooden or marble surface. The object must appear proportionally accurate and physically grounded with visible contact shadow. Lighting should be soft and diffused from one direction, emphasizing texture without artificial shine. Simulate an 85mm lens with shallow depth of field. Surface materials must behave realistically under light. Avoid CGI plastic appearance or exaggerated smoothness.\n\nMaintain natural imperfection and believable interior styling."
    },
    {
        "id": "home-03",
        "category": "home_decor",
        "title": "Precisão Arquitetônica de Decoração de Parede",
        "style_dna": "Limpo • Estruturado • Symmetrical",
        "image_direction": "Decoração de parede fixada realisticamente em parede interna.",
        "prompt": "Create a high-end architectural photograph of [YOUR PRODUCT HERE] mounted on a neutral interior wall. The object must be geometrically aligned and proportionally correct. Wall texture must respond naturally to light. Lighting should simulate indirect daylight with soft shadows. Simulate a 50mm lens at eye height. Avoid warped perspective, artificial glow, or unrealistic symmetry.\n\nThe decor piece must appear securely mounted and physically present."
    },
    {
        "id": "home-04",
        "category": "home_decor",
        "title": "Close-up de Cerâmica e Textura",
        "style_dna": "Textural • Orgânico • Refinado",
        "image_direction": "Detalhe macro de superfície decorativa em cerâmica ou texturizada.",
        "prompt": "Create a macro commercial photograph focusing on the surface texture of [YOUR PRODUCT HERE]. Ceramic glaze, matte finish, or fabric weave must behave realistically under directional light. Simulate a 100mm macro lens with shallow depth of field. Lighting should highlight texture depth without artificial shine. Avoid distortion or unrealistic smoothing.\n\nMaintain true material realism and scale accuracy."
    },
    {
        "id": "home-05",
        "category": "home_decor",
        "title": "Contexto de Quarto de Luxo",
        "style_dna": "Calm • Elegante • Natural",
        "image_direction": "Produto decorativo integrado em ambiente de quarto suave.",
        "prompt": "Create a premium interior photograph of [YOUR PRODUCT HERE] naturally placed within a bedroom environment. The object must be proportionally accurate relative to bed, linens, and surrounding furniture. Lighting should simulate soft morning daylight entering from a window. Fabric textures must behave naturally under light. Simulate a 50mm lens with shallow depth of field. Avoid artificial glow or unrealistic shadow directions.\n\nThe product must feel integrated and physically grounded."
    },
    {
        "id": "home-06",
        "category": "home_decor",
        "title": "Estilização em Madeira Natural e Tons de Terra",
        "style_dna": "Orgânico • Quente • Textured",
        "image_direction": "Peça decorativa estilizada com madeira natural e tons neutros.",
        "prompt": "Create a high-end interior styling photograph of [YOUR PRODUCT HERE] combined with natural wood and earth-tone elements. Lighting should be soft and directional, creating warm highlight transitions. Wood grain must remain realistic. The decor object must appear proportionally accurate and grounded with visible contact shadow. Simulate an 85mm lens. Avoid hyper-saturation or unrealistic glow.\n\nMaintain natural realism and balanced composition."
    },
    {
        "id": "home-07",
        "category": "home_decor",
        "title": "Foto de Catálogo Minimalista Modernoa",
        "style_dna": "Varejo • Neutro • Estruturado",
        "image_direction": "Foto frontal de produto decorativo em fundo contínuo neutro.",
        "prompt": "Create a clean catalog-style commercial photograph of [YOUR PRODUCT HERE] centered on a neutral seamless background. The object must be proportionally accurate and physically grounded with visible contact shadow. Lighting should be evenly diffused from the front. Avoid artificial glow or dramatic contrast. Simulate a 70mm lens for retail-ready presentation.\n\nMaintain geometric precision and realistic material behavior."
    },
    {
        "id": "home-08",
        "category": "home_decor",
        "title": "Controle de Vidro e Reflexo",
        "style_dna": "Preciso • Limpo • Equilibrado",
        "image_direction": "Objeto decorativo em vidro com reflexos controlados.",
        "prompt": "Create a high-end commercial image of [YOUR PRODUCT HERE] made of glass or reflective material. Reflections must obey real optical physics and perspective alignment. Lighting should be controlled and diffused to avoid unrealistic glare. Simulate an 85mm lens with shallow depth of field. The object must appear proportionally accurate and grounded.\n\nAvoid artificial bloom, distortion, or unrealistic reflections."
    },
    {
        "id": "home-09",
        "category": "home_decor",
        "title": "Contexto de Pátio Externo",
        "style_dna": "Natural • Airy • Realista",
        "image_direction": "Produto decorativo em pátio externo com luz natural.",
        "prompt": "Create a realistic outdoor photograph of [YOUR PRODUCT HERE] placed within a patio or terrace setting. Lighting should simulate natural daylight with correct shadow direction and light falloff. Materials must respond to light according to real-world physics. Simulate a 50mm lens at eye level. Avoid cinematic exaggeration or artificial glow.\n\nThe object must appear stable and proportionally accurate within the environment."
    },
    {
        "id": "home-10",
        "category": "home_decor",
        "title": "Composição de Prateleira Estilizada",
        "style_dna": "Editorial • Equilibrado • Natural",
        "image_direction": "Produto decorativo em prateleira interna com profundidade em camadas.",
        "prompt": "Create a refined editorial interior photograph of [YOUR PRODUCT HERE] styled naturally on a shelf among complementary decor elements. The object must remain the focal point and proportionally accurate. Lighting should be soft and directional with realistic shadow layering. Simulate an 85mm lens with shallow depth of field. Avoid artificial symmetry, distortion, or exaggerated shine.\n\nMaintain realistic depth, scale, and material behavior."
    },
    {
        "id": "tech-01",
        "category": "tech",
        "title": "Apresentação de Dispositivo em Estúdio Limpo",
        "style_dna": "Minimalista • Precisao • Comercial",
        "image_direction": "Dispositivo tech centralizado em fundo contínuo neutro com iluminação difusa.",
        "prompt": "Create a high-end commercial studio photograph of [YOUR PRODUCT HERE] centered on a neutral seamless background. The device must be geometrically precise with perfectly straight edges and correct proportions. Lighting should be evenly diffused from the front with subtle directional shaping to define edges without artificial glow. Screen surfaces must display realistic glass reflectivity and accurate light falloff. Avoid unrealistic bloom, warped UI, or exaggerated shine. Simulate a 70mm commercial lens at eye level. Reflections must obey real optical physics and align with perspective. The device must appear physically grounded with visible contact shadow.\n\nYou are generating a real commercial tech product photograph.\n\nThe product is a physical electronic device inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• Perfect geometric accuracy\n• Realista material physics\n• Correct screen reflection behavior\n• Natural shadow physics\n• No warped edges\n• No floating elements\n• No artificial glow\n• No distorted UI\n• No unrealistic reflections\n\nLighting must behave according to real studio physics.\nGlass, metal, and plastic must reflect light correctly.\nPerspective must remain optically accurate."
    },
    {
        "id": "tech-02",
        "category": "tech",
        "title": "Realismo Renderizado de Precisão Flutuante",
        "style_dna": "Modernoo • Equilibrado • Estruturado",
        "image_direction": "Dispositivo tech suspenso de forma realista com sombra sutil abaixo.",
        "prompt": "Create a premium commercial photograph of [YOUR PRODUCT HERE] suspended in a clean studio environment. The device must appear proportionally accurate and geometrically perfect. A subtle grounding shadow must exist beneath the product to indicate realistic depth. Lighting should be soft and directional, emphasizing structural edges without artificial glow. Simulate an 85mm lens with shallow depth of field. Screen surfaces must display physically plausible reflections. Avoid unrealistic symmetry, distortion, or hyper-gloss.\n\nMaintain real-world material behavior and optical accuracy."
    },
    {
        "id": "tech-03",
        "category": "tech",
        "title": "Controle de Precisão de UI de Tela",
        "style_dna": "Nitido • Controlado • Técnico",
        "image_direction": "Dispositivo com UI visível exibida com clareza e proporções corretas.",
        "prompt": "Create a high-end commercial image of [YOUR PRODUCT HERE] with the screen visible and perfectly aligned. The UI must appear proportionally correct with no warping, stretching, or distortion. Lighting should be soft yet directional to create subtle glass reflections without obscuring the screen content. Simulate an 85mm lens at eye level. Glass must reflect light realistically without artificial bloom. Edges must remain geometrically precise.\n\nThe device must appear physically tangible and professionally photographed."
    },
    {
        "id": "tech-04",
        "category": "tech",
        "title": "Macro de Detalhe de Metal e Borda",
        "style_dna": "Macro • Precisao • Industrial",
        "image_direction": "Detalhe close-up de borda metálica e precisão das entradas.",
        "prompt": "Create a macro commercial photograph focusing on the metallic edge and construction details of [YOUR PRODUCT HERE]. The metal must show realistic brushed or polished texture. Ports and structural elements must be geometrically accurate. Simulate a 100mm macro lens with shallow depth of field. Lighting should emphasize texture without exaggerated shine. Avoid distortion or artificial glow.\n\nMaintain strict geometric realism and accurate material physics."
    },
    {
        "id": "tech-05",
        "category": "tech",
        "title": "Contexto de Integração de Espaço de Trabalho",
        "style_dna": "Profissional • Natural • Equilibrado",
        "image_direction": "Dispositivo tech em ambiente de escrivaninha moderna.",
        "prompt": "Create a refined lifestyle photograph of [YOUR PRODUCT HERE] integrated into a modern workspace environment. The device must be proportionally accurate relative to desk objects. Lighting should simulate soft natural daylight entering from one side. Reflections on screen and metal must obey real optical behavior. Simulate a 50mm lens at eye level. Avoid artificial glow or unrealistic symmetry.\n\nThe device must appear functional and physically grounded."
    },
    {
        "id": "tech-06",
        "category": "tech",
        "title": "Contraste de Estúdio em Modo Escuro",
        "style_dna": "Low-Key • Premium • Estruturado",
        "image_direction": "Dispositivo tech em superfície fosca escura com iluminação direcional.",
        "prompt": "Create a premium low-key commercial photograph of [YOUR PRODUCT HERE] placed on a dark matte surface. Lighting should be directional and controlled, emphasizing edges without creating artificial glow. Screen reflections must remain subtle and physically plausible. Simulate an 85mm lens with shallow depth of field. Avoid exaggerated bloom or unrealistic contrast.\n\nMaintain strict material realism and optical accuracy."
    },
    {
        "id": "tech-07",
        "category": "tech",
        "title": "Domínio de Vidro e Reflexo",
        "style_dna": "Refinado • Limpo • Precisao Óptica",
        "image_direction": "Dispositivo com ênfase no realismo do vidro e superfícies reflexivas.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] focusing on glass and reflective surfaces. Reflections must align with real-world environmental physics and perspective. Lighting should be diffused yet directional. Simulate an 85mm lens. Avoid artificial glow, distortion, or unrealistic bloom. Geometry must remain perfect and edges straight.\n\nThe device must appear physically manufactured and professionally photographed."
    },
    {
        "id": "tech-08",
        "category": "tech",
        "title": "Interação Natural Prática",
        "style_dna": "Humanoo • Realista • Equilibrado",
        "image_direction": "Dispositivo segurado ou usado naturalmente pela mão com escala precisa.",
        "prompt": "Create a realistic lifestyle photograph of [YOUR PRODUCT HERE] being naturally held or used by a person. The scale between device and hand must be proportionally accurate. Lighting should be soft and natural. Skin tones must remain realistic. Screen reflections must obey real optical physics. Simulate an 85mm lens with shallow depth of field. Avoid warped fingers, distorted UI, or artificial glow.\n\nMaintain true-to-life realism and physical plausibility."
    },
    {
        "id": "tech-09",
        "category": "tech",
        "title": "Layout Estrutural Explodido",
        "style_dna": "Técnico • Limpo • Engenharia",
        "image_direction": "Vista explodida controlada mostrando camadas de componentes com precisão.",
        "prompt": "Create a technically accurate exploded view photograph of [YOUR PRODUCT HERE] showing internal layers separated slightly in vertical alignment. All components must remain geometrically precise and proportionally accurate. Lighting should be evenly diffused. Avoid floating inconsistencies or unrealistic spacing. Simulate a 70mm lens. The exploded layout must feel engineered, not artistic.\n\nMaintain strict structural realism and accurate scale."
    },
    {
        "id": "tech-10",
        "category": "tech",
        "title": "Precisão Frontal de Catálogo de Varejo",
        "style_dna": "Neutro • Comercial • Estruturado",
        "image_direction": "Foto frontal do dispositivo em fundo contínuo branco.",
        "prompt": "Create a clean retail-ready commercial photograph of [YOUR PRODUCT HERE] centered on a white seamless background. The device must appear proportionally accurate with perfectly straight geometry. Lighting should be evenly diffused from the front with subtle grounding shadow beneath. Screen reflections must remain realistic and aligned with perspective. Avoid artificial glow or distortion. Simulate a 70mm lens for catalog presentation.\n\nThe device must appear professionally manufactured and physically present."
    },
    {
        "id": "uni-01",
        "category": "universal",
        "title": "Precisão de Estúdio Neutra",
        "style_dna": "Limpo • Controlado • Comercial",
        "image_direction": "Produto centralizado em fundo contínuo neutro com iluminação difusa.",
        "prompt": "Create a high-end commercial studio photograph of [YOUR PRODUCT HERE] centered on a neutral seamless background. The product must appear proportionally accurate and physically grounded with visible contact shadow. Lighting should be evenly diffused from the front with subtle directional shaping to define structure. Materials must behave according to real-world physics, reflecting or absorbing light correctly. Avoid artificial glow, warped geometry, exaggerated shine, or unrealistic reflections. Simulate a 70mm commercial lens at eye level. Depth of field must be subtle and natural. Perspective must remain geometrically correct.\n\nYou are generating a real commercial product photograph.\n\nThe product is a physical object inserted in place of [YOUR PRODUCT HERE].\n\nIt must have:\n• True-to-scale proportions\n• Accurate material physics\n• Natural shadow behavior\n• Correct light falloff\n• No surreal distortions\n• No warped geometry\n• No floating objects\n• No artificial glow\n• No broken structure\n• No distorted labels\n• No unrealistic reflections\n\nLighting must behave according to real-world studio physics.\nShadows must connect the product to the surface.\nThe object must appear physically tangible."
    },
    {
        "id": "uni-02",
        "category": "universal",
        "title": "Editorial de Janela Suave",
        "style_dna": "Natural • Equilibrado • Realista",
        "image_direction": "Produto próximo Ã  luz de janela com sombra direcional suave.",
        "prompt": "Create an editorial-style photograph of [YOUR PRODUCT HERE] positioned near a soft window light source. Lighting must simulate natural daylight with realistic shadow direction and smooth highlight transitions. The product must remain proportionally accurate and grounded with visible contact shadow. Avoid exaggerated color grading, artificial bloom, or unrealistic symmetry. Simulate an 85mm lens at eye level with shallow depth of field. Materials must respond to light according to physical laws.\n\nThe object must look photographed, not rendered."
    },
    {
        "id": "uni-03",
        "category": "universal",
        "title": "Contraste Fosco Escuro",
        "style_dna": "Dramático • Controlado • Estruturado",
        "image_direction": "Produto em superfície fosca escura com iluminação direcional.",
        "prompt": "Create a premium low-key commercial photograph of [YOUR PRODUCT HERE] placed on a dark matte surface. Lighting should be directional and controlled to create contrast while maintaining realistic highlight roll-off. The product must appear physically grounded with visible contact shadow. Avoid artificial glow or exaggerated reflections. Simulate an 85mm lens with shallow depth of field. Materials must behave according to real-world optical physics.\n\nMaintain geometric precision and physical realism."
    },
    {
        "id": "uni-04",
        "category": "universal",
        "title": "Foco em Material Macro",
        "style_dna": "Textural • Detalheed • Preciso",
        "image_direction": "Close-up da textura da superfície do produto.",
        "prompt": "Create a macro commercial photograph focusing on the surface detail of [YOUR PRODUCT HERE]. Texture must appear realistic and proportionally accurate. Lighting should emphasize micro-structure without artificial contrast. Simulate a 100mm macro lens with shallow depth of field. Avoid distortion, unrealistic smoothing, or exaggerated shine.\n\nThe product must look physically tangible and precisely manufactured."
    },
    {
        "id": "uni-05",
        "category": "universal",
        "title": "Integração de Contexto Lifestyle",
        "style_dna": "Equilibrado • Natural • Contextual",
        "image_direction": "Produto integrado naturalmente em ambiente relevante Ã  sua função.",
        "prompt": "Create a realistic lifestyle photograph of [YOUR PRODUCT HERE] integrated naturally into a relevant environment. The product must appear proportionally accurate relative to surrounding elements. Lighting should simulate soft natural daylight with correct shadow direction. Avoid artificial glow or unrealistic reflections. Simulate a 50mm lens at eye level. Materials must behave according to real-world physics.\n\nThe product must feel physically present and naturally placed."
    },
    {
        "id": "uni-06",
        "category": "universal",
        "title": "Plataforma Elevada Minimalista",
        "style_dna": "Modernoo • Limpo • Estruturado",
        "image_direction": "Produto em plataforma elevada simples com iluminação difusa.",
        "prompt": "Create a clean commercial image of [YOUR PRODUCT HERE] positioned on a minimal elevated platform. The product must remain geometrically accurate and proportionally correct. Lighting should be diffused yet directional to define edges without artificial glow. Simulate an 85mm lens with shallow depth of field. Avoid unrealistic reflections or exaggerated contrast.\n\nMaintain strict physical realism."
    },
    {
        "id": "uni-07",
        "category": "universal",
        "title": "Controle de Superfície Reflexiva",
        "style_dna": "Polido • Equilibrado • Realista",
        "image_direction": "Produto em superfície reflexiva com reflexo sutil.",
        "prompt": "Create a high-end commercial photograph of [YOUR PRODUCT HERE] placed on a reflective surface. The reflection must align correctly with perspective and obey real optical physics. The product must appear proportionally accurate and grounded. Lighting should be soft and controlled to avoid artificial glare. Simulate an 85mm lens.\n\nAvoid distortion, bloom, or unrealistic reflection behavior."
    },
    {
        "id": "uni-08",
        "category": "universal",
        "title": "Flat Lay Superior Neutro",
        "style_dna": "Editorial • Equilibrado • Limpo",
        "image_direction": "Foto de produto de cima em superfície neutra.",
        "prompt": "Create a high-end flat lay photograph of [YOUR PRODUCT HERE] viewed directly from above. Composition must feel balanced and natural. Surface textures must behave realistically under diffused lighting. Shadows must be subtle and directionally consistent. Simulate a 50mm top-down perspective. Avoid artificial symmetry or hyper-saturation.\n\nMaintain physical plausibility and accurate scale."
    },
    {
        "id": "uni-09",
        "category": "universal",
        "title": "Realismo Industrial",
        "style_dna": "Bruto • Textured • Autentico",
        "image_direction": "Produto em superfície de concreto ou industrial.",
        "prompt": "Create a realistic commercial photograph of [YOUR PRODUCT HERE] placed on a textured industrial surface such as concrete or brushed metal. The product must appear proportionally accurate and physically grounded. Lighting should be directional with realistic shadow falloff. Avoid artificial glow or exaggerated shine. Simulate an 85mm lens.\n\nMaintain material authenticity and geometric precision."
    },
    {
        "id": "uni-10",
        "category": "universal",
        "title": "Simetria de Catálogo Frontal",
        "style_dna": "Varejo • Neutro • Preciso",
        "image_direction": "Foto frontal de produto em fundo contínuo branco.",
        "prompt": "Create a clean catalog-ready commercial photograph of [YOUR PRODUCT HERE] centered on a white seamless background. The product must be symmetrically aligned with perfect geometric accuracy. Lighting should be evenly diffused from the front with subtle grounding shadow. Avoid artificial glow, distortion, or unrealistic reflections. Simulate a 70mm commercial lens. The object must appear professionally manufactured and physically present.\n\nMaintain strict real-world lighting and material physics."
    }
];

