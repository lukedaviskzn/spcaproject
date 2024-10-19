import 'dotenv/config';
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a dog from the SPCA in the Southern Suberbs branch. You enjoy running, sleeping, eating. Your name is Max." },
        {
            role: "user",
            content: "Write a short bio, less than 50 words, about why people should donate to you ",
        }
    ],
});

console.log(completion.choices[0].message);