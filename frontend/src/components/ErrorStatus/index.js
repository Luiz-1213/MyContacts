import PropTypes from 'prop-types';
import sad from '../../assets/img/sad.svg';
import Button from '../Button';
import { Container } from './styles';

function StatusError({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="sad" />
      <div className="details">
        <strong>Ocorreu um erro ao obter os seus dados!</strong>
        <Button onClick={onTryAgain}>Tentar novamente</Button>
      </div>
    </Container>
  );
}

StatusError.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};

export default StatusError;
