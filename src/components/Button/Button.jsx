import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({
  className,
  label,
  type,
  onClick,
  initial,
  whileInView,
  viewport,
  whileHover,
  whileTap,
  transition,
}) => {
  return (
    <motion.button
      className={className}
      type={type}
      onClick={onClick}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
    >
      {label}
    </motion.button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  initial: PropTypes.object,
  whileInView: PropTypes.func,
  viewport: PropTypes.object,
  whileHover: PropTypes.object,
  whileTap: PropTypes.object,
  transition: PropTypes.object,
};
