import React from "react";
import Image from "next/image";

const Icons = () => {
  return (
    <div className="w-[500px] h-[500px]">
      <Image
        src="/col.png"
        alt="Description of the image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Icons;
