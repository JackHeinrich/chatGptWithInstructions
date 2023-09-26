import OpenAI from "openai";

import messageStruct from "../util/messageStruct";

const openai = new OpenAI({
  apiKey: "API_KEY",
  dangerouslyAllowBrowser: true,
});

export default async function getLanguageModelResponse(
  instructions: string,
  messages: messageStruct[],
  recentMessage: messageStruct
) {
  // Create the system message
  const systemMessage = { role: "system", content: instructions };

  // Convert messageStruct[] to ChatCompletionMessageParam[] for user messages
  const prevMessages = messages.map((message) => ({
    role: "user",
    content: message.content,
  }));

  //rm is reformatted recent message in open ai chat completion format
  const rm = { role: "user", content: recentMessage.content}

  // Combine systemMessage and userMessages into a single array
  const messageHistory = [systemMessage, ...prevMessages, rm];

  console.log(messageHistory)

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messageHistory,
  });

  const content = response.choices[0].message.content;
  return(content)
}
