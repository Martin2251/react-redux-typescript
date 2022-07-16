import React from 'react';
import { NewNoteInput } from './components/NewNoteinput';


function App() {
  return (
    <>
<NewNoteInput addNote={alert}  />
 <hr  />
 <ul>
   <li>some notes</li>
 </ul>
 </>
  );
}

export default App;
