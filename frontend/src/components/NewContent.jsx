import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Draggable item component
const DraggableItem = ({ id, text, onEditText }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "ITEM",
        item: { id, text },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [isEditing, setIsEditing] = useState(false);
    const [currentText, setCurrentText] = useState(text);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        if (currentText !== text) {
            onEditText(id, currentText);
        }
    };

    const handleChange = (e) => {
        setCurrentText(e.target.value);
    };

    return (
        <div
            ref={drag}
            style={{
                padding: "10px",
                margin: "5px",
                backgroundColor: isDragging ? "lightgray" : "lightblue",
                cursor: "move",
                borderRadius: "4px",
            }}
            onDoubleClick={handleDoubleClick}
        >
            {isEditing ? (
                <input
                    type="text"
                    value={currentText}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoFocus
                    style={{ border: "1px solid #ccc", borderRadius: "4px", padding: "5px" }}
                />
            ) : (
                currentText
            )}
        </div>
    );
};

// Drop area component
const DropArea = ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "ITEM",
        drop: (item) => {
            onDrop(item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            style={{
                minHeight: "200px",
                border: "2px dashed #ccc",
                padding: "10px",
                backgroundColor: isOver ? "lightgreen" : "white",
            }}
        >
            Drop items here
        </div>
    );
};

// Draggable list component
const DraggableList = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        { id: 3, text: "Item 3" },
    ]);

    const handleEditText = (id, newText) => {
        setItems(items.map((item) => (item.id === id ? { ...item, text: newText } : item)));
    };

    const handleDrop = (droppedItem) => {
        console.log("Dropped item:", droppedItem);
        // You can implement any further logic here
    };

    return (
        <div>
            <h2>Draggable Items</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {items.map((item) => (
                    <DraggableItem key={item.id} id={item.id} text={item.text} onEditText={handleEditText} />
                ))}
            </div>
            <DropArea onDrop={handleDrop} />
        </div>
    );
};

// App component
const NewContents = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <DraggableList />
        </DndProvider>
    );
};

export default NewContents;
