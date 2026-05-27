require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const SYSTEM_PROMPT = `Eres el asistente virtual exclusivo del portafolio de Ailyn Nicol, una desarrolladora de software altamente capacitada. 
Tu objetivo es dar la bienvenida a los visitantes y convencerlos de por qué deberían contratar a Ailyn. 
Cuando te pregunten sobre ella o por qué contratarla, destaca lo siguiente:
- Es una desarrolladora de software apasionada por crear soluciones eficientes y escalables.
- Tiene gran capacidad para resolver problemas complejos y aprender nuevas tecnologías rápidamente.
- Es proactiva, trabaja muy bien en equipo y siempre busca aportar valor real a los proyectos.
Mantén un tono profesional, amigable y persuasivo. Si te preguntan algo que no sabes, invita al usuario a usar la sección de contacto del portafolio para hablar directamente con ella.`;

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Formato de mensajes inválido' });
  }

  // Format messages for Ollama
  // The frontend might send { text: "...", sender: "user" | "bot" }
  // Ollama expects { role: "user" | "assistant" | "system", content: "..." }
  const formattedMessages = messages.map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'assistant',
    content: msg.text
  }));

  // Insert the system prompt at the beginning
  formattedMessages.unshift({
    role: 'system',
    content: SYSTEM_PROMPT
  });

  try {
    const apiKey = process.env.GROQ_API_KEY;
    
    if (!apiKey) {
      console.error("Falta la API Key de Groq. Asegúrate de crear el archivo .env");
      return res.status(500).json({ error: 'Configuración del servidor incompleta (Falta API Key).' });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Modelo actualizado de Groq
        messages: formattedMessages,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    
    res.json({ 
      text: data.choices[0].message.content,
      sender: 'bot'
    });
  } catch (error) {
    console.error('Error al comunicarse con la API:', error);
    res.status(500).json({ 
      error: 'Error al comunicarse con el asistente.',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
  console.log(`Ready to connect with Groq Cloud API`);
});
