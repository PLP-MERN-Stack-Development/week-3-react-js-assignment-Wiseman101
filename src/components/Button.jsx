// import React from 'react';
// import PropTypes from 'prop-types';

// /**
//  * Button component with different variants
//  * @param {Object} props - Component props
//  * @param {string} props.variant - Button variant (primary, secondary, danger)
//  * @param {string} props.size - Button size (sm, md, lg)
//  * @param {boolean} props.disabled - Whether the button is disabled
//  * @param {function} props.onClick - Click handler function
//  * @param {React.ReactNode} props.children - Button content
//  * @returns {JSX.Element} - Button component
//  */
// const Button = ({ 
//   variant = 'primary', 
//   size = 'md', 
//   disabled = false, 
//   onClick, 
//   children,
//   className = '',
//   ...rest 
// }) => {
//   // Base classes
//   const baseClasses = 'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  
//   const VARIANT_CLASSES = {
//   primary: 'bg-blue-600 hover:bg-blue-700 text-white',
//   secondary: 'bg-gray-300 hover:bg-gray-400 text-black',
//   danger: 'bg-red-600 hover:bg-red-700 text-white',
// };

// export default function Button({ children, onClick, variant = 'primary' }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 rounded shadow transition duration-200 ${VARIANT_CLASSES[variant]}`}
//     >
//       {children}
//     </button>
//   );
// }

  
//   // Size classes
//   const sizeClasses = {
//     sm: 'px-2 py-1 text-sm',
//     md: 'px-4 py-2',
//     lg: 'px-6 py-3 text-lg',
//   };
  
//   // Disabled classes
//   const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
//   // Combine all classes
//   const buttonClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.md} ${disabledClasses} ${className}`;
  
//   return (
//     <button
//       className={buttonClasses}
//       disabled={disabled}
//       onClick={onClick}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// };

// Button.propTypes = {
//   variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success', 'warning']),
//   size: PropTypes.oneOf(['sm', 'md', 'lg']),
//   disabled: PropTypes.bool,
//   onClick: PropTypes.func,
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
// };

// export default Button; 

const VARIANT_CLASSES = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-300 hover:bg-gray-400 text-black',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
};

export default function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded shadow transition duration-200 ${VARIANT_CLASSES[variant]}`}
    >
      {children}
    </button>
  );
}
