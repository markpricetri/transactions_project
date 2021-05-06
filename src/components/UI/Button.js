import styled from 'styled-components'

const Button = styled.button`
  font: inherit;
  border: 1px solid var(--color-button-outline);
  border-radius: 10px;
  background: var(--color-button-background);
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
  height: 2.6rem;
  margin-top: ${props => (props.inForm ? "32px" : "0px")};

  &:hover,
  &:active {
    background: var(--color-button-background-active);
    border-color: var(--color-button-background-active);
  }

  &:focus {
    outline: none;
  }
`;

export default Button;