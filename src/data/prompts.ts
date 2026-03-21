
export interface PromptItem {
    id: string
    title: string
    style_dna: string
    image_direction: string
    prompt: string
}

export interface PromptCategory {
    category_id: string
    category_name: string
    prompts: PromptItem[]
}

export const PROMPTS_DATA: PromptCategory[] = [
    {
        category_id: "cos",
        category_name: "Cosmetics",
        prompts: [
            {
                id: "cos-01",
                title: "Crystal Drop Studio",
                style_dna: "Aesthetic aquatic minimal luxury",
                image_direction: "Glass + water droplets + studio reflection",
                prompt: `
Create a high-end commercial photograph of [YOUR PRODUCT HERE]
placed on a clean glass surface with subtle water droplets.

Lighting must be soft studio diffused light from the top left,
with controlled specular highlights and crisp reflections.

Use shallow depth of field, cinematic clarity,
professional product photography styling,
macro lens feel, hyper-detailed texture rendering.

Background must be gradient cool blue to deep navy,
with controlled contrast and premium editorial composition.

The product must remain the clear hero of the frame.
No clutter. No distracting props.
Luxury brand campaign aesthetic.
        `,
            }
        ]
    }
]