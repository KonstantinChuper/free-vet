import MainHeader from "../../components/mainHeader/MainHeader";
import Opportunity from "../../components/opportunity/Opportunity.jsx";
import Statistics from "../../components/statistics/Statistics.jsx";
import TailBook from "../../components/tailBook/TailBook.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Container from "../../components/container/Container.jsx";
import { useEffect } from "react";

const MainPage = () => {

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("user_id");

    if (userId) {
      localStorage.setItem("userId", userId);
    }
  }, []);

  return (
    <Container>
      <MainHeader />
      <Opportunity />
      <Statistics />
      <TailBook />
      <Footer />
    </Container>
  );
};

export default MainPage;
