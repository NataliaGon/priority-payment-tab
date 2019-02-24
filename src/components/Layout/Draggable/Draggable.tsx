import * as React from "react";
import { ComponentBaseProperties, PriorityIcon } from "../../../core";
import { Icon } from '../../Icon/Icon';
import classNames from 'classnames';
import styles from "./Draggable.module.scss";

interface DraggableProperties extends ComponentBaseProperties {
    dragHandleProps: any;
    draggableProps: any;
    innerRef: any;
    isDragged: boolean;
    inDrag: boolean;
    children?: any
}

export function Draggable(props: DraggableProperties) {
    const { draggableProps, dragHandleProps, innerRef, isDragged, inDrag, children } = props;
    const componentClass = classNames(styles.component,{[styles.dragged]: isDragged, [styles.inDrag]: inDrag})
    const dragClass = classNames(styles.dragIconContainer,props.componentClasses)
    return (
        <div ref={innerRef} {...draggableProps} className={componentClass}>
            <div className={dragClass} {...dragHandleProps}>
                <Icon icon={PriorityIcon.iconReorder} skin="standart"/>
            </div>
            {children}
        </div>
        
    );
}

