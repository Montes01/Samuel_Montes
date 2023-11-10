import { MenuIcon } from "../../Constants/Svgs.tsx";
export const MenuButton = () => {
  const handleClick = () => {
    alert("click");
  };

  return (
    <button
      onClick={handleClick}
      class="absolute top-5 left-5 bottom-5 m-auto h-full flex items-center"
    >
      <MenuIcon />
    </button>
  );
};
