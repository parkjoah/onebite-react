import { use } from "react";
import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        {" "}
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
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
