import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { FaCommentDots, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hola, soy el asistente virtual de Ailyn, ¿en qué puedo ayudarte?", 
      sender: 'bot',
      options: ["¿Por qué contratar a Ailyn?", "Háblame de sus habilidades", "Quiero contactarla"]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const sendMessage = async (textToSend) => {
    if (!textToSend.trim() || isTyping) return;

    const userMessage = { text: textToSend, sender: 'user' };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      setMessages(prev => [...prev, data]);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setMessages(prev => [...prev, { text: "Lo siento, tuve un problema para conectarme con mi cerebro. Intenta de nuevo más tarde.", sender: 'bot' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleOptionClick = (optionText) => {
    sendMessage(optionText);
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Asistente Virtual</h4>
            <button onClick={toggleChat} className="chatbot-close-btn" aria-label="Cerrar chat">
              <FaTimes />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className="chatbot-message-wrapper">
                <div className={`chatbot-message ${msg.sender}`}>
                  {msg.text}
                </div>
                {msg.options && index === 0 && (
                  <div className="chatbot-options">
                    {msg.options.map((option, i) => (
                      <button 
                        key={i} 
                        className="chatbot-option-btn"
                        onClick={() => handleOptionClick(option)}
                        disabled={isTyping}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-message bot typing-indicator">
                <span>.</span><span>.</span><span>.</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-btn" aria-label="Enviar mensaje">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      ) : (
        <button onClick={toggleChat} className="chatbot-toggle-btn" aria-label="Abrir chat">
          <FaCommentDots size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
