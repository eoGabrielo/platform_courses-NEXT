import { ReactNode } from "react";


export default function Contato({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-5xl mx-auto p-2 text-center">
      {/*bg-amber-100*/}
      {children}
    </div>
  );
}





