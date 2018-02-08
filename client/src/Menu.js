import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'admin-on-rest';
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right";
import { Link } from "react-router-dom";

export default () => (
    <Menu>
        <MenuItem
            primaryText="Posts"
            rightIcon={<ArrowDropRight />}
            menuItems={[
                <MenuItem
                    primaryText="List"
                    containerElement={<Link to="/posts" />}
                    menuItems={[
                        <MenuItem
                            primaryText="List"
                            containerElement={<Link to="/posts" />}
                        />,
                        <MenuItem
                            primaryText="Create"
                            containerElement={<Link to="/posts/create" />}
                        />,
                    ]}
                />,
                <MenuItem
                    primaryText="Create"
                    containerElement={<Link to="/posts/create" />}
                />,
            ]}
        />
        <MenuItem
            primaryText="Comments"
            rightIcon={<ArrowDropRight />}
            menuItems={[
                <MenuItem
                    primaryText="List"
                    containerElement={<Link to="/comments" />}
                />,
                <MenuItem
                    primaryText="Create"
                    containerElement={<Link to="/comments/create" />}
                />,
            ]}
        />
    </Menu>
);
