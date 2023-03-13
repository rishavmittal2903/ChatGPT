import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";
import { FaRegStopCircle } from "react-icons/fa";

interface IProps{
    className?:string
}
export const SpeakerIcon = (props:IProps) => {
const {className} = props;
return <FaVolumeUp className={className}/>
}

export const SpeakerMuteIcon = (props:IProps) => {
    const {className} = props;
    return <FaVolumeMute className={className}/>
}

export const PauseIcon = (props:IProps) => {
    const {className} = props;
    return <FaRegPauseCircle className={className}/>
}

export const StopIcon = (props:IProps) => {
    const {className} = props;
    return <FaRegStopCircle className={className}/>
}