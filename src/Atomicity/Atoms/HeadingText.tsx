import { HeadingType } from "../../Shared/Enum/HeadingType";
import { IHeading } from "../../Shared/Interfaces/IHeading";

const HeadingText = (props: IHeading) => {
  const { type, value } = props;

  const renderHeadingComponent = () => {
    switch (type) {
      case HeadingType.H1:
        return <h1 {...props} >{value}</h1>;
      case HeadingType.H2:
        return <h2 {...props}>{value}</h2>;
      case HeadingType.H3:
        return <h3 {...props}>{value}</h3>;
      case HeadingType.H4:
        return <h4 {...props}>{value}</h4>;
      case HeadingType.H5:
        return <h5 {...props}>{value}</h5>;
      case HeadingType.H6:
        return <h6 {...props}>{value}</h6>;
      default:
        return <h4 {...props}>{value}</h4>;
    }
  };
  return renderHeadingComponent();
};

export default HeadingText;
