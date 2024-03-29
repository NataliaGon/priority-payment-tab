import classNames from 'classnames';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ComponentAnimatedProperties, ComponentBase, keyCodes } from '../../../../core';
import styles from './SidePanel.module.scss';


interface SidePanelProperties extends ComponentAnimatedProperties {
	onOpen?(): boolean,
	onClose?(closeCallback: Function): boolean,
	content?(props: InjectedSidePanelProps): JSX.Element,
}

export interface InjectedSidePanelProps {
	open: boolean,
	openPanel(): void,
	closePanel(): void,
	hidePanel(): void
}

export class SidePanel extends ComponentBase<SidePanelProperties> {

	focusRef;

	constructor(properties: SidePanelProperties) {
		super(properties);

		this.state = {
			open: false
		}

		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
		this.hide = this.hide.bind(this);
		this.escFunction = this.escFunction.bind(this);
	}

	componentDidMount() {
		//event listener for esc button
		document.addEventListener("keydown", this.escFunction, false);
	}

	componentWillUnmount() {
		//remove event listener for esc button
		document.removeEventListener("keydown", this.escFunction, false);
	}

	//close panel on clicking ESC button
	escFunction(event: { keyCode: number; }) {
		if (this.state.open && event.keyCode === keyCodes.ESC) {
			this.close();
		}
	}

	public close() {
		const { onClose } = this.props;
		if (onClose && onClose(this.hide) === false) {
			return;
		}
		this.hide();
	}

	public hide() {
		this.setState({ open: false });
	}

	public open() {
		const { onOpen } = this.props;
		if (onOpen && onOpen() === false) {
			return;
		}
		this.setState({ open: true })
	}

	public focus() {
		this.focusRef && this.focusRef.focus();
	}

	render() {
		const { content: Content } = this.props;
		const { transitionName = styles.SidePanel, transitionEnterTimeout = 500, transitionLeaveTimeout = 500 } = this.props;
		const { open } = this.state;
		const classes = classNames(styles.component, styles.opacity, this.props.componentClasses);
		return (
			<CSSTransition in={open} key='SidePanel' classNames={{
				enter: styles.enter,
				enterActive: styles.enterActive,
				exit: styles.leave,
				exitActive: styles.leaveActive
			}} timeout={500} unmountOnExit>
				{() => (
					<div className={styles.blocker}>
						<div tabIndex={-1} className={classes} ref = {ref => this.focusRef = ref}>
							<div className={styles.opacity}>
								{
									Content && <Content open={open}
										openPanel={this.open}
										closePanel={this.close}
										hidePanel={this.hide}
										{...this.props} />
								}
								{this.props.children}
							</div>
						</div>
					</div>
				)}
			</CSSTransition>
		);
	}
}
