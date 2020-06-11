import React from 'react';

export const Polymorphic = ({className, tag, ...rest}) => {
    const Tag = tag;
    return (
        <div className={className}>
            <Tag {...rest}/>
        </div>
    )
}

export const DefaultPoly = ({className, tag, ...rest}) => {
    const Tag = tag;
    return (
        <div className={className}>
            <Tag {...rest}/>
        </div>
    )
}
DefaultPoly.defaultProps = {
    tag: 'div'
}