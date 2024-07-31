import Container from '../../../../common/Container';
import Form from '../Form';

import { HeaderWrapper, TitleWrapper, Title, StyledMoonIcon } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <TitleWrapper>
          <Title>Todo</Title>
          <StyledMoonIcon />
        </TitleWrapper>
        <Form />
      </Container>
    </HeaderWrapper>
  )
}

export default Header;