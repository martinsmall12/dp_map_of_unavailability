import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import Dashboard from './Dashboard';
import authClient from './authClient';
import Menu from './Menu';

import { PostList, PostEdit, PostCreate } from './Resource/posts';
import { UserList } from './Resource/users';
import { EmployeeList } from './Resource/employee';
import { ApplicationList, ApplicationEdit, ApplicationCreate, ApplicationShow } from './Resource/application';
import { AuthorsList } from './Resource/authors';
import { TypeOfApplicationList } from './Resource/typeOfApplication';
import { DatabaseList } from './Resource/database';


const App = () => (
    <Admin authClient={authClient} title="Nástěnka" dashboard={Dashboard} restClient={jsonServerRestClient('http://localhost:3000')}>
        <Resource options={{ label: 'Zaměstnanci' }} name="employees" list={EmployeeList} icon={UserIcon} />
        <Resource options={{ label: 'Aplikace' }} name="applications" list={ApplicationList} create={ApplicationCreate}
                  edit={ApplicationEdit} show={ApplicationShow} remove={Delete} icon={UserIcon} />
        <Resource options={{ label: 'Autoři' }} name="authors" list={AuthorsList} icon={UserIcon} />
        <Resource options={{ label: 'Typ aplikace' }} name="typeOfApplication" list={TypeOfApplicationList} icon={UserIcon} />
        <Resource options={{ label: 'Databáze' }} name="database" list={DatabaseList} icon={UserIcon} />
    </Admin>
);

export default App;
