export default function Button({ buttonColor, buttonTextColor, buttonText }) {
  return (
    <button
      className="px-8 py-2 rounded-full"
      style={{ backgroundColor: buttonColor, color: buttonTextColor }}
    >
      {buttonText}
    </button>
  );
}
