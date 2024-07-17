'use client'

import { useState } from "react";

export const Click = () => {
   const [state1, setState1] = useState(1);

   return (
      <div>
         {state1}
         <button onClick={() => setState1(state1 + 1)}>Click</button>
      </div>
   );
};
