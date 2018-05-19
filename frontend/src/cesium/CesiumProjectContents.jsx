import React, {Component} from "react";

import BillboardCollection from "cesium/Source/Scene/BillboardCollection";
import LabelCollection from "cesium/Source/Scene/LabelCollection";
import PolylineCollection from "cesium/Source/Scene/PolylineCollection";

import CesiumBillboard from "./primitives/CesiumBillboard";
import CesiumLabel from "./primitives/CesiumLabel";
import CesiumPolyline from "./primitives/CesiumPolyline";

export class CesiumProjectContents extends Component {
    constructor(props) {
        super(props);

        this.billboards = new BillboardCollection();
        this.labels = new LabelCollection();
        this.polylines = new PolylineCollection();

        this.primitiveCollections = [this.billboards, this.labels, this.polylines];

        const {scene} = props;

        if(scene) {
            this.primitiveCollections.forEach(primitiveCollection => scene.primitives.add(primitiveCollection));
        }
    }

    componentWillUnmount() {

        this.primitiveCollections.forEach(primitiveCollection => {
            if(!primitiveCollection.isDestroyed()) {
                primitiveCollection.destroy();
            }
        });

        const {scene} = this.props;

        if(scene && !scene.isDestroyed() && scene.primitives) {
            this.primitiveCollections.forEach(primitiveCollection => scene.primitives.remove(primitiveCollection));
        }
    }

    render() {
        const {icons = [], labels = [], polylines = []} = this.props;

        const renderedBillboards = icons.map( (icon, index) =>
            <CesiumBillboard
                {...icon}
                billboards={this.billboards}
                key={index}
                onClick = { () => {
                    console.log("Hello World")
                } }
            />
        );

        const renderedLabels = labels.map( (label, index) =>
            <CesiumLabel
                {...label}
                labels={this.labels}
                key={index}
            />
        );

        const renderedPolylines = polylines.map( (polyline, index) =>
            <CesiumPolyline
                coords={polyline}
                polylines={this.polylines}
                key={index}
            />
        );


        return (
            <span>
                {renderedBillboards}
                {renderedLabels}
                {renderedPolylines}
            </span>
        );
    }
}


export default CesiumProjectContents;
