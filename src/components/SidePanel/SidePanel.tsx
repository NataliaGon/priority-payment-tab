import * as React from 'react';
import  { Component } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { keyCodes } from '../../constants';
import { Button } from '..';
import styles from './SidePanel.scss';

interface SidePanelState {
	open: boolean
}

interface AnimatedSidePanelProps {
	transitionName?: string,
	transitionEnterTimeout?: number,
	transitionLeaveTimeout?: number
}

interface SidePanelProps extends AnimatedSidePanelProps {
	title: string,
	className?: string,
	onOpen?(): boolean,
	onClose?(closeCallback: Function) : boolean,
	content?(props: InjectedSidePanelProps): JSX.Element
}

export interface InjectedSidePanelProps {
	open: boolean,
	openPanel(): void,
	closePanel(): void,
	hidePanel(): void
}

export class SidePanel extends Component<SidePanelProps, SidePanelState> {

	focusRef;

	constructor(props) {
		super(props);

		this.state = {
			open: true
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

	componentDidUpdate() {
		this.focus();
	}

	componentWillUnmount(){
		//remove event listener for esc button
    	document.removeEventListener("keydown", this.escFunction, false);
  	}

	//close panel on clicking ESC button
	escFunction(event){
	    if(this.state.open && event.keyCode === keyCodes.ESC) {
	      this.close();
	    }
	}

	public close() {
		const { onClose } = this.props;
		if(onClose && onClose(this.hide) === false) {
			return;
		}
		this.hide();
	}

	public hide() {
		this.setState({open: false});
	}

	public open() {
		const { onOpen } = this.props;
		if(onOpen && onOpen() === false) {
			return;
		}
		this.setState({open: true})
	}

	public focus() {
		this.focusRef && this.focusRef.focus();
	}

	render() {
		const { title, className, content: Content } = this.props;
		const { transitionName = styles.sidepanel, transitionEnterTimeout = 500, transitionLeaveTimeout = 500 } = this.props;
		const { open } = this.state;
		const panelClass = classNames(styles.panel, className);
		return (
			<CSSTransition
				in={open}
				key='sidepanel'
	          	classNames={{enter: styles.enter,
					       	enterActive: styles.enterActive,
					       	exit: styles.leave,
					       	exitActive: styles.leaveActive}}
      		  	timeout={500}
      		  	unmountOnExit
      		>
			{() => (
				<div className={styles.blocker}>
					<div className={panelClass}>
						<div className={styles.opacity}>
							<button className={styles.focusButton}
									ref={i => this.focusRef = i} />
							<div className={styles.header}>
								<Button className={styles.closeButton}
										//img={require('../../images/close.png')}
										//alt={textConst.closeAlt}
										onClick={this.close}>X</Button>
								<div className={styles.title}>{title}</div>
							</div>
							{
								Content && <Content open={open}
									 openPanel={this.open}
									 closePanel={this.close}
									 hidePanel={this.hide}
									 {...this.props}/>
							}
						</div>
					</div>
				</div>
				)
			}
				
			
			</CSSTransition>
		);
	}
}

export default SidePanel;
