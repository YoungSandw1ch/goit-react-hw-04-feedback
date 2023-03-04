import PropTypes from 'prop-types';
import { Partition, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Partition>
      <Title>{title}</Title>
      {children}
    </Partition>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
