import React from 'react';
import './Ticket.css';

const Ticket = ({ ticket }) => {
  console.log("ticket is " , ticket)
  return (
    <div className="card">
    <div className="card-header">
      <span className="card-id">{ticket.id}</span>
    </div>
    <h3 className="card-title">{ticket.title}</h3>
    <div className="card-footer">
      <div className="tag">
        <span className="dot"></span>
        <span className="tag-text">{ticket.tag}</span>
      </div>
    </div>
  </div>
  );
};

export default Ticket;
