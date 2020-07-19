import React from "react"
import img from '../../images/beian.png'
import './index.css'
export default () => {
    return (
        <footer className="footer">
            <div className="row">
                <span className='desc'>
                    © 2020
          <a href="http://beian.miit.gov.cn" target="_blank" style={{ color: '#939393' }} >粤ICP备19149394号</a>
                </span>
                <a target="_blank" href="_" className='link'>
                    <img alt='beian' src={img} style={{ float: 'left' }} />
                    <p className='num'>粤公网安备 44030402003634号</p >
                </a>
            </div>
        </footer>
    )
};
