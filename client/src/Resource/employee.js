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
    RichTextField,
} from 'admin-on-rest';

export const EmployeeList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField label="Osobní číslo" source="personalNumber"/>
            <ReferenceArrayField label="Aplikace" reference="applications" source="application_id">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <TextField source="email"/>
            <RichTextField label="Komentář" source="note"/>
            <EditButton/>
        </Datagrid>
    </List>
);
