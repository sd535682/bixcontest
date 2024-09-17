export default function Button({ buttonText }) {
  return (
    <button
      className="px-8 py-2 rounded-full text-white border-4 font-semibold font-roboto ease-in-out
    bg-gradient-to-r from-Light to-Medium hover:from-Dark hover:to-SemiDark transition-all duration-1000"
    >
      {buttonText}
    </button>
  );
}
