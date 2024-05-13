import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3000, () => console.log(`Listening on port 3000`))

import OpenAI from "openai";

const openai = new OpenAI();

app.post('/', async (req, res) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }, {
        role: "user", content: req.body.prompt
      }],
      model: "gpt-3.5-turbo",
    });

    res.send(response.choices[0].message.content)
  } catch (error) {

  }
})