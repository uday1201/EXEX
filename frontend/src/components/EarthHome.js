import React, { Component } from 'react';

import CesiumGlobe from "../cesium/CesiumGlobe";
import SideBar from 'react-sidebar';


import SideBarContent from './SideBarContent';

import marker from '../marker.png';

export default class EarthHome extends Component {
    state = {
        markers: [
            {lat : 37.484505, lon : -122.147877, image : marker, scale: 0.05, id: 1},
            { lat : 39.097465, lon : -84.50703, image : marker, scale : 0.05, id: 2},
            { lat : 7.45886, lon : -24.79249, image : marker, scale : 0.05, id: 3},
            { lat : 28.7040492, lon : 77.1045104, image : marker, scale : 0.05, id: 4},
        ],
        label : {lat : 35.0, lon : -100.0, text : "Catch phrase here"},
        line : [
                {lat : 47.5, lon : -122.3, alt : 20000 },
                {lat : 36.2, lon : -115.0, alt : 20000 },
                {lat : 39.0, lon : -94.6, alt : 20000 },
                {lat : 30.4, lon : -81.6, alt : 20000 },
            ],
        flyToLocation : null,
        sideBarOpen: false,
    }

    handleLeftClick = (mouse_position, scene) => {
        var a = scene.pick(mouse_position)

        if (a != undefined){
            var res = this.state.markers.find( obj => obj.id == a.id )
    
            console.log(res)
            if (!this.state.sideBarOpen)
                this.setState({ sideBarOpen: true })
            console.log(this.state.sideBarOpen)
        } else {
            if (this.state.sideBarOpen)
                this.setState({ sideBarOpen: false })
        }

    }

    handleFlyToClicked = () => {
        this.setState({
            flyToLocation : {lat : 32.6925, lon : -117.1587, alt : 100000}
        });
    }


    render() {
        const {markers, label, line, flyToLocation} = this.state;

        const containerStyle = {
            width: this.state.sideBarOpen ? '70%' : '100%',
            height: '100%',
        };

        // const icons = [marker, marker2, marker3, marker4];
        const labels = [];
        const polylines = [];

        return (
            <SideBar
                styles = {
                    {
                        overlay:{
                            display: "none"
                        },
                        sidebar: {
                            width: '30%',
                            zIndex: 2,
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            transition: 'transform .3s ease-out',
                            WebkitTransition: '-webkit-transform .3s ease-out',
                            willChange: 'transform',
                            overflowY: 'auto',
                          },
                    }
                }
                pullRight={ true }
                sidebar={ <SideBarContent /> }
                open={ this.state.sideBarOpen }
                // onSetOpen={ (open) => {
                //     this.setState({ sideBarOpen: open })
                // } }
            >
                <div style={containerStyle}>
                    <CesiumGlobe
                        icons={markers}
                        labels={labels}
                        polylines={polylines}
                        onLeftClick={this.handleLeftClick.bind(this)}
                        flyToLocation={flyToLocation}
                    />
                </div>
            </SideBar>
        );
    }
}