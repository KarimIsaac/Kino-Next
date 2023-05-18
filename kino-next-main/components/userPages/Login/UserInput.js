export default function UserInput({
  _label,
  _inputId,
  _type,
  _minLgth,
  _ref,
  _setState,
  _placeholder
}) {
  function onChangeFunc(e) {
    _setState(e.target.value);
  }

  return (
    <div className="userInput-container">
      <label htmlFor={_inputId}>{_label}</label>
      <input
        id={_inputId}
        type={_type}
        placeholder={_placeholder}
        minLength={_minLgth}
        ref={_ref}
        onChange={(e) => onChangeFunc(e)}
        required
      />
    </div>
  );
}

UserInput.defaultProps = {
  _label: "Label:",
  _type: "text",
  _placeholder: "  Skriv här",
  _minLgth: 1,
};
