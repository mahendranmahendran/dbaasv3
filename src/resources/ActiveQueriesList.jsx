import { List, Datagrid, TextField } from 'react-admin';

export const ActiveQueriesList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="query" />
      <TextField source="status" />
      <TextField source="duration" />
    </Datagrid>
  </List>
);