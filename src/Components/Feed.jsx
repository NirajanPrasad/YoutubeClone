import React, { useContext, useEffect } from "react";

import { Context } from "../Context/ContextApi";
import { LeftNav } from "./";

const Feed = () => {
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
    </div>
  );
};

export default Feed;
