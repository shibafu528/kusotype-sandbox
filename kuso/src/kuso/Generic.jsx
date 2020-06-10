import React from 'react';

const Generic = ({className, tag, ...rest}) => {
    const Tag = tag;
    return (
        <div className={className}>
            <Tag {...rest}/>
        </div>
    )
}

export default Generic;