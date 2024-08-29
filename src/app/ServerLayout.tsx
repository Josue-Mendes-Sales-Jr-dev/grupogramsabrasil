
import { Metadata } from "next";

// Definindo metadados para a página
export const metadata: Metadata = {
  title: "Gramsa",
  description: "O grupo gramsa é uma empresa de engenharia e consultoria",
};

// Componente de layout do servidor
export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
