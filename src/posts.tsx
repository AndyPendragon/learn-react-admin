import { Button, Datagrid, Edit, EditButton, Link, List, ListView, NumberField, ReferenceField, RichTextField, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput, required } from 'react-admin';

export const PostList = () => {
  return (
    <List>
      <Datagrid>
        <ReferenceField reference="users" source="userId" link="show" />
        <NumberField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  )
};

export const PostEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput label="User Id" source="userId" disabled />
        <TextInput label="Post Id" source="id" disabled />
        <TextInput label="Title" source="title" required />
        <TextInput label="Body" source="body" required />
      </SimpleForm>
    </Edit>
  )
}

export const PostShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="userId" />
        <TextField source="id" />
        <TextField source="title" />
        <RichTextField source="body" />
      </SimpleShowLayout>
    </Show>
  )
}

