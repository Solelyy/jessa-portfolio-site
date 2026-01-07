import { NavLink } from "react-router-dom";

export default function NavActions({
  className,
  onItemClick,
  src,
  themeStyle
}: {
  className: ({ isActive }: { isActive: boolean }) => string;
  onItemClick: () => void;
  src: string;
  themeStyle:string;
}) {
  return (
    <>
      <NavLink to="/personal" className={className}>
        Personal
      </NavLink>

      <NavLink to="/contact" className={className}>
        Contact
      </NavLink>

      <button onClick={onItemClick} className={themeStyle}>
        <img
          src={src}
          alt="theme-toggle-icon"
          className="h-6 w-auto"
        />
      </button>
    </>
  );
}
