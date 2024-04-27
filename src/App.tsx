
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { PostEdit, PostList, PostShow } from './posts';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        
          <Resource name="posts" list={PostList} edit={PostEdit} show={PostShow} />
    </Admin>
);

    