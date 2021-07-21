import React from 'react';
import Aux from '../../hoc/auxx';

const layout = (props) =>(
    <Aux>
        <div>Tool bar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout;