import React from "react";
import { FaPlus } from "react-icons/fa6";
import SidebarItem from "./SidebarItem";

const ItemsList = ({ props }) => {
    return (
        <div>
            <button>
                <FaPlus /> New {props.itemType}
            </button>
            <ul>
                <SidebarItem />
            </ul>
        </div>
    );
};

export default ItemsList;
