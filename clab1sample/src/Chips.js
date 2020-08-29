import React, {useEffect, useState} from 'react'

import Chip from '@material-ui/core/Chip';

//   alert(chiplist)
function Chips(props){
    const [list, setList] = useState([]);
    useEffect(()=>{
        console.log('chips.js useEffect', props.chiplist);
        
         setList(props.chiplist);
        // alert(props.chiplist)
        
    },[list])
    return (
            <div>
            {
               list!==null &&

                
               list.map((chip,index)=>{
                return (
                  <Chip
                  key={index}
                  size='small'
                      icon={<chip.Component />}
                      label={chip.title}
                      clickable
                      color={chip.color}
                      onDelete={()=>{}}
                      // deleteIcon={<DoneIcon />}
                  />
                )
            })
            }
             </div>
        
    )
}

export default Chips;