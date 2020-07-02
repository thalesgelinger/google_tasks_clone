import React from 'react';
import {FlatList} from 'react-native';
import {CheckBox, colors} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Board,
  Title,
  NavBar,
  Hamburguer,
  AddItem,
  Options,
  MaskAddItem,
  ItemBox,
} from './styles';

export default function App() {
  Icon.loadFont();

  const data = [
    {
      id: 1,
      title: 'Item 1',
    },
    {
      id: 2,
      title: 'Item 2',
    },
    {
      id: 1,
      title: 'Item 1',
    },
    {
      id: 2,
      title: 'Item 2',
    },
    {
      id: 1,
      title: 'Item 1',
    },
    {
      id: 2,
      title: 'Item 2',
    },
    {
      id: 1,
      title: 'Item 1',
    },
    {
      id: 2,
      title: 'Item 2',
    },
    {
      id: 1,
      title: 'Item 1',
    },
    {
      id: 1,
      title: 'Item 1',
    },
    {
      id: 1,
      title: 'Item 1',
    },
    {
      id: 1,
      title: 'Item 1',
    },
    {
      id: 1,
      title: 'Item 1',
    },
  ];

  return (
    <Container>
      <Board>
        <Title>Tasks</Title>
        <FlatList
          data={data}
          renderItem={(item) => (
            <ItemBox>
              <CheckBox
                left
                title={item.title}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                //checked={this.state.checked}
              />
            </ItemBox>
          )}
          keyExtractor={(item) => item.id}
        />
      </Board>
      <NavBar>
        <Hamburguer>
          <Icon name="menu" size={30} color="#FFF" />
        </Hamburguer>
        <MaskAddItem>
          <AddItem>
            <Icon name="add-circle" size={30} color="#FFF" />
          </AddItem>
        </MaskAddItem>
        <Options>
          <Icon name="more-vert" size={30} color="#FFF" />
        </Options>
      </NavBar>
    </Container>
  );
}
