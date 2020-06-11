import React from 'react';

const Ireko = ({className, children}) => (
    <div className={className}>
        {children}
    </div>
)
Ireko.defaultProps = {
    className: 'ireko'
};

Ireko.InnerItem = (name) => (
    <div className={'ireko-inner'}>なかみは{name}</div>
)

export default Ireko;