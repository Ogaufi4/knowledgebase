"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { SuggestedActions } from "@/app/components/suggested-actions"; // Adjust the import path as necessary
import { createChat, loadChat, saveChat } from "@/app/tools/chat-store";

export default function KitsoAIPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [messages, setMessages] = useState<{ sender: string; message: string }[]>([]); 
    const [userMessage, setUserMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); // For loading state when waiting for AI response
    const [isNewChat, setIsNewChat] = useState(true); // For determining if it's a new chat

    useEffect(() => {
        if (!id) {
            createChat().then(newId => {
                router.push(`/dashboard/kitsoai/${newId}`);
            });
        } else {
            loadChat(id).then(initialMessages => {
                setMessages(initialMessages);
                setIsNewChat(initialMessages.length === 0);
            });
        }
    }, [id]);

    // Handle sending user message
    const handleSendMessage = async (event: React.FormEvent): Promise<string | null | undefined> => {
        event.preventDefault();
        if (userMessage.trim()) {
            const newMessages = [
                ...messages,
                { sender: "You", message: userMessage },
            ];
            setMessages(newMessages);
            setUserMessage(""); // Clear input field
            setIsLoading(true); // Set loading state
            setIsNewChat(false); // Set to false after first message
            setShowSuggestions(false); // Hide suggestions after first message

            // Call the API to get the AI response
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id,
                        messages: newMessages,
                    }),
                });

                const data = await response.json();
                
                // Log the response to inspect the structure
                console.log("API Response:", data);

                if (response.ok) {
                    // Extract bot's message content
                    const botMessage = data.message?.content || "No content received"; // Ensure safe access

                    // Log extracted message for debugging
                    console.log("Extracted Bot Message:", botMessage);

                    // Update messages state with bot's response
                    const updatedMessages = [
                        ...newMessages,
                        { sender: "AI", message: botMessage },
                    ];
                    setMessages(updatedMessages);
                    await saveChat({ id, messages: updatedMessages });
                } else {
                    console.error("API Error:", data);
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { sender: "AI", message: "Sorry, I couldn't process that request." },
                    ]);
                }
            } catch (error) {
                console.error("Error fetching AI response:", error);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: "AI", message: "An error occurred. Please try again." },
                ]);
            } finally {
                setIsLoading(false); // Reset loading state
            }
        }
    };

    // Handle starting a new chat
    const handleNewChat = async () => {
        const newId = await createChat();
        router.push(`/dashboard/kitsoai/${newId}`);
    };

    return (
        <>
        <div className="flex h-full bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800">
                <div
                    id="chatContainer"
                    className="flex flex-col flex-1 top-10 bg-white p-6 rounded-lg border border-[#e5e7eb] w-full h-full"
                >
                    {/* Heading */}
                    <div className="flex flex-col space-y-1.5 pb-6">
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-lg tracking-tight">Kitso Ai</h2>
                            <button
                                onClick={handleNewChat}
                                className="inline-flex items-center justify-center rounded-full text-sm font-medium text-[#f9fafb] bg-blue-600 hover:bg-blue-700 h-10 w-10"
                            >
                                +
                            </button>
                        </div>
                        <p className="text-sm text-[#6b7280] leading-3">
                            Powered by openAi and Kitso Hub
                        </p>
                    </div>

                    {/* Chat Messages */}
                    <div
                        id="chatMessages"
                        className="flex-1 pr-4 overflow-y-auto"
                    >
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex gap-3 my-4 text-sm ${message.sender === "You" ? "justify-end" : "justify-start"}`}
                            >
                                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                                    <div className="rounded-full bg-gray-100 border p-1">
                                        <svg
                                            stroke="none"
                                            fill="black"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            height="20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                            ></path>
                                        </svg>
                                    </div>
                                </span>
                                <p className="leading-relaxed">
                                    <span className="block font-bold text-gray-700">{message.sender}</span>
                                    {message.message}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Input Box */}
                    {showSuggestions && (
                        <div className="flex flex-col mb-5">
                            <SuggestedActions append={async (message) => {
                                setMessages((prevMessages) => [
                                    ...prevMessages,
                                    { sender: "You", message: message.content },
                                ]);
                                setUserMessage(message.content);
                                await handleSendMessage({ preventDefault: () => {} } as unknown as React.FormEvent);
                                setUserMessage(""); // Clear the user message to create space
                                return null;
                            }} />
                        </div>
                    )}
                    <div className="flex items-center pt-0 ">
                        <form
                            id="chatForm"
                            className="flex items-center justify-center w-full space-x-2"
                            onSubmit={handleSendMessage}
                        >
                            <input
                                id="userMessage"
                                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                                placeholder="Type your message"
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

function getBotResponse(userMessage: string) {
    throw new Error("Function not implemented.");
}

