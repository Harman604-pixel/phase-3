import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      margin: '2rem 0',
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '5px'
    }}>
      <h3>Interactive Counter</h3>
      <p>Current count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '0.5rem 1rem',
          marginRight: '0.5rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reset
      </button>
    </div>
  );
}