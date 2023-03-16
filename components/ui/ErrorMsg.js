import { MdErrorOutline } from "react-icons/md";

const ErrorMsg = (props) => {
  return (
    <p className="error-msg">
      <MdErrorOutline /> {props.message}
    </p>
  );
};

export default ErrorMsg;
