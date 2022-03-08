import React from 'react';
import {Space, Spin} from "antd";

const Loader = () => {
    return (
            <div className={'loader'}>
                <Spin size="large" />
            </div>
    )};

export default Loader;