import React from 'react';

import {Child} from './Child';

const Parent = ()=> (
    <Child color="red" onClicked={()=> console.log('hello click me')} />
)
