import React from 'react';
export default function Sidebar(props){
    const asideStyle1 = {
        'background':'asure',
        'width':'calc(30% - 10px)',
        'margin-left' :'10px',
    };
    const asideStyle2 = {
        'background':'asure',
        'width':'calc(30% - 10px)',
        'margin-right' :'500px',
    };
     return( 
        <><div>
       <aside style ={asideStyle1} className="asideComponents" >
        <h3>{props.greet} from SideBar</h3></aside>
        <aside style ={asideStyle2} className="asideComponents1" >
        <h3 align="right">{props.greet} from another SideBar</h3>
        </aside>
        </div>
        </>
    );

    
}
