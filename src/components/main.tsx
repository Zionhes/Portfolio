import { ReactNode } from "react";

function Main({ children = null }: { children?: ReactNode }) {
  return (
    <main className="z-[-500] overflow-hidden scroll-smooth text-tertiary">
      {children}
    </main>
  );
}

export default Main;
