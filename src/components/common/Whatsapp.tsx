import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Send, X, User } from "lucide-react";

export const Whatsapp = () => {
        const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
        const [chatMessages, setChatMessages] = useState([]);

        const [currentMessage, setCurrentMessage] = useState('');
        const [isTyping, setIsTyping] = useState(false);
      const openDirectWhatsApp = () => {
            // Direct WhatsApp link without pre-filled message
            const whatsappLink = `https://wa.me/919477105023`;
            window.open(whatsappLink, '_blank');
        };
        
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: chatMessages.length + 1,
      type: 'user',
      message: currentMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    const userInput = currentMessage;
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate bot response based on user input
    setTimeout(() => {
      setIsTyping(false);
      let botResponse = '';
      
      // Smart responses based on user input
      if (userInput.toLowerCase().includes('practice test') || userInput.toLowerCase().includes('mock test')) {
        botResponse = "Great! Our practice tests cover aptitude, coding, and reasoning. You can access them from the main menu. Each test has detailed explanations and performance analytics. Would you like me to guide you to a specific test type?";
      } else if (userInput.toLowerCase().includes('technical') || userInput.toLowerCase().includes('issue') || userInput.toLowerCase().includes('problem')) {
        botResponse = "I understand you're facing a technical issue. Let me connect you with our technical support team right away. They'll get back to you within 2 hours. In the meantime, you can try refreshing the page or clearing your browser cache.";
      } else if (userInput.toLowerCase().includes('pricing') || userInput.toLowerCase().includes('cost') || userInput.toLowerCase().includes('price')) {
        botResponse = "Our platform offers both free and premium plans. The free plan includes basic practice tests, while premium gives you access to all features including detailed analytics, personalized study plans, and priority support. Would you like to know more about our pricing?";
      } else if (userInput.toLowerCase().includes('placement') || userInput.toLowerCase().includes('interview')) {
        botResponse = "Perfect! We have comprehensive placement preparation resources including interview questions, HR round tips, and technical interview guides. Our mock interviews help you practice with real scenarios. Which company are you targeting?";
      } else if (userInput.toLowerCase().includes('help') || userInput.toLowerCase().includes('support')) {
        botResponse = "I'm here to help! You can ask me about practice tests, technical issues, pricing, placement preparation, or any other questions. What specific help do you need?";
      } else {
        // Default responses
        const defaultResponses = [
          "Thanks for your message! I'll connect you with our support team right away. They'll get back to you within 24 hours.",
          "I understand your concern. Let me help you with that. Our team will contact you soon with a detailed solution.",
          "Great question! I'm forwarding this to our experts. You'll receive a comprehensive response shortly.",
          "I've noted your inquiry. Our support team will reach out to you with the best possible solution.",
          "Thank you for reaching out! I'm ensuring this gets the attention it deserves from our specialists."
        ];
        botResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      }
      
      const botMessage = {
        id: chatMessages.length + 2,
        type: 'bot',
        message: botResponse,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const sendQuickMessage = (message: string) => {
    setCurrentMessage(message);
    // Automatically submit the message
    setTimeout(() => {
      const form = document.querySelector('form[onsubmit]') as HTMLFormElement;
      if (form) {
        form.dispatchEvent(new Event('submit', { bubbles: true }));
      }
    }, 100);
  };
    return (
        <>
    {/* Floating WhatsApp Icon */}
       <div className="fixed right-6 bottom-6 z-50">
         <div className="relative">
           {/* Pulsing ring animation */}
           <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
           <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse"></div>
           
           <Button
             onClick={() => setIsWhatsAppOpen(true)}
             className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
           >
             {/* WhatsApp Logo */}
             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
             </svg>
           </Button>
           
           {/* Notification badge */}
           <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
             <span className="text-xs text-white font-bold">1</span>
           </div>
         </div>
       </div>

      {/* WhatsApp Chat Interface */}
      {isWhatsAppOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-end p-4">
          <div className="bg-white rounded-t-2xl shadow-2xl w-80 h-96 flex flex-col">
                         {/* Chat Header */}
             <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
               <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                   {/* WhatsApp Logo */}
                   <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                   </svg>
                 </div>
                 <div>
                   <h3 className="font-semibold">WhatsApp Support</h3>
                   <p className="text-xs text-green-100">Online</p>
                 </div>
               </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsWhatsAppOpen(false)}
                className="text-white hover:bg-green-600"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
                             ))}
               
               {/* Typing indicator */}
               {isTyping && (
                 <div className="flex justify-start">
                   <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg max-w-xs">
                     <div className="flex space-x-1">
                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                     </div>
                   </div>
                 </div>
               )}
               
               {/* Quick response buttons (show when no messages) */}
               {chatMessages.length === 0 && (
                 <div className="flex flex-wrap gap-2 mt-3">
                   <Button
                     size="sm"
                     variant="outline"
                     onClick={() => sendQuickMessage("I need help with practice tests")}
                     className="text-xs bg-white border-green-300 text-green-600 hover:bg-green-100 hover:text-green-600"
                   >
                     Practice Tests
                   </Button>
                   <Button
                     size="sm"
                     variant="outline"
                     onClick={() => sendQuickMessage("I have a technical issue")}
                     className="text-xs bg-white border-green-300 text-green-600 hover:bg-green-100 hover:text-green-600"
                   >
                     Technical Issue
                   </Button>
                   <Button
                     size="sm"
                     variant="outline"
                     onClick={() => sendQuickMessage("I want to know about pricing")}
                     className="text-xs bg-white border-green-300 text-green-600 hover:bg-green-100 hover:text-green-600"
                   >
                     Pricing
                   </Button>
                   <Button
                     size="sm"
                     variant="outline"
                     onClick={() => sendQuickMessage("I need placement preparation help")}
                     className="text-xs bg-white border-green-300 text-green-600 hover:bg-green-100 hover:text-green-600"
                   >
                     Placement Help
                   </Button>
                   <Button
                     size="sm"
                     variant="outline"
                     onClick={() => sendQuickMessage("I need general help")}
                     className="text-xs bg-white border-green-300 text-green-600 hover:bg-green-100 hover:text-green-600"
                   >
                     General Help
                   </Button>
                 </div>
               )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleChatSubmit} className="flex space-x-2">
                                 <Input
                   type="text"
                   value={currentMessage}
                   onChange={(e) => setCurrentMessage(e.target.value)}
                   onKeyPress={(e) => {
                     if (e.key === 'Enter' && !e.shiftKey) {
                       e.preventDefault();
                       handleChatSubmit(e);
                     }
                   }}
                   placeholder="Type your message..."
                   className="flex-1"
                 />
                <Button type="submit" size="sm" className="bg-green-500 hover:bg-green-600">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
                <div className="mt-2 text-right">
                 <Button
                   variant="outline"
                   size="sm"
                   onClick={openDirectWhatsApp}
                   className="text-xs text-green-600 border-green-300 hover:bg-green-100 hover:text-green-600"
                 >
                    <User className="w-5 h-5" />
                   Get Human Support
                 </Button>
               </div>
            </div>
          </div>
        </div>
      )}
        </>

    );
}