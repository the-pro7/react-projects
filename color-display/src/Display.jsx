import PropTypes from "prop-types";

const Display = ({ value }) => {
  return (
    <main className="display-board">
      <h1 className="title">Color Display</h1>
      <div className="display" style={{backgroundColor: value}}>
        <h2 className="colorName">{value}</h2>
      </div>
    </main>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
