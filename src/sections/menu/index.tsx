import React, {useState} from "react"
import {RouteComponentProps, withRouter} from "react-router";
import {Menu, MenuItemProps} from "semantic-ui-react"
import "./style.css"

// @ts-ignore
const rightMenuItems: Array<MenuItemProps> = [
    {key: "home", path: 'home', name: "ראשי"},
    {key: "about", path: 'about', name: "אודות"},
    {key: "events", path: 'events', name: "אירועים"},
    {key: "contact-us", path: 'contact', position: 'right', name: "צרו קשר"}
].reverse(), leftMenuItems: Array<MenuItemProps> = [
    {key: 'instagram', inverted: true, icon: 'instagram'}
];

const menuItems: Array<MenuItemProps> = [...leftMenuItems, ...rightMenuItems];

const MainMenu = (props: RouteComponentProps) => {
    const [selected, setSelected] = useState(menuItems.length-1);

    const onItemClick = (event: any, data: MenuItemProps) => {
        if (data.index === 0 || data.index) {
            setSelected(data.index);
            if (data.path) props.history.push(data.path)
        }
    };
    return <Menu  attached={"top"}
                  borderless
                  onItemClick={onItemClick}
                  fluid activeIndex={selected}
                  items={menuItems}
                  className={"main-menu"}/>

};

export default withRouter(MainMenu);