import React from "react";
export default function ResultatList(props) {
return (
<div className="Child">
    <h1>composant ResultatList</h1>
    {props.resultats.length == 0 ? (
    <p>pas de resultats</p>
    ) : (
    <div className="list">
    <ul>
        {props.resultats.map((elm) => {
        return <li key={elm.nom}>{elm.nom}</li>;
        })}
    </ul>
    </div>
)}
</div>
);
}