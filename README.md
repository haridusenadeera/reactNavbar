
# Dynamic ReactJS Navigation Bar
Bootstrap Navigation bar rebuilt with React components. Written in ECMAScript 6 (ES6).
No external stylesheets! This navigation bar is built with [Radium](http://projects.formidablelabs.com/radium/) inline styling.

### Desktop View

![navbar-desktop](https://cloud.githubusercontent.com/assets/12897928/10146744/0c184176-65f0-11e5-91c0-f4ed7aa4e543.png)

### Mobile View

<img width="735" alt="navbar-responsive" src="https://cloud.githubusercontent.com/assets/12897928/10146784/39d11458-65f0-11e5-9935-3907ca88ee73.png">

## Tree Structure

![navbartree](https://cloud.githubusercontent.com/assets/12897928/10251633/b148ac44-68f7-11e5-9c8a-cc0c72b5ada2.png)

## Components
```js
const dropdownItems = [
    {href: '#', name: 'Overview'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
];

const navbar = (
    <Navbar>
        <NavbarHeader href="homepage.html" name="Website Name"/>
        <NavbarItems>
            <NavbarItem link="about.html" title="About" />
            <NavbarItem link="contact.html" title="Contact" />
            <NavbarItem link="services.html" title="Services" />
            <NavbarDropdown name="Features">
                  <DropdownMenu menuItems={dropdownItems}/>
            </NavbarDropdown>
        </NavbarItems>
    </Navbar>
);

React.render(navbar, document.getElementById('navbar'));
```
# Install
Clone the repository. Then install dependencies,

```js
npm install
```

# Run the webpack dev server
```js
npm start
```
Go to http://localhost:8080/ on your favorite browser to view the Navigation bar.
