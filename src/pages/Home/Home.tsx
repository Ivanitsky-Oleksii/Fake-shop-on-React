import {Component} from 'react' 
import {Button} from '@mui/material'
import React, { useState, useEffect } from 'react';
import { type } from 'os';


const Home  = 
function Count1() {
const [count1, setCount1] = useState(1);
const [count2, setCount2] = useState(6);
const [count3, setCount3] = useState(0);
return (
<>
<h1>Перше завдання</h1>
    <div>
    <button onClick={() => setCount1(count1 + 1)}>
        chenge count ({count1})
    </button>
    <button onClick={() => setCount2(count2 + 1)}>
        chenge count ({count2})
    </button>
    <button onClick={() => setCount3(count3 + 1)}>
        chenge count ({count3})
    </button>
    </div>
</>
);
}


export default Home