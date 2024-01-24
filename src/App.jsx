import Game from "./Game";

function App() {
  // game

  return (
    <div className=" relative h-screen  bg-opacity-5">
      <div className=" bg-bg-image-egypt fixed -z-20 h-screen w-screen opacity-70 blur-lg"></div>
      <header className=" flex h-1/6 items-center justify-center p-4 text-center text-3xl font-bold text-white">
        Memory Game
      </header>

      <main className="flex flex-col items-center gap-8 p-4 ">
        <Game />
      </main>
    </div>
  );
}

export default App;
