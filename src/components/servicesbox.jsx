export default function ServicesBox({ title, children, subtitle, width }) {
  return (
    <a
      href="#"
      className={`flex flex-col gap-16 ${width} p-8 bg-gray-200 rounded-xl`}
    >
      <h1 className="text-black text-xl font-semibold uppercase">{title}</h1>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-row flex-wrap gap-4">{children}</div>
        <h1 className="text-black font-semibold uppercase">{subtitle}</h1>
      </div>
    </a>
  );
}
