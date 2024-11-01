
# Olympic Medal Tracker
- 내일배움캠프 React 7기 입문주차 개인과제
- Vite와 React, Styled-components를 활용
## Website
  > [🥇 2024 파리 올림픽](https://wonyunsun.github.io/olympic-medal-tracker/)

> 
![Animation1](https://github.com/user-attachments/assets/42292494-8114-41da-b594-48b9f0b466f2)


## 구현 기능
  - 국가, 메달(금, 은, 동) 데이터 집계 테이블
    - 금메달 수, 총메달 수 내림차순 정렬 기능
  - 메달 데이터 CRUD
    - localStorage 사용, 새로고침해 시 데이터 유지
    - 중복 국가, 존재하지 않는 국가 입력 시 alert 처리
  
  - styled-component 스타일링

## 컴포넌트
#### 컴포넌트 구조
```jsx
App
├── InputGroup
│   ├── InputField (국가)
│   ├── InputField (금메달)
│   ├── InputField (은메달)
│   ├── InputField (동메달)
│   └── Button (국가 추가)
│   └── Button (수정)
└── MedalTable
    ├── Button (삭제)
```
#### 컴포넌트 설명
 
`App`
- **설명**: 2024 파리 올림픽 메달 정보를 상태로 관리하고 표시하는 주요 컴포넌트.
- **주요 기능**: 로컬 스토리지에서 메달 데이터 로드, InputGroup 및 MedalTable 렌더링.

`InputGroup`
- **설명**: 메달 정보를 입력하고 추가 또는 수정하는 기능을 제공하는 컴포넌트.
- **주요 기능**: 사용자 입력 처리, 로컬 스토리지 업데이트, 폼 초기화.
  
`InputField`
- **설명**: 사용자 입력을 위한 라벨과 입력 필드를 포함하는 재사용 가능한 컴포넌트.
- **주요 기능**: 입력 타입에 따른 속성 설정(텍스트, 숫자), 플레이스홀더 및 라벨 표시.

`MedalTable`
- **설명**: 메달 정보를 테이블 형식으로 표시하고, 정렬 및 삭제 기능을 제공하는 컴포넌트.
- **주요 기능**: 데이터 정렬(금메달순, 총 메달순), 데이터 삭제, 메달 리스트 표시.

`Button`
- **설명**: 다양한 상황에서 사용할 수 있는 재사용 가능한 버튼.
- **주요 기능**: 스타일 변형(기본, 삭제) 지원, 클릭 이벤트 핸들링.



## 기술 스택
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
