"use client"
import { useState } from 'react'
import Image from 'next/image'
import { XIcon } from 'lucide-react'

export default function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false)

  // Dummy messages
  const messages = [
    { type: 'user', text: 'What is Codemate?' },
    { type: 'Codemate AI', text: 'dummy reply' },

    { type: 'user', text: 'What is Codemate?' },
    { type: 'Codemate AI', text: 'dummy reply' },

    { type: 'user', text: 'What is Codemate?' },
    { type: 'Codemate AI', text: 'dummy reply' },

    // Add more messages here
  ]

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-6">
      <button onClick={handleClick} className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full p-2">
        <Image src="/logo/bot2.svg" alt="Chat Icon" width={75} height={75} />
      </button>
      {isOpen && (
        <div className="fixed bottom-6 right-4 md:bottom-8 md:right-6 z-10">
          <div className="bg-white rounded-lg w-80 h-96 flex flex-col shadow-lg">
            <div className="p-4 text-center">
              <h3 className="text-xl">Let's Chat</h3>
              <button onClick={handleClick} className="absolute right-0 top-0 mt-2 mr-2">
                <XIcon size={30} />
              </button>
            </div>
            <hr />
            <div className="w-full p-3 overflow-auto flex-grow">
              {/* Chat messages will go here */}
              {messages.map((message, index) => (
                <div key={index} className={`my-2 p-2 rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 mr-auto'}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <div className="flex items-center p-3">
              <input className="w-full rounded-full border px-4 py-2 mr-4" placeholder="Type a message" />
              <button className="bg-blue-500 text-white rounded-full px-4 py-2">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
