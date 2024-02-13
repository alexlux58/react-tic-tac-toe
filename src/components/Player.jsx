import { useState, useEffect } from "react";

export default function Player({ name, symbol, setPlayer, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableName, setEditableName] = useState(name);

  useEffect(() => {
    setEditableName(name); // Update the local state when the prop changes
  }, [name]);

  function handleEditClick() {
    if (isEditing) {
      setPlayer(editableName);
    }
    setIsEditing(() => !isEditing);
  }

  function handleNameChange(e) {
    setEditableName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">
          {isEditing ? (
            <input
              type="text"
              value={editableName}
              onChange={handleNameChange}
              required
            />
          ) : (
            editableName
          )}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
