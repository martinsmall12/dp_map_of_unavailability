import React from 'react';
import {
    ChipField,
    SingleFieldList,
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    Responsive,
    SimpleList,
    ReferenceManyField,
    ReferenceArrayField,
    DateField,
    RichTextField
} from 'admin-on-rest';

export const DatabaseList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="sid"/>
            <EditButton/>
        </Datagrid>
    </List>
);
