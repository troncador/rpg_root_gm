
import React from 'react';
import { Tags } from './Tags';
import { Skills } from './Skills';
import { Wear } from './Wear';
import { EquipmentType } from '../Types';
import { Properties } from './Properties';


function EquipmentWrapper(props: {equipments: EquipmentType[]}) {
  const {equipments} = props;
  const equipment = equipments?.length && equipments[0];
  if (!equipment) {
      return <></>;
  }
  return <Equipment equipment={equipment}/>;
}


function Equipment(props: { equipment: EquipmentType}) {
    const {equipment: {label, tags, skills, wear, value, range, load }} = props;
  
    const properties = [
      { name: "range", label: `${range}`},
      { name: "load", label: `${load}`},
      { name: "value", label: `${value}`}
    ].filter(value => value.label !== "undefined")

    const skillSection = (skills?.length )? (
      <>
               <p className="h3">Skills</p>
              <Skills skills={skills}/>
      </>
    ): <></>;


    const tagSection = (tags?.length )? (
      <>
               <p className="h3">Tags</p>
              <Tags tags={tags}/>
      </>
    ): <></>;

    return (
      <>
      <h2>{label}</h2>
      <Properties properties={properties.map((property)=> ({...property, className: 'bg-success'}))}/>
      {tagSection}
      {skillSection}
      <p className="h3">Wear</p>
        <Wear wear={wear}/>
      </>
    );
}

export { EquipmentWrapper, Equipment }