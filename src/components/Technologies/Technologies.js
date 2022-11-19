import React from 'react';
import { DiFirebase, DiReact, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle> Technologies </SectionTitle>
    <SectionText> 
      I've worked with a wide range of technologies in the web development world, from Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle> Front-End </ListTitle>
          <ListParagraph> 
            JavaScript (ES6+)<br />
            Css <br />
            React.js <br />
            Redux 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle> Back-End </ListTitle>
          <ListParagraph> 
            Node.js <br />
            MongoDB <br />
            MySQL <br />
            GraphQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size='3rem' />
        <ListContainer>
          <ListTitle> Tools </ListTitle>
          <ListParagraph> 
            Git <br />
            Testing <br />
            Figma <br />
            Photoshop 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
