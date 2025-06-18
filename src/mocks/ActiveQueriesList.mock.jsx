import { List, Datagrid, TextField } from 'react-admin';
import mockQueries from '../data/queries';

export const ActiveQueriesList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="query" />
    </Datagrid>
  </List>
);