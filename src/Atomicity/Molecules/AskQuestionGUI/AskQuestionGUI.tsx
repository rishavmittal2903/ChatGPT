import CustomButton from "../../Atoms/CustomButton";
import CustomTextArea from "../../Atoms/CutsomTextArea";
import "./AskQuestionGUI.css";
import React from "react";
import HeadingText from "../../Atoms/HeadingText";
import { HeadingType } from "../../../Shared/Enum/HeadingType";
import { IHeading } from "../../../Shared/Interfaces/IHeading";
import TextToSpeech from "../../Atoms/TextToSpeech";
interface IProps {
  className?: string;
  onSubmitHandler: (value?: string) => void;
  onResetHandler?: () => void;
  submitButtonText: string;
  resetButtonText: string;
  resultHeadingType?: HeadingType;
  headingProps?: IHeading;
  placeholderText?: string;
  isLoading: boolean;
  answerLabel?: string;
  questionLabel?: string;
  translation?:any;
}
const AskQuestionGUI = (props: IProps) => {
  const {
    className,
    submitButtonText,
    resetButtonText,
    onSubmitHandler,
    onResetHandler,
    resultHeadingType,
    headingProps,
    placeholderText,
    isLoading,
    answerLabel,
    questionLabel,
    translation,
  } = props;
  const textAreaRef = React.createRef<HTMLTextAreaElement>();
  const headingValue: string = `${headingProps?.value}`;
  const onClickHandler = (): void => {
    if (textAreaRef.current?.value) {
      onSubmitHandler(textAreaRef.current?.value);
    }
  };
  const resetHandler = () => {
    if (textAreaRef.current && textAreaRef.current.value) {
      textAreaRef.current.value = "";
      if (onResetHandler) {
        onResetHandler();
      }
    }
  };
  return (
    <div className={`mainContainer ${className}`}>
      {questionLabel && (
        <HeadingText type={HeadingType.H2} value={questionLabel} />
      )}
      <CustomTextArea
        ref={textAreaRef}
        isLoading={isLoading}
        cols={60}
        rows={20}
        className="textArea"
        placeholder={placeholderText}
      />
      {answerLabel && headingValue && (
        <HeadingText type={HeadingType.H2} value={answerLabel} />
      )}
      {headingValue &&
        (headingValue.length < 300 ? (
          <HeadingText type={resultHeadingType} {...headingProps} />
        ) : (
          <CustomTextArea
            value={headingValue}
            cols={60}
            rows={20}
            disabled
            className="textArea textBlue"
          />
        ))}
      <div className="btnContainer">
        {submitButtonText && (
          <CustomButton
            value={submitButtonText}
            onClick={onClickHandler}
            className="submitBtn"
          />
        )}
        {resetButtonText && (
          <CustomButton
            value={resetButtonText}
            onClick={resetHandler}
            className="resetBtn"
          />
        )}
        {headingValue && <TextToSpeech textValue={headingValue} translation={translation}/>}
      </div>
    </div>
  );
};

export default AskQuestionGUI;
