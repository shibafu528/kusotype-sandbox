import React from 'react';

const Wrapper = ({className, component, ...rest}) => {
    const Component = component;
    return (
        <div className={className}>
            <Component {...rest}/>
        </div>
    )
}