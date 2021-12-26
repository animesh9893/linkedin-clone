import React from 'react'

export const SelectButton = ({active}) =>{
    
    if(active){
    return (
        <div className="SelectButton On">
        </div>
    )}else{
        return(
        <div className="SelectButton Off">
        </div>
        )
    }
}

export const ButtonBack = (props)=>{
    return (
        <div className="backButton">
            {props.text}
        </div>
    )
}

export const ButtonSave = (props)=>{
    return (
        <div className={props.change ? 'saveButton-select':'saveButton'}>
            {props.text}
        </div>
    )
}


export const CloseButton = () =>{
    return(
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
        </svg>
        </div>
    )
}

export const PersonButton = ()=>{
    return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
          <path d="M5 4a3 3 0 113 3 3 3 0 01-3-3zm3.75 4h-1.5A2.25 2.25 0 005 10.25V15h6v-4.75A2.25 2.25 0 008.75 8z"></path>
        </svg>
    </div>
    )
}

export const DropButton = () =>{
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
            </svg>
        </div>
    )
}