import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

const ToDo = ({ text, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => {
      localStorage.removeItem(ownProps.id);
      dispatch(remove(ownProps.id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
