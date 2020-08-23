import React from 'react'

type IProps = {
    searchPanel ?: JSX.Element,
    infoPanel ?: JSX.Element
}
export default (props:IProps) => {
    return (
        <>
            {props.searchPanel}
            {/* <div style={{height:'50px'}}></div> */}
            {props.infoPanel}
        </>
    )
};