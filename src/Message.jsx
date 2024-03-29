export default function Message({ text, clickEvent }) {
  return (
    <div className=" flex aspect-square flex-col gap-8 rounded-2xl bg-red-500 p-8 shadow-xl">
      <img
        src={"./assets/" + text + ".jpeg"}
        alt=""
        className=" aspect-square rounded-lg object-cover"
      />
      <h1 className=" text-center text-3xl text-white">
        {text === "lost" ? "خسرت" : "كسبت"}
      </h1>
      <button
        className=" rounded-lg border-solid bg-white p-4"
        onClick={clickEvent}
      >
        عيد من الأول
      </button>
    </div>
  );
}
