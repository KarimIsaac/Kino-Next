import { useState, useContext } from "react";
import { LoginContext } from "../../contexts/loginContext.js";
import styles from "../../../styles/LogIn.module.css";


import Input from "./UserInput";

export default function UserLoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserObj } = useContext(LoginContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { userEmail, password };
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const Obj = await res.json();

    if (!Obj.err) {
      setUserObj({ ...Obj, logedIn: true });
    } else {
      alert(Obj.message);
    }
  }

  return (
    <div className={styles["login"]}>
      <form onSubmit={handleSubmit}>
        <div>
          <Input _label={"E-mail"} _type="email" _setState={setUserEmail} />
          <Input
            _minLgth={4}
            _label={"Lösenord"}
            _type="password"
            _setState={setPassword}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
}
