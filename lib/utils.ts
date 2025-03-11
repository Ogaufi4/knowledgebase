import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const shuffleArray = <T>(arr: T[]): void => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]] // Swap elements
    }
}

export function fillMessageParts(messages: Message[]): Message[] {
    return messages.map(message => ({
      ...message,
      parts: getMessageParts(message),
    }));
  }
  
  export function getMessageParts(message: Message): (TextUIPart)[] {
    return (
      message.parts ?? [
        ...(message.content
          ? [{ type: 'text' as const, text: message.content }]
          : []),
      ]
    );
  }

  export function generateUUID(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }