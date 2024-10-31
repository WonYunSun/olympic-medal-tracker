import { useEffect, useState } from "react";
import InputGroup from "./InputGroup";
import MedalTable from "./MedalTable";
import "./App.css";
import styled from "styled-components";
const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px #0000001a;
  border-radius: 8px;
  color: #333;
  text-align: center;

  h1 {
    color: #00008d;
    margin-bottom: 20px;
  }
`;

function App() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("medalList")) || [];
    setDataList(storedData);
  }, []);

  return (
    <>
      <StyledContainer className="container">
        <h1>2024 파리 올림픽</h1>
        <InputGroup setDataList={setDataList} />
        <MedalTable dataList={dataList} setDataList={setDataList} />
      </StyledContainer>
    </>
  );
}

export default App;
