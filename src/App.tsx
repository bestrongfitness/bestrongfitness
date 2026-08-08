import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Benefits } from './components/sections/Benefits';
import { Facilities } from './components/sections/Facilities';
import { Hero } from './components/sections/Hero';
import { Reviews } from './components/sections/Reviews';
import { TrainingExperience } from './components/sections/TrainingExperience';
import { VisitContact } from './components/sections/VisitContact';
import { Welcome } from './components/sections/Welcome';

function App() {
  return (
    <>
      <Header />
      <main aria-label="Be Strong Fitness Beerumguda gym homepage">
        <Hero />
        <Welcome />
        <TrainingExperience />
        <Facilities />
        <Benefits />
        <Reviews />
        <VisitContact />
      </main>
      <Footer />
    </>
  );
}

export default App;
