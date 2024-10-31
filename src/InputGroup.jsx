import InputField from "./InputField";
import Button from "./Button";
import { useState } from "react";
import styled from "styled-components";
const StyledForm = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: end;
  margin: 40px 0;
  & > *:not(button) {
    flex-grow: 1;
  }
`;
function InputGroup({ setDataList }) {
  const [formData, setFormData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const handleInputChange = (e) => {
    //변경된 인풋의 name, value 받음
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //스토리지에 아이템 세팅, dataList 업데이트
  const setStorage = (storedData) => {
    localStorage.setItem("medalList", JSON.stringify(storedData));
    setDataList(storedData);
  };

  //인풋 초기화
  const resetForm = () => {
    document.getElementById("country").value = "";
    document.getElementById("gold").value = 0;
    document.getElementById("silver").value = 0;
    document.getElementById("bronze").value = 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = e.target.name;

    const storedData = JSON.parse(localStorage.getItem("medalList")) || [];
    const country = formData.country;
    const isCountryExist = storedData.some((data) => data.country === country);

    if (country !== "") {
      if (action === "add") {
        if (isCountryExist) {
          alert("이미 해당 국가가 존재합니다.");
        } else {
          storedData.push({ ...formData });
          setStorage(storedData);
        }
      } else if (action === "edit") {
        const countryIndex = storedData.findIndex(
          (data) => data.country === country
        );

        if (countryIndex !== -1) {
          //국가 있으면
          storedData[countryIndex] = { ...formData };
          setStorage(storedData);
        } else {
          alert("등록되지 않은 국가입니다.");
        }
      }
    } else {
      alert("국가명을 입력해주세요.");
    }
    resetForm();
    setFormData({
      country: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };

  return (
    <StyledForm>
      <InputField
        labelText="국가"
        inputType="text"
        inputName="country"
        inputId="country"
        onChange={handleInputChange}
        placeholder="국가 입력"
      />
      <InputField
        labelText="금메달"
        inputType="number"
        inputName="gold"
        inputId="gold"
        onChange={handleInputChange}
        placeholder="0"
      />
      <InputField
        labelText="은메달"
        inputType="number"
        inputName="silver"
        inputId="silver"
        placeholder="0"
        onChange={handleInputChange}
      />
      <InputField
        labelText="동메달"
        inputType="number"
        inputName="bronze"
        inputId="bronze"
        onChange={handleInputChange}
        placeholder="0"
      />
      <Button
        text="국가 추가"
        type="submit"
        name="add"
        onClick={handleSubmit}
        variant="primary"
      />
      <Button
        text="수정"
        type="submit"
        name="edit"
        onClick={handleSubmit}
        variant="primary"
      />
    </StyledForm>
  );
}

export default InputGroup;
