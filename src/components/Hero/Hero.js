import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Hey there, <br />
        I'm Gian De Palma
      </SectionTitle>
      <SectionText>
        I'm a full stack developer based in London. <br />I code beautiful things for the web, and I love what I do.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:dplgian@gmail.com'}>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Hero;