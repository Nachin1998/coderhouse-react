import React from "react"

const Item = ({imagePath}) => {
    return (
        <div>
            <img src={imagePath}></img>
        </div>
    );
}

export default Item;