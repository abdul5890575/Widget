import React from 'react';

const Link=({className,href,children})=>{
 const onClick=(event)=>{
    //metaon ios and clrt on windowsto open new tab
    if(event.metaKey || event.ctrlKey){
        return;
    }
    
    event.preventDefault();
    // to change URL without refreshing page
    window.history.pushState({},'',href);

    //for communicating to route component that URL changed
    const navEvent= new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
 };

    return( 
    <a onClick={onClick} className={className} href={href}>{children}</a>
     );
};

export default Link;