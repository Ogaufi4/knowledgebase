// import { generateId } from 'ai';
// import path from 'node:path';

// export async function createChat(): Promise<string> {
//   const { writeFile } = await import('node:fs/promises');
//   const id = generateId(); // generate a unique chat ID
//   await writeFile(await getChatFile(id), '[]'); // create an empty chat file
//   return id;
// }

// export async function loadChat(id: string): Promise<{ sender: string; message: string }[]> {
//   const { readFile } = await import('node:fs/promises');
//   return JSON.parse(await readFile(await getChatFile(id), 'utf8'));
// }

// export async function saveChat({
//   id,
//   messages,
// }: {
//   id: string;
//   messages: { sender: string; message: string }[];
// }): Promise<void> {
//   const { writeFile } = await import('node:fs/promises');
//   const content = JSON.stringify(messages, null, 2);
//   await writeFile(await getChatFile(id), content);
// }

// async function getChatFile(id: string): Promise<string> {
//   const { existsSync, mkdirSync } = await import('node:fs');
//   const chatDir = path.join(process.cwd(), '.chats');
//   if (!existsSync(chatDir)) mkdirSync(chatDir, { recursive: true });
//   return path.join(chatDir, `${id}.json`);
// }
