import React from 'react';
import './footer.css'

class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className='my-footer'>
                Blogs ©️ 2002 - 2022 All rights reserved
            </div>
        )
    }
}
export default Footer