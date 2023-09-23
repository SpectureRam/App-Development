import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const EcommerceComponent = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        // Render your e-commerce content when loading is complete
        <div>
        <h1>asdasdasfasfasfasf</h1>
        <h1>asdasdasfasfasfasf</h1>
        <h1>asdasdasfasfasfasf</h1>
        <h1>asdasdasfasfasfasf</h1>
        <h1>asdasdasfasfasfasf</h1>
        <h1>asdasdasfasfasfasf</h1>
        </div>
      )}
    </div>
  );
};

export default EcommerceComponent;
