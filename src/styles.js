import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #111;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Board = styled.SafeAreaView``;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 38px;
  margin: 20px 40px;
`;

export const NavBar = styled.View`
  height: 60px;
  background-color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
`;

export const Hamburguer = styled.TouchableOpacity``;

export const MaskAddItem = styled.View`
  margin-bottom: 100px;
  background-color: #111;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

export const AddItem = styled.TouchableOpacity`
  background-color: #333;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const Options = styled.TouchableOpacity``;

export const ItemBox = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #333;
  padding-left: 0px;
`;
