import { Link } from "react-router-dom";

export default function BranchCard({ city, address, phone, path }) {
  return (
    <Link to={`/sucursales/${path}`}>
      <article className="p-5 rounded-lg border border-gray-400/80 dark:border-[#1f3242] dark:hover:bg-[#1a2a38]/80 bg-white hover:bg-white/70 dark:bg-[#1a2a38]">
        <p className="font-bold">{city}</p>
        <p className="text-sm text-muted">{address}</p>
        <p className="text-sm text-muted">Tel: {phone.join(", ")}</p>
      </article>
    </Link>
  );
}
