import React from 'react';

export const Twirl = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>Twirl</div>;
};
