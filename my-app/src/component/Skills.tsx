
import React from 'react';

import skillData from '../skills.json'
import { Properties, PropertyType } from './Properties';

function toProperty(name: string, value: string): PropertyType {
  const label = value?.split("•") || ""

  return { name, label, className: "bg-warning" }
}

function Skills(props: {skills: string[]}) {
    const {skills} = props;
    const skillDB: {[skill: string]: string } = skillData;
    const properties = skills.map((skill: string): PropertyType => toProperty(skill, skillDB[skill]));

    return (
      <Properties properties={properties}/>
    );
}

export { Skills }