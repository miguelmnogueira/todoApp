import React from "react";
import { FaPlus } from "react-icons/fa6";
import SidebarItem from "./SidebarItem";

const ItemsList = () => {
  return (
    <div className="flex flex-col gap-5">
      <button
        className="flex h-12 items-center w-(--item-width) bg-new-button-bg border-1 border-border
          rounded-lg px-[24px] gap-4 text-disabled-text cursor-pointer text-[16px]
          self-center"
      >
        <FaPlus className="text-[18px]" /> New To-do List
      </button>
      <div className="ml-2">
        <span className="text-disabled-text text-[14px] font-semibold ml-4">
          Lists
        </span>
        <ul className="flex flex-col gap-1 pr-4">
          <SidebarItem name={"This is a tes teadwadadwadast"} />
          <SidebarItem name={"This is a tes teadwadadwadast"} />
          <SidebarItem name={"This is a tes teadwadadwadast"} />
          <SidebarItem name={"This is a tes teadwadadwadast"} />
          <SidebarItem name={"This is a tes teadwadadwadast"} />
        </ul>
      </div>
    </div>
  );
};

export default ItemsList;
