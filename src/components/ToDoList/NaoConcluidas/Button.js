import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.color};
  border-radius: 5px;
  padding: 8px;
  margin: 0 8px;
`;