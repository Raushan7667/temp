import React from 'react';
import KanbanColumn from './KanbanColumn';
import './KanbanBoard.css';

const KanbanBoard = ({ groupedTickets }) => {
  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <KanbanColumn key={group} groupName={group} tickets={groupedTickets[group]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
