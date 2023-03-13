import React from "react";
import { TextToSpeechOperation } from "../../Shared/Enum/TextToSpeech";
import { ISpeak } from "../../Shared/Interfaces/ISpeak";
import CustomButton from "./CustomButton";
import { PauseIcon, SpeakerIcon } from "./Icons";
interface IProps {
  textValue: string;
  translation: any;
}
const TextToSpeech = (props: IProps) => {
  const { textValue, translation } = props;
  const [textOperation, setOperation] = React.useState<ISpeak>({
    opearation: TextToSpeechOperation.SPEAK,
    title: translation.placeholder.speak,
  });
  let message = React.useMemo(
    () => new SpeechSynthesisUtterance(textValue),
    [textValue]
  );

  React.useEffect(() => {
    if (textOperation.opearation !== TextToSpeechOperation.SPEAK) {
      let timer = setInterval(() => {
        if (!speechSynthesis.speaking && !speechSynthesis.pending && !speechSynthesis.paused) {
          setOperation({
            opearation: TextToSpeechOperation.SPEAK,
            title: translation.placeholder.speak,
          });
          clearInterval(timer);
        }
      }, 1000);
    }
     // eslint-disable-next-line
  }, [textOperation.opearation]);

  const speakHandler = (): void => {
    switch (textOperation.opearation) {
      case TextToSpeechOperation.SPEAK: {
        setOperation({
          opearation: TextToSpeechOperation.PAUSE,
          title: translation.placeholder.pause,
        });
        speechSynthesis.speak(message);
        break;
      }
      case TextToSpeechOperation.PAUSE: {
        setOperation({
          opearation: TextToSpeechOperation.RESUME,
          title: translation.placeholder.resume,
        });
        speechSynthesis.pause();
        break;
      }
      case TextToSpeechOperation.RESUME: {
        setOperation({
          opearation: TextToSpeechOperation.PAUSE,
          title: translation.placeholder.pause,
        });
        speechSynthesis.resume();
        break;
      }
      default: {
        speechSynthesis.speak(message);
        break;
      }
    }
  };

  return (
    <CustomButton
      onClick={() => speakHandler()}
      className="speaker"
      title={textOperation.title}
    >
      {textOperation.opearation !== TextToSpeechOperation.PAUSE ? (
        <SpeakerIcon />
      ) : (
        <PauseIcon />
      )}
    </CustomButton>
  );
};

export default TextToSpeech;
