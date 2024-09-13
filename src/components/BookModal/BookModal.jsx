import React from "react";

const BookModal = (props) => {
  const { isOpen, onClose, recipes } = props;

  if (!isOpen) {
    return null;
  }


  const displayedRecipes = recipes.map((recipe)=>{

  })

  return (
    <div onClick={onClose} className="book-modal">
      <div className="book-modal-2">
        
      </div>
    </div>
  );
};

export default BookModal;
