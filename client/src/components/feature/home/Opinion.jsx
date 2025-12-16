import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export default function Opinion({ opinion, avatar, name, position }) {
  return (
    <article className="bg-bgligth-tertiary dark:bg-bgdark-tertiary p-8 rounded-xl shadow-md flex flex-col h-full min-h-[300px]">
      {/* Opinión */}
      <p className="text-txtligth-secondary dark:text-txtdark-secondary text-lg italic mb-6 ">
        {opinion}
      </p>

      {/* Datos del autor */}
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <AccountCircleRoundedIcon
              className="text-txtligth-secondary dark:text-txtdark-secondary"
              sx={{ width: "100%", height: "100%" }}
            />
          )}
        </div>

        <div>
          <p className="font-bold text-txtligth-primary dark:text-txtdark-primary">
            {name}
          </p>
          <p className="text-txtligth-secondary dark:text-txtdark-secondary text-sm">
            {position}
          </p>
        </div>
      </div>
    </article>
  );
}
