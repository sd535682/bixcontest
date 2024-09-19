import Button from "./button";
import Logo from "../../public/logo.svg";

export default function Header({
  logoColor,
  buttonColor,
  buttonTextColor,
  buttonText,
}) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full" />
      <div className="flex w-full flex-row justify-between items-center relative z-10 px-20 py-5">
        <img src={Logo} alt="Logo" className="size-14" />
        <Button
          buttonColor={buttonColor}
          buttonTextColor={buttonTextColor}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
}
