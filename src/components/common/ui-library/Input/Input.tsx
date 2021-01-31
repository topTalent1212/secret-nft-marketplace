import React from 'react';
import styled from 'styled-components';

export type SearchFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  full?: boolean;
  medium?: boolean;
  light?: boolean;
};

const SearchField = styled.input<SearchFieldProps>`
  height: 43px;
  left: 211px;
  top: 1px;
  text-indent: 10px;
  ${({ full }) =>
    full &&
    `
    width: 100%;
  `}
  ${({ medium }) =>
    medium &&
    `
    width: 50%;
  `}
  ${({ light }) =>
    light
      ? `
    background: rgba(0, 0, 0, 0.01);
    border: 1px solid rgba(0, 0, 0, 0.1);
    
    border-radius: 7px;
  `
      : `
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    
    border-radius: 30px;
  `}
`;

const Input: React.FC<SearchFieldProps> = (props) => <SearchField {...props} />;

export default Input;