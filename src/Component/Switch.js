import React from 'react';
import './Switch.css'
export default function Switch(props) {
  return (
    <div className="switch-cont" >
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="switch" onClick={props.toggle}></label>
      </div>
  );
}