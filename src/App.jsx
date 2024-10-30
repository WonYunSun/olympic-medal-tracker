// import { useState } from 'react'
import { useEffect, useState } from "react";
import InputGroup from "./InputGroup";
import MedalTable from "./MedalTable";
import "./App.css";

function App() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("medalList")) || [];
    setDataList(storedData);
  }, []);
  return (
    <>
      <div className="container">
        <h2>2024 파리 올림픽</h2>
        <InputGroup setDataList={setDataList} />
        <MedalTable dataList={dataList} setDataList={setDataList} />
      </div>
    </>
  );
}

export default App;
