export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16">
        <main className="flex flex-col row-start-2 items-center justify-center sm:items-start bg-gray_light p-8 rounded-3xl shadow-2xl">
          <h1 className="font-overlock font-black text-6xl italic text-black">Welcome to usados!</h1>
          <h2 className="font-overlock font-black text-4xl  italic text-primary">Bienvenidos a Usados!</h2>
        </main>
      </div>
    </div>
  );
}
