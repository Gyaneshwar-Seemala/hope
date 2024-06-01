// RotatingText.js
import React from "react";
import { Span, TextP, TextWrapper, Words } from "./RotatingText.styles";
import { HeroButton, HeroSub } from "../Hero/Hero.styles";
function RotatingText({ theme }) {
  return (
    <TextWrapper>
      <TextP>Making a Difference<br /> Together</TextP>
      <Words>
        <Span>Compassionately</Span>
        <Span>Generously</Span>
        <Span>Wholeheartedly</Span>
      </Words>
      <HeroSub>
        Legacy Exchange: Your Donations Help Enrich Lives and Build Stronger Communities. Support Our Mission to Foster Connections, Provide Support, and Create Positive Change. Join Us in Making a Meaningful Impact Across Generations.
      </HeroSub>
      <HeroButton to="/donate">Donate Now</HeroButton>
    </TextWrapper>

  );
}

export default RotatingText;
