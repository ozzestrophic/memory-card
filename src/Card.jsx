export default function Card({ url, onClick }) {
  return (
    <div
      className=" flex h-40 w-40 items-center justify-center rounded-lg bg-red-500 shadow-lg"
      onClick={onClick}
      id={url}
    >
      {/* ask chagGpt how to disable the child elements from being clicked */}
      <img src={url} alt="" className=" h-32 w-32 object-cover" />
    </div>
  );
}
