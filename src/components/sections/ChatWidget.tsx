'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Trash2,
  ChevronDown,
  Sparkles,
  Phone,
  Mail,
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  'What services do you offer?',
  'How do I get a free quote?',
  'What promotions are available?',
  'What areas do you serve?',
];

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function formatMessage(content: string): string {
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^### (.*$)/gm, '<h4 class="font-semibold mt-2 mb-1">$1</h4>')
    .replace(/^## (.*$)/gm, '<h3 class="font-semibold mt-2 mb-1">$1</h3>')
    .replace(/^- (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 list-decimal">$1</li>')
    .replace(/\n\n/g, '</p><p class="mt-2">')
    .replace(/\n/g, '<br/>');
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => generateId());
  const [hasStarted, setHasStarted] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [minimized, setMinimized] = useState(false);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Welcome message when chat first opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcome: Message = {
        id: generateId(),
        role: 'assistant',
        content:
          "Hey there! 👋 Welcome to **NXT LVL Landscape**!\n\nI'm your virtual assistant. I can help you learn about our landscaping and hardscaping services, promotions, and how to get started.\n\nWhat would you like to know?",
        timestamp: new Date(),
      };
      setMessages([welcome]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setHasStarted(true);
    setShowSuggestions(false);

    // Auto-resize textarea back
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim(), sessionId }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: data.response || "I'm sorry, something went wrong. Please try calling (657) 720-9054.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content:
          "I'm having trouble connecting right now. 😔 Please try again or reach us directly:\n\n• **Phone:** (657) 720-9054\n• **Email:** nxtlvllandscape@gmail.com",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    // Auto-resize
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  const handleSuggestionClick = (question: string) => {
    sendMessage(question);
  };

  const clearChat = async () => {
    setMessages([]);
    setHasStarted(false);
    setShowSuggestions(true);
    try {
      await fetch(`/api/chat?sessionId=${sessionId}`, { method: 'DELETE' });
    } catch {
      // ignore
    }
  };

  const toggleChat = () => {
    if (minimized) {
      setMinimized(false);
      return;
    }
    setIsOpen(!isOpen);
  };

  const unreadCount = messages.length > 0 && !isOpen ? 1 : 0;

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className={cn(
          'fixed bottom-6 right-6 z-50 flex items-center justify-center shadow-2xl transition-all duration-500 ease-out cursor-pointer',
          isOpen
            ? 'opacity-0 scale-0 pointer-events-none'
            : 'opacity-100 scale-100'
        )}
        aria-label="Open chat assistant"
        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#2a5a3e] to-[#3d7a52] flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
              1
            </span>
          )}
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          'fixed z-50 transition-all duration-500 ease-out',
          'bottom-6 right-6',
          'w-[calc(100vw-3rem)] sm:w-[420px]',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none',
          minimized
            ? 'opacity-0 scale-90 translate-y-4 pointer-events-none'
            : ''
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)', maxHeight: 'calc(100vh - 6rem)' }}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col" style={{ maxHeight: 'calc(100vh - 6rem)', height: '600px' }}>
          {/* Chat Header */}
          <div className="relative bg-gradient-to-r from-[#1d3d2a] to-[#2a5a3e] px-5 py-4 flex items-center justify-between shrink-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2Mmgxem0tMi0xMHYtMmgtOHYyaDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            <div className="relative flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <Sparkles className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#1d3d2a]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm tracking-tight">
                  NXT LVL Assistant
                </h3>
                <p className="text-emerald-200/70 text-xs">
                  {isLoading ? 'Thinking...' : 'Online now'}
                </p>
              </div>
            </div>
            <div className="relative flex items-center gap-1">
              <button
                onClick={clearChat}
                className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                aria-label="Clear chat"
                title="Clear chat"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setMinimized(true);
                }}
                className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                aria-label="Minimize chat"
                title="Minimize"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                aria-label="Close chat"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50/50 to-white scroll-smooth"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#d1d5db transparent',
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#2a5a3e] to-[#3d7a52] flex items-center justify-center mt-1 shadow-sm">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={cn(
                    'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#2a5a3e] to-[#3d7a52] text-white rounded-br-md shadow-sm'
                      : 'bg-white border border-gray-100 text-gray-700 rounded-bl-md shadow-sm'
                  )}
                >
                  <div
                    className="prose prose-sm max-w-none [&_strong]:font-semibold [&_em]:italic [&_li]:mb-1 [&_h3]:text-sm [&_h4]:text-xs"
                    dangerouslySetInnerHTML={{
                      __html: formatMessage(message.content),
                    }}
                  />
                </div>
                {message.role === 'user' && (
                  <div className="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mt-1 shadow-sm">
                    <User className="w-4 h-4 text-gray-500" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 animate-in fade-in duration-300">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#2a5a3e] to-[#3d7a52] flex items-center justify-center shadow-sm">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {showSuggestions && !hasStarted && (
            <div className="px-4 pb-2 shrink-0">
              <p className="text-xs text-gray-400 mb-2 font-medium">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSuggestionClick(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#2a5a3e]/20 text-[#2a5a3e] hover:bg-[#2a5a3e] hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Contact Bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-t border-gray-50 shrink-0">
            <a
              href="tel:+16577209054"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#2a5a3e] transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">Call Us</span>
            </a>
            <span className="text-gray-200">|</span>
            <a
              href="mailto:nxtlvllandscape@gmail.com"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#2a5a3e] transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">Email Us</span>
            </a>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-3 shrink-0 bg-white">
            <div className="flex items-end gap-2">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our services..."
                disabled={isLoading}
                className="flex-1 min-h-[40px] max-h-[120px] resize-none rounded-xl border-gray-200 bg-gray-50/50 text-sm focus-visible:ring-[#2a5a3e]/30 focus-visible:border-[#2a5a3e]/50 px-4 py-2.5 transition-all duration-200"
                rows={1}
              />
              <Button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isLoading}
                size="icon"
                className={cn(
                  'shrink-0 w-10 h-10 rounded-xl transition-all duration-200 cursor-pointer',
                  input.trim() && !isLoading
                    ? 'bg-gradient-to-r from-[#2a5a3e] to-[#3d7a52] hover:shadow-lg hover:shadow-[#2a5a3e]/20 hover:scale-105'
                    : 'bg-gray-100 text-gray-400'
                )}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
