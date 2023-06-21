import React, { useEffect, useState} from 'react';
import config from './equipment.json'
import './App.scss';
import { Typeahead } from 'react-bootstrap-typeahead';
import { EquipmentWrapper } from './component/Equipment'; 

function App(props: { name: string }) {
  const {name} = props;
  const [showMode, setShowMode] = useState<boolean>(false);
  const [selection, setSelection] = useState<any>([]);

  useEffect(()=>{
    const l = name?.replace(/_/g, ' ')?.replace(/^#/g, '');;
    const equiment = equipments.find((equipment) => (equipment.label === l))
    if (equiment) {
      setSelection([equiment]);
      setShowMode(true);
    }
  }, []);

  const equipments = Object.entries(config.equipment).map(([key, value]) =>
    ({ ...value, label: key, id: key })
  );


  const typeahead = showMode? <></> : (
    <Typeahead
      onChange={setSelection as any}
      id="toggle-example"
      options={equipments}
      placeholder="Choose a weapon...">
    </Typeahead>
  );

  const toShow= () => {
    window.location.href = `#${selection?.[0]?.label?.replace(/ /g, '_')}`;
  }

  const showButton = showMode? <></> : (
    <button onClick={toShow}>Show</button>
  );

  return (
    <div className='App'>
      { typeahead }
      <div>
        <EquipmentWrapper equipments={selection}/>
      </div>
      { showButton }
    </div>
  );
}

export default App;
