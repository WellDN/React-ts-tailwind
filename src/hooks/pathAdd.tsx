 import { useState } from 'react'
 
 export function pathAdd() {
 const [path, pathAdd] = useState(0)
 return (
    <div>Test {path}
    <button onClick={() => pathAdd(path + 1)}>

    </button>
    </div>
);
}//learning context API