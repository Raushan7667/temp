import React, { useContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import AppContext from './context/AppContext';
import useFetch from './hooks/useFetch';
import { groupTickets, sortTickets } from './utils/helpers';
import './App.css';

const App = () => {
  const { groupBy, sortBy } = useContext(AppContext);
  const { data, loading } = useFetch('https://api.quicksell.co/v1/internal/frontend-assignment');
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    if (data.tickets) {
      const grouped = groupTickets(data.tickets, groupBy);
      Object.keys(grouped).forEach(
        (key) => (grouped[key] = sortTickets(grouped[key], sortBy))
      );
      setGroupedTickets(grouped);
    }
  }, [data, groupBy, sortBy]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className='body'>
      <Navbar />
      <KanbanBoard groupedTickets={groupedTickets} />
    </div>
  );
};

export default App;
