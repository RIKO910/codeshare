import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl">codeshare</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/signup'>Sign up</a></li>
                        <li><a href='/login'>Log In</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;