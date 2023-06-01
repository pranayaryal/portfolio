export default function StepLargeCustom({ number, title, className }) {
  return (
    <div className={`step flex items-baseline md:items-center py-4 ${className}`}>
      <div className="flex items-start md:items-center
        justify-center border border-gray-200 font-extrabold dark:border-gray-900 rounded-full h-8 w-8 text-green-500">
        {number}
      </div>
      <h1
        className="ml-3 tracking-tight font-bold text-lg md:text-4xl"
        style={{ marginBottom: "0px" }}
      >
        {title}
      </h1>
    </div>
  );
}