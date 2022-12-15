import './Button.scss';
import cx from "classnames";

export default function Button({ children, type, variation, ...props }) {

  return (
    <button
        {...props}
        className={cx(
            variation === 'secondary' ? 'secondary-button' : 'primary-button')
    }
        type={type}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variation: 'primary',
  type: "button"
}