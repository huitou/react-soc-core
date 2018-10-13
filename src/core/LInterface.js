import React from 'react';

// hefc, hefp and hifp shape and signatures:
// ...

// hefc, hefp and hifp shape and signature check/enforcement:
// ...

// hefc, hefp and hifp invocation logging:
// ...

class LInterface {
    constructor(hefc, role) {
        this._role = role;
        this._hefc = hefc;
        this._ref = undefined;
    }

    role = () => this._role;
    hefc = () => this._hefc;
    hefp = () => this._ref && this._ref.current && this._ref.current.hefp;
    hifp = () => this._ref && this._ref.current && this._ref.current.hifp;
}

export default LInterface;
