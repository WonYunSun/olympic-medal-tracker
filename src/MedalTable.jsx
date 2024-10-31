import { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import styled from "styled-components";
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #e6e6fa;
  border-radius: 8px;
  overflow: hidden;
  border-color: gray;

  th {
    background-color: #003580;
    color: #fff;
    font-weight: 700;
  }
  td {
    vertical-align: middle;
    color: #333;
  }
  th,
  td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  td {
    vertical-align: middle;
    color: #333;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    unicode-bidi: isolate;
    border-color: inherit;
  }
  tr:hover {
    background-color: #e7e7e7;
  }
`;
const StyledSortDiv = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 10px;

  padding-bottom: 10px;
`;
function MedalTable({ dataList, setDataList }) {
  const [sortedArray, setSortedArray] = useState([]);

  const handleDelete = (index) => {
    const updatedDataList = dataList.filter((_, i) => i !== index);
    setDataList(updatedDataList);
    localStorage.setItem("medalList", JSON.stringify(updatedDataList));
  };

  const handleTableSort = useCallback(
    (value) => {
      let sortedArray = [];
      if (value === "golds") {
        sortedArray = [...dataList].sort(
          (a, b) => Number(b.gold) - Number(a.gold)
        );
      } else if (value === "total") {
        sortedArray = [...dataList].sort((a, b) => {
          const totalA = Number(a.gold) + Number(a.silver) + Number(a.bronze);
          const totalB = Number(b.gold) + Number(b.silver) + Number(b.bronze);
          return totalB - totalA;
        });
      }
      setSortedArray(sortedArray);
    },
    [dataList]
  );

  useEffect(() => {
    handleTableSort("golds");
  }, [dataList, handleTableSort]);

  return (
    <>
      <StyledSortDiv>
        <label htmlFor="sort">정렬</label>
        <select id="sort" onChange={(e) => handleTableSort(e.target.value)}>
          <option value="golds">금메달순</option>
          <option value="total">총 메달순</option>
        </select>
      </StyledSortDiv>
      {dataList && dataList.length > 0 ? (
        <StyledTable>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {sortedArray.map((data, i) => (
              <tr key={i}>
                <td>{data.country}</td>
                <td>{data.gold}</td>
                <td>{data.silver}</td>
                <td>{data.bronze}</td>
                <td>
                  <Button
                    text="삭제"
                    onClick={() => handleDelete(i)}
                    variant="delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      ) : (
        <div style={{ color: "#999", margin: "70px 0" }}>
          아직 추가된 국가가 없습니다. 메달을 추적하세요!
        </div>
      )}
    </>
  );
}

export default MedalTable;
