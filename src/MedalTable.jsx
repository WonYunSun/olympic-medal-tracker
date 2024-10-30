import Button from "./Button";
function MedalTable({ dataList, setDataList }) {
  const handleDelete = (index) => {
    const updatedDataList = dataList.filter((_, i) => i !== index);
    setDataList(updatedDataList);
    localStorage.setItem("medalList", JSON.stringify(updatedDataList));
  };

  return (
    <>
      {dataList && dataList.length > 0 ? (
        <table>
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
            {dataList.map((data, i) => (
              <tr key={i}>
                <td>{data.country}</td>
                <td>{data.gold}</td>
                <td>{data.silver}</td>
                <td>{data.bronze}</td>
                <td>
                  <Button text="삭제" onClick={() => handleDelete(i)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>아직 추가된 국가가 없습니다.</div>
      )}
    </>
  );
}

export default MedalTable;
