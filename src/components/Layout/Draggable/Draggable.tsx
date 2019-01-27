import * as React from "react";
import { ComponentBaseProperties, PriorityIcon } from "../../../core";
import { Icon } from '../../Icon/Icon';
import styles from "./Draggable.module.scss";

class ContainerProperties extends ComponentBaseProperties {
    activeHover?: boolean;
    activeClick?: boolean;
}
export function Draggable(props: ContainerProperties) {
    
    return (
        <div style={{display:props.activeClick||props.activeHover ?"block":"none"}} className={styles.component}>
            <Icon icon={PriorityIcon.iconReorder} iconColor="blue"/>
        </div>
    );
}

