import express, { application } from "express";
import axios from "axios";
import {GoogleGenerativeAI , SchemaType} from "@google/generative-ai"

const app = express();
app.use(express.json());
const PORT = 8000 ;
const apiKey = 'AIzaSyBW4FMooGK8mBkYJezk5wtQ1TAVdO1iYN4'; // Replace with your actual API key

// process 
const genAI = new GoogleGenerativeAI(apiKey);
const prompt = "Explain how AI work";    // tsdfgopgsddgope;dpgdaoweoriefest gemini using prompt 

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

app.get("/gemini" , async (req , res) =>{
  try {
    const result = await model.generateContent(prompt);
    if(!result){
      return res.status(404).json({message : "No get data"});
    }
    
    return res.status(200).json(result.response.text());

  } catch (error) {
    console.log(error.message);
    res.status(404).json(error);
  }
})

app.listen(PORT , (req , res) =>{
  console.log("Server running on PORT : " , PORT);
})
