import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Navigation from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Header />
      <MovieList />
      <Navigation />
    </main>
  );
}
