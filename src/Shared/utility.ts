import OpenAIClient from "./OpenAIClient";

export const executionOfOpenAI=async(dataValue?:string):Promise<string|undefined>=>{
let result:string |undefined = '';
const {data} = await OpenAIClient.getInstance().execution(dataValue);
result = data?.choices?.length? data.choices[0].text : ''
return result;
}