export default function HighlightBox(props) {
  return (
    <div
      className={`${props.className} relative inline-block z-0 mt-0 mb-0`}
      style={{ marginTop: "0px", marginBottom: "0px" }}
    >
      <p
        className="z-10 p-0 leading-0"
        style={{ marginTop: "0px", marginBottom: "0px" }}
      >
        {props.children}
      </p>
      <div
        className="absolute bottom-0 left-0 right-0 mt-10 h-1 inline-block bg-green-200"
        style={{ zIndex: -10 }}
      ></div>
    </div>
  );
}