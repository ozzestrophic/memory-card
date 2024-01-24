export default function Card({ url, onClick }) {
  return (
    <div
      className=" inline-block flex h-40 w-40 items-center justify-center rounded-lg bg-amber-600"
      onClick={onClick}
      id={url}
    >
      {/* ask chagGpt how to disable the child elements from being clicked */}
      <div>{url}</div>
    </div>
  );
}
