import { Configuration, OpenAIApi } from "openai";
import { IOpenAI } from "./Interfaces/IOpenAI";

class OpenAIClient {
  private static instance: OpenAIClient;
  private configuration: Configuration;
  private openai: OpenAIApi;
  private constructor() {
    this.configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  public static getInstance(): OpenAIClient {
    if (!OpenAIClient.instance) {
      OpenAIClient.instance = new OpenAIClient();
    }

    return OpenAIClient.instance;
  }
  public async execution(dataValue?: string) {
    const openAIObject: IOpenAI = {
      model: "text-davinci-003",
      prompt: "",
      temperature: 0,
      max_tokens: 1000,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    const response = await this.openai.createCompletion({
      ...openAIObject,
      prompt: dataValue,
    });
    return response;
  }
}

export default OpenAIClient;
