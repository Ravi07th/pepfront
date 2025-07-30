import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Syllabus() {
  const [tab, setTab] = useState<number>(1); // State inside component
  const navigate = useNavigate();

  const handleTab = (tabValue: number) => {
    setTab(tabValue);
    console.log(tab);
  };

  return (
    <div className="mx-auto">
      <div className="grid text-3xl grid-cols-3">
        <div className="overview-syllabus" id="tab1">
          <button onClick={() => handleTab(1)}>OverView & Syllabus</button>
          {tab === 1 && <p>hii</p>}
        </div>
        <div className="preparation" id="tab2">
          <button onClick={() => handleTab(2)}>Preparation</button>
          {tab === 2 && <p>gii</p>}
        </div>
        <div className="test" id="tab3">
          <button onClick={() => handleTab(3)}>Test</button>
          {tab === 3 && <p>kii</p>}
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
