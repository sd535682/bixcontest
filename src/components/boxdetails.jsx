export default function BoxDetails({ title, description }) {
  return (
    <div className="flex flex-col bg-Light">
      <div className="flex-3">
        <img
          src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="CEO"
          className="object-cover w-full"
        />
      </div>
      <div className="flex-2 p-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-lg font-semibold">{description}</p>
      </div>
    </div>
  );
}
