import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import xCircleIcon from '../../../assets/img/x-circle.svg';
import checkCircleIcon from '../../../assets/img/check-circle.svg';

function ToastMessage({ message, onRemoveMessage, isLeaving, animatedRef }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      $type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      $isLeaving={isLeaving}
      ref={animatedRef}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="x" />}
      {message.type === 'success' && <img src={checkCircleIcon} alt="check" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};

export default memo(ToastMessage);
