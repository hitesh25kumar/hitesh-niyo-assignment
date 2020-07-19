import React from 'react';
import Header from './Header';

const Layout = (props) => {
    const {history,match} = props;
    return ( <div>
        <Header history={history} match={match}/>
        {props.children}
    </div> );
}
 
export default Layout;