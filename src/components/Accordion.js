import React, {useState} from 'react';

const Accordian =({items})=>{

    //deconstructing usestate array which  has 2  variables
    const [activeIndex,setActiveIndex]= useState(null);

    const onTitleClick=(index)=>{
        setActiveIndex(index);
    };

    const renderItems = items.map((item,index) =>{
        const active= index===activeIndex ? 'active':'';
        
        return(
            // fragment to avoid extra element and avoid doble line on top
            <React.Fragment key={item.title}>
                <div 
                className={`title ${active}`}
                onClick={()=>onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
   
    return(

        <div className="ui styled accordion">{renderItems}
        </div>
    );
};

export default Accordian;