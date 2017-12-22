import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import NavbarHeader from './components/NavbarHeader';
import NavbarItems from './components/NavbarItems';
import NavbarDropdown from './components/NavbarDropdown';
import DropdownMenu from './components/DropdownMenu';

const navitems = [
    {link: '#', title: 'Setup'},
    {link: '#', title: 'Usage', onClick: function () {
        alert('Usage');
    }},
    {link: '#', title: 'Advanced'},
    {link: '#', title: 'Try it out'},
    {link: '#', title: 'FAQ'}
];

const dropdownItems = [
    {href: '#', name: 'ES2015'},
    {href: '#', name: 'Setup', onClick: function (item) {
        alert('Setup clicked');
    }},
    {href: '#', name: 'Usage'},
    {href: '#', name: 'Advanced'},
    {href: '#', name: 'Try it'},
    {href: '#', name: 'FAQ'}
];

const navbarInstance = (
    <Navbar>
        <NavbarHeader href="http://www.google.com" name="Babel"/>
        <NavbarItems>
            {navitems.map(item => {
                if (typeof(item.onClick) !== 'undefined') {
                    return <NavItem key={navitems.indexOf(item)} link={item.link} title={item.title} onClick={item.onClick}/>;
                } else {
                    return <NavItem key={navitems.indexOf(item)} link={item.link} title={item.title}/>;
                }
            })}
            <NavbarDropdown name="Dropdown">
                <DropdownMenu menuItems={dropdownItems}/>
            </NavbarDropdown>
            <NavbarDropdown name="Dropdown">
                <DropdownMenu menuItems={dropdownItems}/>
            </NavbarDropdown>
        </NavbarItems>
    </Navbar>
);

ReactDOM.render(navbarInstance, document.getElementById('navigation_bar'));
