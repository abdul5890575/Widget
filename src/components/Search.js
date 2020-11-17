import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Search =()=>{
    const[term,setterm]=useState('programming');
    const[results,setresults]=useState([]);

   //cant put asyn directly in useEffect +u can only return function from this use effect (did mount func)
    useEffect(()=>{
        const Searchwiki= async()=>{
            const{data}= await axios.get('http://en.wikipedia.org/w/api.php',{
            params:{
                action:'query',
                list:'search',
                origin:'*',
                format:'json',
                srsearch:term
            }
            });

            setresults(data.query.search);
        };

            if (term && !results.length){
                Searchwiki();
            }

            else{
                
                const timeoutID= setTimeout(()=>{

                    if(term){
                        Searchwiki();
                    }
                },1000);
                //cancels timmer
                return ()=>{
                    clearTimeout(timeoutID)
                };
            }
       
    },[term]);
    
    const renderedresults=results.map((result)=>{
        return(
            <div key={"result.pageid"} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                        <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>   
                </div>
            </div>
        );
    })

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    className='input'
                    value={term}
                    onChange={e=>setterm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedresults}
            </div>
        </div>
    );
}

export default Search;