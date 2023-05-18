import Head from "next/head";
import styles from "../styles/Movies.module.css";

import LatestMovies from "../components/LatestMovies";
import RightSidebar from "../components/RightSidebar";

import connectDb from "../DB/connectDb";
import Movies from "../DB/models/movies";
import Screenings from "../DB/models/screenings";

// Get all movies and screenings from DB
export async function getServerSideProps() {
  await connectDb();
  const moviesUnsorted = await Movies.find({}, { _id: 0 }).lean();
  const movies = moviesUnsorted.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const screenings = await Screenings.find({}, { _id: 0 }).lean();
  return { props: { movies, screenings } };
}

export default function MoviesPage({ movies, screenings }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kino Luleå / Alla Filmer</title>
        <meta
          name="description"
          content="Fictional website for cinema in Luleå"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles["main-container"]}>
          <div className={styles["main-container-content-article-small"]}>
            <p>ALLA FILMER</p>
          </div>
          <LatestMovies movies={movies} />
        </div>
        <div className={styles["right-container"]}>
          <RightSidebar screenings={screenings} movies={movies} />
        </div>
      </main>
    </div>
  );
}
