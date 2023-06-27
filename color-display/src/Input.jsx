import PropTypes from 'prop-types'

const Input = ({value,  handleChange}) => {

  return (
    <>
      <input
        type="text"
        value={value}
        id="userColor"
        placeholder="Enter a color..."
        onChange={handleChange}
      />
    </>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

}

export default Input;
