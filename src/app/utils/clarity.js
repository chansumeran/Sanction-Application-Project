import axios from 'axios';

const openaiApiUrl = 'https://api.openai.com/v1/chat/completions';

export async function queryOpenAIAssistant(prompt) {
  try {
    const response = await axios.post(
      openaiApiUrl,
      {
        prompt: prompt,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error querying OpenAI API:', error.response ? error.response.data : error.message);
    throw new Error('Error querying OpenAI API');
  }
}
