import React from 'react';
import Ticket from './Ticket';
import './KanbanColumn.css';

import done from "../../resources/icons/Done.svg";
import inprogress from "../../resources/icons/in-progress.svg";
import todo from "../../resources/icons/To-do.svg";
import cancelled from "../../resources/icons/Cancelled.svg";
import backlog from "../../resources/icons/Backlog.svg";
import urgentRed from "../../resources/icons/SVG - Urgent Priority colour.svg";
import high from "../../resources/icons/Img - High Priority.svg";
import medium from "../../resources/icons/Img - Medium Priority.svg";
import low from "../../resources/icons/Img - Low Priority.svg";
import noPriority from "../../resources/icons/No-priority.svg";

import add from "../../resources/icons/add.svg";
import threeDot from "../../resources/icons/3 dot menu.svg";

const KanbanColumn = ({ groupName, tickets }) => {
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        {/* <img src={done} alt="_column_icon" /> */}
        <img src={
          groupName === 'Done' ? done :
            groupName === 'In progress' ? inprogress :
              groupName === 'Todo' ? todo :
                groupName === 'Cancelled' ? cancelled :
                  groupName === 'Backlog' ? backlog :
                    groupName === '1' ? urgentRed :
                      groupName === '2' ? high :
                        groupName === '3' ? medium :
                          groupName === '4' ? low :
                            groupName === 'No Priority' ? noPriority :
                              ''
        } alt="column_icon" />
        <span className='coloum-name'>
          {groupName === '1' ? 'Urgent' :
            groupName === '2' ? 'High' :
              groupName === '3' ? 'Medium' :
                groupName === '4' ? 'Low' :
                  groupName === 'usr-1' ? 'Anoop sharma' :
                    groupName === 'usr-2' ? 'Yogesh' :
                      groupName === 'usr-3' ? 'Shankar Kumar' :
                        groupName === 'usr-4' ? 'Ramesh' :


                          groupName}
        </span>
        <text className='coloum-counter'>{tickets.length}</text>
        <img src={add} alt="add" />
        <img src={threeDot} alt="menu" />
        {/* <h3>{groupName}</h3> */}
      </div>

      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
