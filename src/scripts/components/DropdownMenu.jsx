import React from 'react';
import Radium from 'radium';

@Radium
export default class DropdownMenu extends React.Component {
    displayName = 'Dropdown menu items'

    static propTypes = {
        menuItems: React.PropTypes.array
    }

    getStyles = () => {
      return {
          menu: {
              position: 'absolute',
              top: '100%',
              left: '0',
              zIndex: '1000',
              display: 'block',
              float: 'left',
              minWidth: '160px',
              marginTop: '0px',
              padding: '5px 0',
              fontSize: '14px',
              textAlign: 'left',
              listStyle: 'none',
              backgroundColor: '#fff',
              backgroundClip: 'padding-box',
              border: '1px solid #ccc',
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px',
              boxShadow: '0 6px 12px #C9C9C9'
          },
          link: {
              display: 'block',
              padding: '3px 20px',
              clear: 'both',
              fontWeight: 'normal',
              lineHeight: '1.42857143',
              color: '#333',
              whiteSpace: 'nowrap',
              textDecoration: 'none',

              ':hover': {
                  color: '#262626',
                  backgroundColor: '#f5f5f5'
              },

              ':focus': {
                  color: '#262626',
                  backgroundColor: '#f5f5f5'
              }
          }
      };
    }

    render() {
      const defStyle = this.getStyles();
      const {menuItems} = this.props;
      return (
        <ul style={[defStyle.menu]}>
          {
            menuItems.map(item => {
              return (
                <li key={menuItems.indexOf(item)}>
                    <a key={item.name} style={[defStyle.link]} href={item.href}>{item.name}</a>
                </li>
              );
            })
          }
        </ul>
      );
    }
}
