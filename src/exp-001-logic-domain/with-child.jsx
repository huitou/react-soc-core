import React, { Component } from 'react';

const withChild = (LCompChild, role) => (LConn) => (LCompParent) => (props) => {
    return (
        <LCompParent {...props} >
            <LCompChild extIRole={role} extIConn={LConn} extIReg={this.regIntI} />
        </LCompParent>
    );
}