import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'WIP'},
  { number: 2, text: 'WIP', },
  { number: 3, text: 'WIP', },
  { number: 4, text: 'WIP', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Accomplishments </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>  
  </Section>
);

export default Acomplishments;
