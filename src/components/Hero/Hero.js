import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Mwaura's Portfolio.
      </SectionTitle>
      <SectionText>
        For all your developer and engineering needs.
      </SectionText>
      <Button onClick={()=> window.open('https://www.linkedin.com/in/mwaura-mbugua','_blank')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;