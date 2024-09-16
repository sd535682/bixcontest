export default function StaticButton({
  text,
  textColor,
  bgColor,
  borderColor,
}) {
  return (
    <div
      href="#"
      className={`${textColor} ${bgColor} ${borderColor} px-8 py-4 w-fit rounded-full font-bold text-lg border-2`}
    >
      {text}
    </div>
  );
}
