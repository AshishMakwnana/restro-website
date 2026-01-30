
import { GoogleGenAI, Type } from "@google/genai";
import { MenuItem } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMenuRecommendation = async (userInput: string, menuItems: MenuItem[]) => {
  const menuContext = menuItems.map(item => `${item.name}: ${item.description} (${item.category}, ₹${item.price})`).join('\n');

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are a helpful and enthusiastic waiter at 'Shree Sawariya Sandwich'. 
    The user is asking for a recommendation: "${userInput}".
    Based on our menu below, suggest 1-2 items and explain why they match the user's craving.
    
    Menu:
    ${menuContext}
    
    Provide your response in JSON format.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendation: {
            type: Type.STRING,
            description: "A friendly personalized recommendation message."
          },
          suggestedItems: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "An array of exact item names from the menu."
          }
        },
        required: ["recommendation", "suggestedItems"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Failed to parse recommendation:", error);
    return {
      recommendation: "I'd suggest trying our Special Sawariya Club Sandwich! It's our crowd favorite.",
      suggestedItems: ["Special Sawariya Club Sandwich"]
    };
  }
};
