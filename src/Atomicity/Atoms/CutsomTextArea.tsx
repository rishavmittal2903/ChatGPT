import React from "react";
import { ITextarea } from "../../Shared/Interfaces/ITextAres";
const CustomTextArea = React.forwardRef((props: ITextarea, ref: any) => {
  const { isLoading } = props;
  return (
    <div className="textareaContainer">
      <textarea ref={ref} {...props} />
      {isLoading && <div className="loader"></div>}
    </div>
  );
});

export default CustomTextArea;
