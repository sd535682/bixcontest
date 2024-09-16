export default function Button({
  text,
  textColor,
  bgColor,
  hoverColor,
  borderColor,
}) {
  return (
    <a
      href="#"
      className={`${textColor} ${bgColor} ${hoverColor} border-2 ${borderColor} px-8 py-4 w-fit rounded-full transition-all duration-500 hover:scale-105`}
    >
      {text}
    </a>
  );
}
