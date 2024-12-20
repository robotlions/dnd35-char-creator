import {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from "react-bootstrap";



 export const ClassSelectDropdown = (props) => {
  
    const [thisState, setThisState] = useState("Fighter");
  
  return(
    <Dropdown onSelect={(eventKey) => {setThisState(eventKey); props.setBasicEdited(true); props.setSelectedClass(eventKey)}}>
    <DropdownButton variant="secondary rounded-0 bg-gradient" title={thisState}>
      <Dropdown.Item eventKey="Barbarian">Barbarian</Dropdown.Item>
      <Dropdown.Item eventKey="Bard">Bard</Dropdown.Item>
      <Dropdown.Item eventKey="Cleric">Cleric</Dropdown.Item>
      <Dropdown.Item eventKey="Druid">Druid</Dropdown.Item>
      <Dropdown.Item eventKey="Fighter">Fighter</Dropdown.Item>
      <Dropdown.Item eventKey="Monk">Monk</Dropdown.Item>
      <Dropdown.Item eventKey="Paladin">Paladin</Dropdown.Item>
      <Dropdown.Item eventKey="Ranger">Ranger</Dropdown.Item>
      <Dropdown.Item eventKey="Rogue">Rogue</Dropdown.Item>
      <Dropdown.Item eventKey="Sorcerer">Sorcerer</Dropdown.Item>
      <Dropdown.Item eventKey="Wizard">Wizard</Dropdown.Item>
    </DropdownButton>
    </Dropdown>
  )
  }