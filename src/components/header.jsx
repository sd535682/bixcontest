export default function Header({ text, textColor }) {
  return (
    <div>
      <h1 className={`text-3xl relative font-bold ${textColor} uppercase`}>
        {text}
      </h1>
    </div>
  );
}
