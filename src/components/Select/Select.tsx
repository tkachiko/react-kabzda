import React from 'react';

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: ItemType[]
}

export function Select(props: SelectPropsType) {
  console.log('Rating rendered');
  return (
    <div>
      <div>{}</div>
      {props.items.map((item, index) => <div key={index}>{item.title}</div>)}
    </div>
  );
}
