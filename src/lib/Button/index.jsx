import React from 'react'

export const ZButton = ({ text }) => {
    const styles = {
        backgroundColor: "aquamarine",
        padding: "15px",
        border: "none",
        borderRadius: "4px",
        maxWidth: "200px"
    }
    return (
        <button type="button" style={styles}>{text}</button>
    )
}