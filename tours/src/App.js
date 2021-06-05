import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const URL = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const handleRemoveTour = id => {
    const filteredTours = tours.filter(tour => tour.id !== id);
    setTours(filteredTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const tours = await response.json(); // this response is defined 'response' above;
      // console.log(tours);
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    console.log('fnished fetching');
  }

  useEffect(() => {
    // console.log('we are in effect');
    fetchTours();
  }, [])

  if (loading) {
    return <main>
      <Loading />
    </main>
  }

  if (!tours.length) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button onClick={fetchTours} className="btn">refresh</button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} handleRemoveTour={handleRemoveTour} />
    </main>
  );
}

export default App;