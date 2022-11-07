import { Input, Label } from "./Filter.styled"
import { useDispatch } from "react-redux";
import { filterContact } from "redux/actions";

export const Filter = () => {

  const dispatch = useDispatch();

  const handleChange = e => {
    console.log(e.target.value);
    dispatch(filterContact(e.target.value));
  };
    
  return (
    <Label>
    Find contact by name
    <Input
      type="text"
      name="filter"
      onChange={handleChange}
    />
    </Label>
  )

} 

  
