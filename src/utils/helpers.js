export const groupTickets = (tickets, groupBy) => {
    return tickets.reduce((groups, ticket) => {
      const key = ticket[groupBy] || 'No Priority';
      if (!groups[key]) groups[key] = [];
      groups[key].push(ticket);
      return groups;
    }, {});
  };
  
  export const sortTickets = (tickets, sortBy) => {
    if (sortBy === 'priority') {
      return tickets.sort((a, b) => b.priority - a.priority); // Descending
    }
    if (sortBy === 'title') {
      return tickets.sort((a, b) => a.title.localeCompare(b.title)); // Alphabetical
    }
    return tickets;
  };
