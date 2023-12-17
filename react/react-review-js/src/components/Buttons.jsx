import PropTypes from 'prop-types';

const Button = ({
  text = 'Click Me!',
  color = 'blue',
  fontSize = 12,
  onClick,
}) => {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px',
  };

  return (
    <button
      onClick={() => onClick('https://www.theodinproject.com')}
      style={buttonStyle}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: 'Click Me!',
  color: 'blue',
  fontSize: 12,
};

const Buttons = () => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button text="Click Me!" color="blue" onClick={handleClick} />
      <Button text="Don't Click Me!" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
};

export default Buttons;
