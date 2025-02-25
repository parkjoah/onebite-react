import "./Main.css";

const Main = () => {
  const user = {
    name: "박조아",
    isLongin: false,
  };
  return (
    <>
      {user.isLongin ? (
        <div style={{ backgroundColor: "red", borderBottom: "5px solid blue" }}>
          로그아웃
        </div>
      ) : (
        <div className="login">로그인</div>
      )}
    </>
  );
};

export default Main;
