import React from "react";
import AskQuestionGUI from "../Atomicity/Molecules/AskQuestionGUI/AskQuestionGUI";
import { HeadingType } from "../Shared/Enum/HeadingType";
import en from "../Shared/Translation/en.json";
import { executionOfOpenAI } from "../Shared/utility";
const GrammerCorrect = () => {
  const [result, setResult] = React.useState<string>("");
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const getCodeComplexity = async (promptValue?: string) => {
    setLoading(true);
    const response = await executionOfOpenAI(
      `${promptValue}`
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
        submitButtonText={en.label.Grammer}
        resetButtonText={en.label.Reset}
        onSubmitHandler={getCodeComplexity}
        onResetHandler={resetHandler}
        placeholderText={en.placeholder.grammer}
        resultHeadingType={HeadingType.H4}
        headingProps={{ value: result }}
        isLoading={isLoading}
        answerLabel={en.label.Answer}
        questionLabel={en.label.CheckSentence}
        translation={en}
      />
  );
};

export default GrammerCorrect;
