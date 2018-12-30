import { Component } from "react";
export default class Autocomplete extends Component {
    static propTypes: {
        suggestions: any;
    };
    static defaultProps: {
        suggestions: never[];
    };
    render(): JSX.Element;
}
