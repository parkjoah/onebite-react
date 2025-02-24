import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

//함수 컴포넌트 만들기
function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;

// 컴포넌트 : 첫글자 대문자
// 클래스로도 만들 수 있지만, 코드가 길어짐 ! 보통 함수로 호출함
