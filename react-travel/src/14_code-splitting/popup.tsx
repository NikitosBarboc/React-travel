import React, { Suspense } from 'react';

const Reservation = React.lazy(() => import('../09_forms/Reservation'));

function PopUp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Reservation />
    </Suspense>
  );
}

export default PopUp;
