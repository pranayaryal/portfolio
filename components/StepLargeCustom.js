export default function StepLargeCustom({ number, title, className }) {
  return (
    <div className={`step flex md:items-center space-x-4 py-4 ${className}`}>
      <div>
        <div className="flex items-center
          justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500 text-md">
          {number}
        </div>
      </div>
      <h1
        className="tracking-tight leading-6 font-bold text-lg md:text-4xl"
        style={{ marginBottom: "0px" }}
      >
        {title}
      </h1>
    </div>
  );
}
