import { IButton } from "../../Shared/Interfaces/IButton";
const CustomButton = (props: IButton) => {
  const { value, children } = props;
  return <button {...props}>{children || value}</button>;
};

export default CustomButton;
