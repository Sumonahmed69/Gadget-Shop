import React from "react";
import Link from "next/link";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MdFormatListBulletedAdd,
  MdOutlineChecklist,
  MdOutlinePlaylistAddCheck,
} from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      name: "Add Product",
      path: "/seller",
      icon: <MdFormatListBulletedAdd size={30} />,
    },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: <MdOutlinePlaylistAddCheck size={30} />,
    },
    {
      name: "Orders",
      path: "/seller/orders",
      icon: <MdOutlineChecklist size={30} />,
    },
  ];
  return (
    <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col">
      {menuItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link href={item.path} key={item.name} passHref>
            <div
              className={`flex items-center py-3 px-4 gap-3 ${
                isActive
                  ? "border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90"
                  : "hover:bg-gray-100/90 border-white"
              }`}
            >
              <p>{item.icon}</p>

              <p className="md:block hidden text-center">{item.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
