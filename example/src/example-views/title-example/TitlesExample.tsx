import { Container, Label, RowPanel, Title } from 'priority-style-react';
import React, { Component } from 'react';
import styles from './TitlesExample.module.scss';


class TitlesExample extends Component {
  render() {
    return (
      <div className={ styles.component }>
        <Title skin="h1">Titles</Title>
        <RowPanel componentClasses={ styles.row }>
          <Container componentClasses={ styles.buttonsContainer }>
            <Title skin="h1" textColor="blue">Blue H1 Title</Title>
            <Title skin="h1" textColor="grey">Grey H1 Title</Title>
          </Container>
        </RowPanel>
        <RowPanel componentClasses={ styles.row }>
          <Container componentClasses={ styles.buttonsContainer }>
            <Title skin="h2" textColor="blue">Blue H2 Title</Title>
            <Title skin="h2" textColor="grey">Grey H2 Title</Title>
          </Container>
        </RowPanel>
        <RowPanel componentClasses={ styles.row }>
          <Container componentClasses={ styles.buttonsContainer }>
            <Title skin="h4" textColor="blue">Blue H4 Title</Title>
            <Title skin="h4" textColor="grey">Grey H4 Title</Title>
          </Container>
        </RowPanel>
        <RowPanel componentClasses={ styles.row }>
          <Container componentClasses={ styles.buttonsContainer }>
            <Title textColor="blue">Previous H4 Title</Title>
          </Container>
        </RowPanel>
      </div>
    );
  }
}

export default TitlesExample;
