import { MdErrorOutline } from "react-icons/md";
// Reusable error message for any failed api calls
const ErrorMsg = (props) => {
  return (
    <div>
      <p className="error-msg">
        <MdErrorOutline /> {props.message}
      </p>
    </div>
  );
};

export default ErrorMsg;
