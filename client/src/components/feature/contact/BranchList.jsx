import { sucursalesData } from "../../../utils/constants/sucursales";
import BranchCard from "./BranchCard";

export default function BranchList() {
  const branches = sucursalesData.filter(
    (sucursal) => sucursal.name !== "CDMX"
  );

  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Nuestras Sucursales</h3>
      {branches.map((branch) => (
        <BranchCard
          path={branch.path}
          key={branch.name}
          address={branch.address}
          city={branch.name}
          phone={branch.phone}
        />
      ))}
    </section>
  );
}
