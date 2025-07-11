'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Plus, MessageSquare, Trash2, Settings, Sun, Moon, Sparkles, Menu } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  lastUpdated: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      title: 'Welcome Chat',
      messages: [],
      lastUpdated: new Date()
    }
  ]);
  const [currentChatId, setCurrentChatId] = useState('1');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

//   const userId = localStorage.getItem('userId') || 'guest-' + Date.now();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const currentChat = chats.find(chat => chat.id === currentChatId);
    if (currentChat) {
      setMessages(currentChat.messages);
    }
  }, [currentChatId, chats]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
  
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date()
    };
  
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);
  
    // Update current chat
    setChats(prevChats => 
      prevChats.map(chat => 
        chat.id === currentChatId 
          ? { 
              ...chat, 
              messages: newMessages,
              title: chat.messages.length === 0 ? (userMessage.content.length > 35 ? userMessage.content.slice(0, 32) + '...' : userMessage.content) : chat.title,
              lastUpdated: new Date()
            }
          : chat
      )
    );
  
    try {
        const requestBody = {
            userId: 'user-123',
            message: userMessage.content,
          };
          
          // Log the request body to debug
          console.log('Request Body:', requestBody);
          
          const res = await fetch('http://localhost:5000/data/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody), // Ensure proper JSON serialization
          });
          
          // Check for response errors
          if (!res.ok) {
            const errorText = await res.text();
            console.error('Error Response:', errorText);
            throw new Error(`HTTP error! status: ${res.status}`);
          }

        const result = await res.json();
    
        // Validate the response structure
        if (!result || typeof result.data !== 'string') {
            throw new Error('Invalid response format from server');
        }
  
        const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: result.data || 'Oops, Gagal mengambil balasan dari Aira AI Engine',
            role: 'assistant',
            timestamp: new Date()
        };
    
        const finalMessages = [...newMessages, assistantMessage];
        setMessages(finalMessages);
        setIsLoading(false);
    
        // Update chat with assistant response
        setChats(prevChats => 
            prevChats.map(chat => 
            chat.id === currentChatId 
                ? { ...chat, messages: finalMessages, lastUpdated: new Date() }
                : chat
            )
        );
  
    } catch (error) {
      console.error('Error fetching response from AI engine:', error);
      setIsLoading(false);
      // Optionally, show an error message to the user
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: 'Oops, something went wrong. Please try again later.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages([...newMessages, errorMessage]);
    }
  };
  

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Conversation',
      messages: [],
      lastUpdated: new Date()
    };
    setChats([newChat, ...chats]);
    setCurrentChatId(newChat.id);
    setMessages([]);
  };

  const deleteChat = (chatId: string) => {
    if (chats.length <= 1) return;
    
    const updatedChats = chats.filter(chat => chat.id !== chatId);
    setChats(updatedChats);
    
    // if (currentChatId === chatId) {
    //   setCurrentChatId(updatedChats[0].id);
    // }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`w-screen h-screen overflow-hidden ${isDarkMode ? 'dark bg-slate-900' : 'bg-gray-50'} flex`}>
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-70' : 'w-0'} transition-all duration-300 ease-in-out overflow-hidden ${isDarkMode ? 'bg-slate-800 ' : 'bg-white border-gray-200'} border-r flex flex-col shadow-lg`}>
        {/* Sidebar Header */}
        <div className="px-3 pt-4 pb-3 border-b">
          <div className="flex items-center gap-3 mb-4 pb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">Aira Business Assistant</h2>
          </div>
          <button
            onClick={createNewChat}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
          >
            <Plus size={16} />
            <span className="font-medium text-sm">Start New Conversation</span>
          </button>
        </div>
        
        {/* Chat List */}
        <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 mb-2 ${
                currentChatId === chat.id 
                  ? 'bg-slate-700 shadow' 
                  : 'hover:bg-slate-700'
              }`}
              onClick={() => setCurrentChatId(chat.id)}
            >
              {/* <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex-shrink-0"></div> */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-white">
                  {chat.title}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {chat.lastUpdated.toLocaleDateString()}
                </p>
              </div>
              {chats.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteChat(chat.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-2 rounded-lg transition-all duration-200 hover:bg-red-500/20 text-red-400 hover:text-red-300"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-3 rounded-xl transition-all duration-200 hover:bg-slate-700 text-slate-400 hover:text-white"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="p-3 rounded-xl transition-all duration-200 hover:bg-slate-700 text-slate-400 hover:text-white">
                <Settings size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Header */}
        <div className={`${isDarkMode ? 'bg-slate-800 ' : 'bg-white border-gray-200'} border-b p-4 flex items-center justify-between shadow-sm`}>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg transition-colors hover:bg-slate-700 text-slate-400 hover:text-white lg:hidden"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white">
                  PT. Perusahaan Mana Saja
                </h1>
                <p className="text-sm text-slate-400">Your intelligent conversation partner</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Active
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Bot size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3 text-white">
                Artificial Intelegence Reporting Assistant
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Your intelligent business companion is ready to help. Start a conversation and experience 
                the power of AI-driven assistance for your professional needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
                <div className="p-4 bg-slate-800 rounded-xl ">
                  <h3 className="text-white font-medium mb-2">💼 Business Support</h3>
                  <p className="text-slate-400 text-sm">Get help with business planning, analysis, and strategy</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-xl ">
                  <h3 className="text-white font-medium mb-2">🚀 Productivity Boost</h3>
                  <p className="text-slate-400 text-sm">Streamline workflows and optimize your processes</p>
                </div>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Bot size={18} className="text-white" />
                  </div>
                )}
                
                <div className={`max-w-[75%] ${message.role === 'user' ? 'order-1' : ''}`}>
                  <div
                    className={`px-6 py-4 rounded-2xl shadow-lg ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-slate-800 text-white'
                    }`}
                  >
                    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none leading-relaxed">
                      {message.role === 'user' ? (
                        <div className="whitespace-pre-wrap break-words">
                          {message.content}
                        </div>
                      ) : (
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            // Custom styling untuk dark theme
                            h1: ({ node, ...props }) => (
                              <h1 className="text-2xl font-bold mb-4 text-white border-b border-slate-600 pb-2" {...props} />
                            ),
                            h2: ({ node, ...props }) => (
                              <h2 className="text-xl font-bold mb-3 text-white border-b border-slate-600 pb-1" {...props} />
                            ),
                            h3: ({ node, ...props }) => (
                              <h3 className="text-lg font-semibold mb-2 text-blue-300" {...props} />
                            ),
                            h4: ({ node, ...props }) => (
                              <h4 className="text-base font-semibold mb-2 text-blue-300" {...props} />
                            ),
                            
                            // Paragraf
                            p: ({ node, ...props }) => (
                              <p className="mb-3 text-slate-100 leading-relaxed" {...props} />
                            ),
                            
                            // List styling
                            ul: ({ node, ...props }) => (
                              <ul className="list-disc pl-6 mb-4 space-y-1 text-slate-100" {...props} />
                            ),
                            ol: ({ node, ...props }) => (
                              <ol className="list-decimal pl-6 mb-4 space-y-1 text-slate-100" {...props} />
                            ),
                            li: ({ node, ...props }) => (
                              <li className="mb-1 text-slate-100" {...props} />
                            ),
                            
                            // Table styling untuk dark theme
                            table: ({ node, ...props }) => (
                              <div className="overflow-x-auto mb-4 rounded-lg border border-slate-600">
                                <table className="min-w-full bg-slate-700" {...props} />
                              </div>
                            ),
                            thead: ({ node, ...props }) => (
                              <thead className="bg-slate-600" {...props} />
                            ),
                            th: ({ node, ...props }) => (
                              <th className="px-4 py-3 text-left text-sm font-semibold text-white border-b border-slate-500" {...props} />
                            ),
                            td: ({ node, ...props }) => (
                              <td className="px-4 py-3 text-sm text-slate-100 border-b border-slate-600" {...props} />
                            ),
                            
                            // Code styling
                            // code: ({ node, inline, ...props }) => (
                            //   inline 
                            //     ? <code className="bg-slate-600 text-blue-300 px-2 py-1 rounded text-sm font-mono" {...props} />
                            //     : <code className="block bg-slate-900 text-green-300 p-4 rounded-lg text-sm font-mono overflow-x-auto border border-slate-600" {...props} />
                            // ),
                            
                            // Blockquote
                            blockquote: ({ node, ...props }) => (
                              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-300 mb-4 bg-slate-700 py-2 rounded-r" {...props} />
                            ),
                            
                            // Strong text
                            strong: ({ node, ...props }) => (
                              <strong className="font-bold text-blue-300" {...props} />
                            ),
                            
                            // Links
                            a: ({ node, ...props }) => (
                              <a className="text-blue-400 hover:text-blue-300 underline" {...props} />
                            )
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      )}
                    </div>
                  </div>
                  <p className={`text-xs mt-2 text-slate-400 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))
          )}
          
          {isLoading && (
            <div className="flex gap-4 justify-start animate-fadeIn">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Bot size={18} className="text-white" />
              </div>
              <div className="px-6 py-4 rounded-2xl shadow-lg">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-3 h-3 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 bg-slate-800 rounded-2xl p-4 shadow-lg">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1 bg-transparent resize-none outline-none text-white placeholder-slate-400 min-h-[24px] max-h-32 leading-relaxed"
                rows={1}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className={`p-3 rounded-xl transition-all duration-200 ${
                  inputValue.trim() && !isLoading
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-slate-400 my-2 text-center">
              Press Enter to send • Shift + Enter for new line • Powered by Aira
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}