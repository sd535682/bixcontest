export default function SocialIcons({ children, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex justify-center items-center text-gray-500 border-2 
            border-slate-300 rounded-full aspect-square mx-4 hover:bg-orange-600 hover:border-none transition-all duration-500 scale-105"
    >
      {children}
    </a>
  );
}
