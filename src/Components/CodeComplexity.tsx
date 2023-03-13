import React from "react";
import AskQuestionGUI from "../Atomicity/Molecules/AskQuestionGUI/AskQuestionGUI";
import { HeadingType } from "../Shared/Enum/HeadingType";
import en from "../Shared/Translation/en.json";
import { executionOfOpenAI } from "../Shared/utility";
const CodeComplexity = () => {
  const [result, setResult] = React.useState<string>("");
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const getCodeComplexity = async (promptValue?: string) => {
    setLoading(true);
    const response = await executionOfOpenAI(
      `${promptValue}\n${en.result.complexity}`
    );
    if (response) {
      setResult(response);
    }
    setLoading(false);
  };
  const resetHandler =():void=>{
    setResult('');
  }
  return (
      <AskQuestionGUI
        submitButtonText={en.label.FindComplexity}
        resetButtonText={en.label.Reset}
        onSubmitHandler={getCodeComplexity}
        onResetHandler={resetHandler}
        placeholderText={en.placeholder.complexity}
        resultHeadingType={HeadingType.H4}
        headingProps={{ value: result }}
        isLoading={isLoading}
        answerLabel={en.label.Answer}
        questionLabel={en.label.AskQuestion}
        translation={en}
      />
  );
};

export default CodeComplexity;
