/**
 * This component should render a plot with Plotly, taking these three props:
 *
 * - xData: the data to be rendered on the x-axis as an array
 * - yData: The data to be rendered on the y-axis as an array
 * - type:  The type of plot we want Plotly to render
 *
 * To see an example of how you should use Plotly look at the index.html file in the public/ folder.
 * (and feel free to delete the code in there)
 */
import React from 'react';
import Plotly from 'plotly.js/dist/plotly.min.js';

const layout = {
    margin: { t: 0, r: 0, l: 30 },
    xaxis: { gridcolor: 'transparent' }
};

const config = {
    displayModeBar: false
};

class Plot extends React.PureComponent {

    constructor( props ) {
        super( props );
        this.state = {
            data:  {
                x: this.props.xData,
                y: this.props.yData,
                type: this.props.type
            }
        }
    }

    componentDidUpdate() {
        this.renderPlot();
    }

    componentDidMount() {
        this.renderPlot();
    }

    renderPlot = () => {
        return   Plotly.newPlot( this.element, [this.state.data], layout, config );
    };

   /* shouldComponentUpdate( nextProps, nextState ) {
        const test = JSON.stringify(nextState.data.x) !== JSON.stringify(this.state.data.x) ||
            JSON.stringify(nextState.data.y) !== JSON.stringify(this.state.data.y) ||
            nextState.data.type !== this.state.data.type;
        console.log( 'shouldComponentUpdate', test );
        return test;
    }*/

    changeData = () => {
        this.setState( { data: { ...this.state.data, type: this.state.data.type === 'bar' ? 'scatter' : 'bar' } } );
    };

    onClick = () => {
        this.setState( { data: this.state.data } );
    };

    render() {
        return (
            <div>
                <button onClick={this.changeData}>Apply changes</button>
                <button onClick={this.onClick}>No changes</button>
                <div ref={( element ) => {
                    this.element = element;
                }}/>
            </div>
        );
    }
}

export default Plot;
