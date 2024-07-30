import Container from '../../../../common/Container';
import Form from '../Form';
import { ReactComponent as MoonIcon } from './images/icon-moon.svg';
import { HeaderWrapper, TitleWrapper, Title } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <TitleWrapper>
          <Title>Todo</Title>
          <MoonIcon />
        </TitleWrapper>
        <Form />
      </Container>
    </HeaderWrapper>
  )
}

export default Header;