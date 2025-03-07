import { NextResponse } from 'next/server';
import { getChatResponse } from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const { messages, category } = await request.json();

    const systemMessage = {
      role: 'system',
      content: `You are KitsoAI, an expert on Botswana's indigenous knowledge, specifically about ${category}.
                Provide accurate, culturally sensitive information based on traditional knowledge.
                Keep responses concise and informative.`,
    };

    const response = await getChatResponse([systemMessage, ...messages]);

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    );
  }
}