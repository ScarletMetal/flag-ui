import React, {useState} from "react"
import "./style.css"

import {Menu, MenuItemProps} from "semantic-ui-react"

// @ts-ignore
const rightMenuItems: Array<MenuItemProps> = [
    {key: "home", name: "ראשי"},
    {key: "about", name: "אודות"},
    {key: "events", name: "אירועים"},
    {key: "contact-us", position: 'right', name: "צרו קשר"}
].reverse(), leftMenuItems: Array<MenuItemProps> = [
    {key: 'instagram', inverted: true, icon: 'instagram'}
];

const menuItems: Array<MenuItemProps> = [...leftMenuItems, ...rightMenuItems];

const MainMenu = () => {
    const [selected, setSelected] = useState(menuItems.length-1);

    const onItemClick = (event: any, data: MenuItemProps) => {
        if (data.index === 0 || data.index) {
            setSelected(data.index)
        }
    };
    return <Menu borderless
                  onItemClick={onItemClick}
                  fluid activeIndex={selected}
                  items={menuItems}
                  className={"main-menu"}/>

};

export default MainMenu;