import { ReactNode } from "react";

function Main({ children = null }: { children?: ReactNode }) {
  return (
    <main className="overflow-hidden scroll-smooth text-tertiary">
      {children}
    </main>
  );
}

export default Main;
