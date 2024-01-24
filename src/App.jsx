import Game from "./Game";

function App() {
  // game

  return (
    <>
      <header className=" flex h-1/6 items-center justify-center bg-slate-600 p-4 text-center text-3xl font-bold text-white">
        Memory Game
      </header>

      <main className=" flex h-5/6 flex-col items-center gap-8  bg-slate-200">
        This is the actual game
        <Game />
      </main>
    </>
  );
}

export default App;
