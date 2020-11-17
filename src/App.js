import React, {useState} from 'react';
import Accordian from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/dropdown';
import Translate from './components/Translate';
import Route from './components/route';
import Header from './components/header';


const items =[
    {
        title:'What is React?',
        content:'React is front end framwork'
    },

    {
        title:'Why use React?',
        content:'Favorite framework'
    },

    {
        title:'how to use React?',
        content:'By Creating component'
    }
];

const options=[
    {
        label:"Red",
        value:'red'
    },
    {
        label:"Green",
        value:'green'
    },
    {
        label:"Blue",
        value:'blue'
    },
];

export default ()=>{
    const [selected,setSelected]= useState(options[0]);
    

    return (
    <div>
        <Header/>
        <Route path='/'>
            <Accordian items={items} /> 
        </Route>
        <Route path='/dropdown'>
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label='Select a Color' />
        </Route>
        <Route path='/list'>
            <Search/>
        </Route>
        <Route path='/translate'>
            <Translate/>
        </Route>
    </div>
    
    );
};

