import React from "react";
import Container from "../../components/container/Container";
import MainHeader from "../../components/mainHeader/MainHeader";
import TailBook from "../../components/tailBook/TailBook";
import Footer from "../../components/footer/Footer";
import StatisticsVet from "../../components/statisticsVet/StatisticsVet";

export default function MainVetPage() {
  return (
    <Container>
      <MainHeader />
      <StatisticsVet />
      <TailBook />
      <Footer />
    </Container>
  );
}
