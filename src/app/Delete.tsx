import { list } from 'postcss';
import { useState } from 'react';

const Mydata = () => {
  const [dataArray, setDataArray] = useState([list]);

  const deleteItem = (index: number) => {
    // Create a copy of the array
    const newArray = [...dataArray];
    
    // Use splice to remove the item at the specified index
    newArray.splice(index, 1);

    // Update the state with the new array
    setDataArray(newArray);
  };

  return (
    <div>
      {/* Render your array elements */}
      {dataArray.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Mydata;