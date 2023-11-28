type IconLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "white" | "black";
};

const IconLink = ({ href, children, variant = "white" }: IconLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={` p-1 rounded-lg  flex items-center justify-center transition-all ${
        variant === "white"
          ? "text-sky-50 hover:text-sky-300"
          : "hover:text-sky-800 text-sky-950"
      } `}
    >
      {children}
    </a>
  );
};

export default IconLink;
