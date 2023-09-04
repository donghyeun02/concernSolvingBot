const { Configuration, OpenAIApi } = require('openai');

const generateRespones = async (req, res) => {
  try {
    const message = req.body.message;

    const response = await createMessage(message);

    res.status(200).json({ message: response });
  } catch {
    res.status(500).json({ error: 'error_message' });
  }
};

const createMessage = async (concern) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openAI = new OpenAIApi(configuration);

  const systemPrompt = `You are a counselor. Always give response in Korean.
  When concern is positive, you must send me a positive message about a concern.
  When concern is negative, you must send me a consolation message about a concern.
  `;

  const response = await openAI.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: `${concern}`,
      },
    ],
    temperature: 0.2,
  });

  return response.data.choices[0].message.content;
};

module.exports = { generateRespones };
