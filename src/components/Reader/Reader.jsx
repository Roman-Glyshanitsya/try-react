import { Component } from "react";
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publications } from './Publication';
import { Container } from "./Reader.styled";

export class Reader extends Component {
    state = {
        index: 0,
    };

    changeIndex = value => {
        this.setState(state => ({index: state.index + value}))
    }

    // onPrev = () => {
    //     this.setState(state => ({ index: state.index - 1 }));
    // };

    // onNext = () => {
    //     this.setState(state => ({ index: state.index + 1 }));
    // };

    render() {
        // console.log(this.props.items[this.state.index]);
        const { index } = this.state;
        const currentItem = this.props.items[index];
        const totalItems = this.props.items.length;
        return (
            <Container>
                <Controls
                    onChange={this.changeIndex}
                    current={index + 1}
                    total={totalItems}
                />
                <Progress total={ totalItems } curent={ index + 1 } />
                <Publications item={currentItem} />

            </Container>
        );
}
}