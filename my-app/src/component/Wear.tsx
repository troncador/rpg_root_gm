import React from 'react';

function Wear(props: {wear: number}) {
    const {wear} = props;

    return (
      <>
      {Array(wear).fill(0).map((_a, index) => <span style={{fontSize: "40px"}} key={index}>☐</span>)}
      </>
    );
}


export { Wear }