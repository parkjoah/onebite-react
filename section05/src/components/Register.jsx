//간단한 회원가입 폼
// 1이름 2생년월일 3국적 4자기소개

import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  console.log(input);

  const onChangeName = (e) => {
    setInput({ ...input, name: e.target.value });
  };
  const onChangeBirth = (e) => {
    setInput({ ...input, birth: e.target.value });
  };
  const onChangeCountry = (e) => {
    setInput({ ...input, country: e.target.value });
  };
  const onChangeBio = (e) => {
    setInput({ ...input, bio: e.target.value });
  };
  return (
    <>
      <div>
        <input
          value={input.name}
          onChange={onChangeName}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input value={input.birth} onChange={onChangeBirth} type="date" />
      </div>
      <div>
        <select value={input.country} onChange={onChangeCountry}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea value={input.bio} onChange={onChangeBio} />
      </div>
    </>
  );
};

export default Register;
