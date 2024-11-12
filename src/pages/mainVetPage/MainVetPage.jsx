import React from "react";
import Container from "../../components/container/Container";
import MainHeader from "../../components/mainHeader/MainHeader";
import TailBook from "../../components/tailBook/TailBook";
import Footer from "../../components/footer/Footer";
import StatisticsVet from "../../components/statisticsVet/StatisticsVet";
import VetMenu from "../../components/vetMenu/VetMenu";

export default function MainVetPage() {
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
      <VetMenu />
      <StatisticsVet />
      <TailBook />
      <Footer />
    </Container>
  );
}
