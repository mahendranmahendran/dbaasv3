// src/resources/ActiveQueriesList.jsx
import { List, Datagrid, TextField } from 'react-admin';

export const ActiveQueriesList = () => {
  console.log("ActiveQueriesList is rendering");
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="query" />
        <TextField source="database" />
        <TextField source="status" />
        <TextField source="duration" />
      </Datagrid>
    </List>
  );
};