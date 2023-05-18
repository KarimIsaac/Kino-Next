import { useContext, useEffect } from "react";
import { LoginContext } from "../components/contexts/loginContext";
import style from "../styles/MyPage.module.css";
  
import Head from "next/head";

export default function MyPage({ session }) {
  const { userObj } = useContext(LoginContext);

  if (session === userObj.key) {
    return (
      <>
        <Head>
          <title>Kino Luleå | {userObj.user}</title>
          <meta
            name="description"
            content="Fictional website for cinema in Luleå"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        { /*========== content ========== */}
        <div className={style["main-container-content-article-small"]}>
            <p>Min sida: {userObj.user}</p>
        </div>
        <div className={style["my-page"]}>
          <div>
            <h2>{userObj.user}</h2>
            <p>
              <b>E-mail: </b> {userObj.email}
            </p>
            <p>
              <b>Konto-id: </b>
              {userObj.id}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export async function getServerSideProps({ req }) {
  return {
    props: { session: req.cookies._session || "" }, // will be passed to the page component as props
  };
}
