import * as React from 'react';
import {Button as AButton} from "antd";

import './style/index.less';

// helpers
function getExclamationMarks(numChars) {
  return Array(numChars + 1).join('!');
}



function Button({ name, enthusiasmLevel = 1 }) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :DDDDDD');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <AButton className="button"> {name} 33</AButton>
    </div>
  );
}

export default Button;

