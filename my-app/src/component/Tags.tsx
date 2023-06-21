
import React from 'react';

import tagData from '../tags.json'
import { Properties, PropertyType } from './Properties';
import { TagType } from '../Types';

function toProperty(name: string, tag: TagType): PropertyType {
  const label = tag?.description?.split('•');
  const className = (tag?.value === -1)? 'bg-danger' : 'bg-info';

  return { name, label, className, tags: tag.type }
}

function Tags(props: {tags: string[]}) {
    const { tags } = props;
    const tagDB: { [tag: string]: TagType} = tagData;
    const properties = tags.map((tag: string): PropertyType => toProperty(tag, tagDB[tag]));

    return (
      <Properties properties={properties}/>
    );
}

export { Tags }