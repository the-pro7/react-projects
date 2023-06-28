import PropTypes from "prop-types";
import colorNames from 'colornames'


const Input = ({ value, handleChange, setHexCode }) => {
  return (
    <>
      <input
        type="text"
        value={value}
        id="userColor"
        placeholder="Enter a color..."
        onChange={(e) => {
          handleChange(e);
          setHexCode(colorNames(e.target.value))
        }}
      />
    </>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  setHexCode: PropTypes.func.isRequired
};

export default Input;
