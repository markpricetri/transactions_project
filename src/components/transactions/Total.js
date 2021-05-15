import styled from 'styled-components';

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  background-color: var(--color-background);
  border: 1px solid var(--color-card-background-bottom);
  height: 40px;
  border-radius: 10px;
`;

const Total = (props) => {
  return (
    <TotalDiv>
      <h4>Total</h4>
      <h4>{props.amount}</h4>
    </TotalDiv>
  );
}

export default Total;