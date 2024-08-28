import Hero from "../../components/Hero/Hero";
import Catalog from "../../components/Catalog/Catalog";
import AFewWords from "../../components/AFewWords/AFewWords";
import Quiz from "../../components/Quis/Quiz";
import Team from "../../components/Team/Team";
import FAQ from "../../components/FAQ/FAQ";
import Contacts from "../../components/Contacts/Contacts";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Catalog />
      <AFewWords />
      <Quiz />
      <Team />
      <FAQ />
      <Contacts />
      <AnyQuestions />
    </div>
  );
};

export default Home;
