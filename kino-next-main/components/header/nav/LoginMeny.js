import MenyLink from "./MenyLink";
import styles from "../../../styles/Nav.module.css";

import { LoginContext } from "../../contexts/loginContext";
import { useContext } from "react";

export default function LoginMeny() {
  const { userObj } = useContext(LoginContext);

  function signOutUser() {
    window.cookie = "_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload(false);
  }

  return (
    <div className={styles.nav_utilites_containter}>
      {userObj.user !== null ? (
        <div className={styles.utilites_link_container}>
          <MenyLink
            _tag={"/my-page"}
            _innerText={userObj.user}
            _divClass={"login-meny-link"}
          />
          <button onClick={signOutUser}>Logga ut</button>
        </div>
      ) : (
        <div className={styles.utilites_link_container}>
          <MenyLink
            _tag={"/login"}
            _innerText={"Logga In"}
            _divClass={"login-meny-link"}
          />
          <MenyLink
            _tag={"/signup"}
            _innerText={"Skapa Konto"}
            _divClass={"login-meny-link"}
          />
        </div>
      )}
    </div>
  );
}

LoginMeny.defaultProps = {
  _class: "login-meny",
};
