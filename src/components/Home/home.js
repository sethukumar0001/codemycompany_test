import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const MainPage = styled.div`
margin-top:80px;
`;

const TextFieldForm = styled(TextField)`
// background-color:red;
`;

const FormControlLabel = styled(FormControl)`
background-color:red;

`;

export default function Home() {
    const [columnName,setColumnName] = useState('');
    const [columnType,setColumnType] =useState('');
  return (
    <MainPage>
    <form>
      <TextFieldForm id="standard-basic" label="Coloumn Name" variant="outlined"/>
        
      <FormControlLabel variant="outlined" >
        <Select
          native
        //   value={state.age}
        //   onChange={handleChange('age')}
        //   labelWidth={labelWidth}
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControlLabel>

    </form>       
    </MainPage>
  );
}
