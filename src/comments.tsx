import { Datagrid, Edit, EditButton, EmailField, List, NumberField, ReferenceField, RichTextField, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput, required } from 'react-admin';

export const CommentList = () => {
  return (
   <List>
     <Datagrid>
        <ReferenceField reference="posts" source="postId" />
        <NumberField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="body" />
        <ShowButton />
        <EditButton />
        </Datagrid>
   </List>
  )
};

export const CommentEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput label="Post Id" source="postId" disabled />
        <TextInput label="Id" source="postId" disabled />
        <TextInput label="Name" source="name" required />
        <TextInput label="Email" source="email" disabled />
        <TextInput label="Body" source="body" required />
      </SimpleForm>
    </Edit>
  )
}

export const CommentShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="postId" link="posts" />
        <NumberField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <RichTextField source="body" />
      </SimpleShowLayout>
    </Show>
  )
}

