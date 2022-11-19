import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

const Contacs = () => {
  return (
    <Section id='about'>
      <SectionTitle> Get in touch </SectionTitle>
      <SectionText> 
        My inbox is always open and I'm currently looking to discuss new opportunities. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </SectionText>
      <Button onClick={() => window.location = 'mailto:dplgian@gmail.com'}>Say Hello</Button>
    </Section>
  )
}

export default Contacs