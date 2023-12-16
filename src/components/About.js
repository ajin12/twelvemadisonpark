import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  height: 100vh;
  align-items: center;
  background-color: #181a32;
  text-align: justify;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    text-align: justify;
  }
`;

const ParagraphContainer = styled.div`
  width: 50%;
  gap: 12px;
  display: flex;
  flex-direction: column;
  max-height: 476px;
  overflow: auto;

  @media (max-width: 768px) {
    width: 72%;
  }
`;

const Paragraph = styled.div`
  color: white;
  font-family: "Cormorant";
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

function About() {
  return (
    <PageContainer>
      <ParagraphContainer>
        <Paragraph>
          At Twelve Madison Park, we are a collective of ardent gastronomes
          embarking on an epicurean odyssey through a realm of unparalleled
          flavors and experiences. Inspired by the ever-evolving and diverse
          gastronomic landscape that envelops us, we have dedicated ourselves to
          the meticulous excavation of hidden gastronomic gems that define our
          culinary identity.
        </Paragraph>
        <Paragraph>
          Our team, in synergy with local artisans and connoisseurs of the
          culinary arts, is steadfastly committed to full immersion in the
          opulent tapestry of our immediate milieu. Much akin to the
          ever-changing canvas of gastronomy, our establishment serves as a
          dynamic atelier where we perpetually unearth the quintessence of our
          culinary creativity.
        </Paragraph>
        <Paragraph>
          We ardently recognize the imperative of fostering community
          connections and, with an attitude of profound humility, we undertake
          the challenge of unraveling the narratives, ingredients, and
          traditions that bequeath uniqueness to our culinary tapestry. Our
          gastronomic expedition acknowledges no final destination but rather
          navigates an endless voyage, paying homage to the cadence and seasons
          dictated by both nature and the essence of our craft.
        </Paragraph>
        <Paragraph>
          Kindly join us at Twelve Madison Park as we invite you to partake in
          our ceaseless endeavor to disseminate the essences, histories, and
          experiences that epitomize our cherished culinary sojourn. We
          cordially extend an invitation to engage in this perpetual
          exploration, deep appreciation, and meaningful communion with the very
          spirit of our culinary craftsmanship.
        </Paragraph>
      </ParagraphContainer>
    </PageContainer>
  );
}

export default About;
