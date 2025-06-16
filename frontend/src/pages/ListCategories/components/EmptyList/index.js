import emptyCategory from '../../../../assets/img/empty-category.svg';
import { Container } from './styles';

function EmptyList() {
  return (
    <Container>
      <img src={emptyCategory} alt="Empty category" />
      <p>
        Você ainda não tem nenhuma categoria cadastrada! Clique no botão
        <strong> ”Nova Categoria” </strong>à cima para cadastrar o sua primeira!
      </p>
    </Container>
  );
}

export default EmptyList;
