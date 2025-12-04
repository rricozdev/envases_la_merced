import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* TODO: añadir el compenente header aqui */}
      <main>
        <Outlet />
      </main>
      {/* TODO: añadir el compenente footer aqui */}
    </>
  );
}
