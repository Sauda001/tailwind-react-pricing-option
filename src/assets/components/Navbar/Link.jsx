import React from 'react';

const Link = ({route}) => {
    return (
        <li className='lg:mr-10 px-4 hover:bg-slate-400'>
            <a href={route.url}>{route.name}</a>
        </li>
    );
};

export default Link;