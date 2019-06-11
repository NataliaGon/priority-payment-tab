import {
   Button,
   ComponentBase,
   ComponentBaseProperties,
   Icon,
   Input,
   Label,
   PriorityIcon
} from 'priority-style-react';
import * as React from 'react';

import stylesMain from '../../SidePanelExample.module.scss';
import styles from './Header.module.scss';


interface HeaderBlockProperties extends ComponentBaseProperties {
   withInput?: any
}

export class Header extends ComponentBase<HeaderBlockProperties> {
   clickHandler = () => {
      this.setState({ withInput: !this.props.withInput });
   }

   render() {
      const inputComponent = (this.props.withInput) ?

         <Input skin="line" placeholder="New Search">
            <div style={{ display: "flex" }}>
               <button className={styles.iconDoneWrapper} onClick={this.clickHandler}>
                  <Icon iconColor="white" icon={PriorityIcon.done} />
               </button>
               <button onClick={this.clickHandler}>
                  <Icon icon={PriorityIcon.closeSmall} />
               </button>
            </div>
         </Input>
         : '';

      const labelComponent = (this.props.withInput) ? '' : <Label icon={PriorityIcon.filterBig} iconCounter={5} skin="large">חיפוש חדש</Label>;

      return (
         <div className={stylesMain.stackPanel} style={{ backgroundColor: "#ebedee", border: "1px solid #e2eaf1" }}>
            <div className={styles.componentWrapper}>
               <div className={stylesMain.rowPanel}>
                  {/* <Title>Advanced Search</Title> */}
                  <h1>חיפוש מתקדם</h1>
                  <Button skin="stroke" shape="round" icon={PriorityIcon.arrowRightLong} />
               </div>
               <div className={stylesMain.rowPanel} >
                  <div className={styles.secondRowWrapper} >
                     <div onClick={this.clickHandler}>
                        {labelComponent}
                     </div>
                  </div>
                  {inputComponent}
                  <div style={{ display: "flex" }}>
                     <Label icon={PriorityIcon.questionCircle} textHref="#">Help</Label>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
