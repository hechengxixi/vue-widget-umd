import React from 'react';
import PropTypes from 'prop-types';

function NoAuth({cponname}){
    return (
        <div>没有 {cponname} 权限</div>
    )
}

NoAuth.propTypes = {
    cponname: PropTypes.string,
}

export default NoAuth;