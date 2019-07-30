import React from 'react';

const BasicView = (props) => {
    return (
        <div>
            <div>Basic View</div>
            <div>
                <button onClick={() => props['connect_name_1'].hefu.change({ b: 'b1' })}>change object 1</button>
                <button onClick={() => props['connect_name_1'].hefu.reset()}>reset object 1</button>
            </div>
            <div>
                <button onClick={() => props['connect_name_2'].hefu.change({ b: 'b2' })}>change object 2</button>
                <button onClick={() => props['connect_name_2'].hefu.reset()}>reset object 2</button>
            </div>
        </div>
    );
};

export default BasicView;
