import React, { Component } from 'react';
import {
  SidePanel,
  StackPanel, RowPanel, Container, WrapPanel, ScrollPanel,
  Title, CheckBox, Label, Button, Icon, Tag, Select, OptionItem,
  PriorityIcon
} from 'priority-style-react';
import styles from './ButtonsExample.module.scss';


class ButtonsExample extends Component {
  render() {
    return (
      <div className={ styles.buttonsExampleView }>
        <Title>Buttons</Title>
        <RowPanel componentClasses={ styles.row }>
          <Container componentClasses={ styles.buttonsContainer }>
            <Label skin="bold">Skin</Label>
            <Button skin="primary">primary</Button>
            <Button skin="secondary">secondary</Button>
            <Button skin="stroke">stroke</Button>
            <Button skin="strokeLight">strokeLight</Button>
            <Button skin="strokeTransparent">strokeTransparent</Button>
          </Container>
          <Container componentClasses={ styles.buttonsContainer } skin="dark">
            <Label skin="bold" textColor="white">Dark Container</Label>
            <Button skin="primary" darkContainer>primary</Button>
            <Button skin="secondary" darkContainer>secondary</Button>
            <Button skin="stroke" darkContainer>stroke</Button>
            <Button skin="strokeLight" darkContainer>strokeLight</Button>
            <Button skin="strokeTransparent" darkContainer>strokeTransparent</Button>
          </Container>
          <Container componentClasses={ styles.buttonsContainer }>
            <Label skin="bold">Icons</Label>
            <Button skin="primary" prefixIcon={ PriorityIcon.add }>prefix icon</Button>
            <Button skin="secondary" suffixIcon={ PriorityIcon.done }>suffix icon</Button>
            <Button skin="stroke" prefixIcon={ PriorityIcon.operatorContains } suffixIcon={ PriorityIcon.arrowDropDown }>both</Button>
            <Button skin="strokeLight" icon={ PriorityIcon.search }>Search</Button>
            <Button skin="strokeTransparent" icon={ PriorityIcon.edit }></Button>
          </Container>
          <Container componentClasses={ styles.buttonsContainer }>
            <Label skin="bold">Shape</Label>
            <Button skin="primary">regular</Button>
            <Label >round</Label>
            <Button skin="stroke" shape="round" icon={ PriorityIcon.arrowLeftLong }></Button>
            <Label >square</Label>
            <Button skin="strokeLight" shape="square" icon={ PriorityIcon.search }></Button>
          </Container>
          <Container componentClasses={ styles.buttonsContainer }>
            <Label skin="bold">Size</Label>
            <Button skin="primary" size="small" width='regularFixed'>small</Button>
            <Button skin="primary" size="medium" width='regularFixed'>medium</Button>
            <Button skin="primary" size="large" width='regularFixed'>large</Button>
            <Button skin="stroke" size="small" shape="round" icon={ PriorityIcon.arrowLeftLong }></Button>
            <Button skin="stroke" size="medium" shape="round" icon={ PriorityIcon.arrowLeftLong }></Button>
            <Button skin="stroke" size="large" shape="round" icon={ PriorityIcon.arrowLeftLong }></Button>
          </Container>
          <Container componentClasses={ styles.buttonsContainer }>
            <Label skin="bold">Width</Label>
            <br />
            <Label >contentWidth</Label>
            <Button skin="primary">content</Button>
            <Label >regularFixed</Label>
            <Button skin="stroke" width="regularFixed">fixed</Button>
            <Label >fullWidth</Label>
            <Button skin="strokeLight" width="fullWidth">fullWidth</Button>
          </Container>
          <Container componentClasses={ styles.buttonsContainer }>
            <Label skin="bold">Elevated</Label>
            <Button skin="primary">Elevated</Button>
            <Button skin="primary" elevated={ false }>Not Elevated</Button>
          </Container>
        </RowPanel>
      </div>
    );
  }
}

export { ButtonsExample };
export default ButtonsExample;
