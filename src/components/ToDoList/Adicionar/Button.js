import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
  padding: 8px 18px;
  margin: 0 8px;
`;