import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEye, faEyeSlash
  } from "@fortawesome/free-solid-svg-icons";
import React, {useState} from 'react'

export default function PasswordField() {
    const [visible, setVisibility] = useState(false);

    const Icon = <FontAwesomeIcon color="#4F4F4F" icon = {visible ? faEyeSlash : faEye} onClick={() => setVisibility(visibility => !visibility )}/>;

    const InputType = visible ? "text" : "password";

  return [InputType, Icon];
}
