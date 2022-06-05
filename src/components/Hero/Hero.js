import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis placeat maxime molestiae alias ullam vitae error molestias velit aliquid veniam.
        </SectionText>
        <Button onClick={()=>window.location='https://facebook.com/chaudhuree00'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;