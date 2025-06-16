import emptyBox from '../../../../assets/img/empty-box.svg';
import { Container } from './styles';

function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Empty box" />
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <strong> ”Novo contato” </strong>à cima para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}

export default EmptyList;
