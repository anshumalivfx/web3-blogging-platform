import { useRouter } from "next/navigation";
import React from "react";

const style = {
  wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
  iconContainer: `text-xl mr-4`,
  textGeneral: `font-medium`,
  textActive: `font-bold`,
};

interface SidebarOptionsProps {
  text: string;
  Icon: React.ElementType;
  isActive: boolean;
  setSelected: (value: string) => void;
  redirect: string;
}

const SidebarOptions = ({
  text,
  Icon,
  isActive,
  setSelected,
  redirect,
}: SidebarOptionsProps) => {
  const router = useRouter();
  return (
    <div
      className={style.wrapper}
      onClick={() => {
        setSelected(text);
        router.push(redirect);
      }}
    >
      <div className={style.iconContainer}>
        <Icon />
      </div>
      <div className={`${isActive ? style.textActive : style.textGeneral}`}>
        {text}
      </div>
    </div>
  );
};

export default SidebarOptions;
