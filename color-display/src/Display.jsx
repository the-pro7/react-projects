import PropTypes from "prop-types";

const Display = ({ value, hexCode, copied, setCopied }) => {
  const copyHex = async (hex) => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        await navigator.clipboard.writeText(hex);
      setTimeout(setCopied(true), 1000)
      console.log("copied successfully to the clipboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="display-board">
      <h1 className="title">Color Display</h1>
      <div
        className="display"
        style={{ backgroundColor: value }}
        onClick={() => copyHex(hexCode)}
      >
        <h2 className="colorName">{value}</h2>
        <h2 className="colorName">{hexCode}</h2>
        {/* <h2
          className="copyMessage"
          
        >
          {copied ? "Hex Code Cppied!" : null}
        </h2> */}
      </div>
    </main>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
  hexCode: PropTypes.string.isRequired,
  copied: PropTypes.string.isRequired,
  setCopied: PropTypes.func.isRequired,
};

export default Display;
