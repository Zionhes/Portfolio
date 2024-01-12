function Card({ children }) {
  return (
    <article className="mx-auto h-96 w-80 overflow-hidden rounded-xl bg-secondary shadow-2xl">
      <div className="flex items-center p-1.5">
        <div className="px-1">
          <span className="inline-block h-4 w-4 cursor-pointer rounded-full bg-slate-500"></span>
        </div>
        <div className="px-1">
          <span className="inline-block h-4 w-4 cursor-pointer rounded-full bg-yellow-400"></span>
        </div>
        <div className="px-1">
          <span className="inline-block h-4 w-4 cursor-pointer rounded-full bg-green-500"></span>
        </div>
      </div>
      <main className="h-full bg-gray-100 px-2 py-1">{children}</main>
    </article>
  );
}

export default Card;
