import React from 'react'

function NoResult() {
    return (
        <div style={{ width: "100%", height: "100%", display: "flex",
        flexDirection:"column", alignItems:"center", paddingTop: "8rem", boxSizing: "border-box" }}>
            
                <img src='/assests/bunny-cute.gif' height={100} />
                <h3 style={{textAlign:"center"}}>OOPS ! No matching location found</h3>
            
        </div>
    )
}

export default NoResult