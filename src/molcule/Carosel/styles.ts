import styled from 'styled-components';

export const StyledCarosel = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
`;

export const TextFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 10rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  // justify-content: center;
  // align-items: center;
  // width: 100%;
  // gap: 0.5rem;
`;

export const CaroselContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 1rem;
`;

export const EmptyBusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 10rem;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: white;
`;

export const EmptyBusBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6.5rem;
`;
