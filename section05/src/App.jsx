import { use } from "react";
import "./App.css";
// import Bulb from "./components/Bulb";
// import Counter from "./components/Counter";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";

import Register from "./components/Register";

function App() {
  return (
    <>
      <Register />
    </>
  );
}

export default App;

// 컴포넌트 : 첫글자 대문자
// 클래스로도 만들 수 있지만, 코드가 길어짐 ! 보통 함수로 호출함

// function App() {
//   return (
//     <>
//       <Header></Header>
//       <Main></Main>
//       <Footer></Footer>
//     </>
//   );
// }

// function App() {
//   const buttonProps = {
//     text: "객체버튼",
//     color: "blue",
//     a: 1,
//     b: 2,
//     c: 3,
//   };
//   return (
//     <>
//       <Button {...buttonProps}></Button>
//       <Button text={"메일"} color={"red"}></Button>
//       <Button text={"카페"}></Button>
//       <Button text={"블로그"}>
//         <div>
//           자식요소
//           <Header />
//         </div>
//       </Button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Bulb />
//       <Counter />
//     </>
//   );
// }
