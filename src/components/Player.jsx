import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        required
        type='text'
        name='player-name'
        value={playerName}
        onChange={handleChange}
      />
    );
    btnCaption = "Save";
  }

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let activeClassName = null;

  if (isActive) {
    activeClassName = "active";
  }

  return (
    <li className={activeClassName}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
};

export default Player;
