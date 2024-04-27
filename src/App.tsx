import { Admin, Resource } from 'react-admin';
import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { PostEdit, PostList, PostShow } from './posts';
import { CommentEdit, CommentList, CommentShow } from './comments';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
          <Resource name="posts" list={PostList} edit={PostEdit} show={PostShow} />
          <Resource name="comments" list={CommentList} edit={CommentEdit} show={CommentShow} />
      <Resource icon={UserIcon} name="users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);
