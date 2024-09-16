export default function BodyText({ text, color }) {
  return (
    <>
      <h1 className={`${color} text-lg font-semibold `}>{text}</h1>
    </>
  );
}
