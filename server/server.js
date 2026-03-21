import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

app.post("/generate-image", async (req, res) => {
    try {
        const { prompt } = req.body

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        })

        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `Create a cinematic high-end product photography image. ${prompt}`
                        }
                    ]
                }
            ]
        })

        const response = await result.response

        // Pegando o conteúdo bruto
        const text = response.text()

        res.json({
            success: true,
            data: text
        })

    } catch (error) {
        console.error("SERVER ERROR:", error)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})

app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000")
})