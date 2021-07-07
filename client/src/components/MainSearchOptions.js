import React from "react";
import SearchOption from "./SearchOption";
import IconDocs from "./icons/IconDocs";
import IconBuilding from "./icons/IconBuilding";
import IconAcademic from "./icons/IconAcademic";

const MainSearchOptions = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-5 flex">
      <SearchOption icon={<IconDocs size="14" />} text="Jobs by category" />
      <SearchOption icon={<IconBuilding size="14" />} text="Jobs by city" />
      <SearchOption
        icon={<IconAcademic size="14" />}
        text="Student-friendly jobs"
      />
    </div>
  );
};

export default MainSearchOptions;
