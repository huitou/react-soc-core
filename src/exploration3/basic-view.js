import React from 'react';

const BasicView = (props) => {
    return (
        <div>
            <div>Basic View - List</div>
            <div>
                <button onClick={() => props['connect_name_1'].hefu.replace([{ b: 'b1' }])}>change list 1</button>
                <button onClick={() => props['connect_name_1'].hefu.reset()}>reset object 1</button>
            </div>
            <div>
                <button onClick={() => props['connect_name_2'].hefu.replace([{ b: 'b2' }])}>change list 2</button>
                <button onClick={() => props['connect_name_2'].hefu.reset()}>reset object 2</button>
            </div>
        </div>
    );
};

export default BasicView;
