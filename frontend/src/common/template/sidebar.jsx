import React from 'react';
import Menu from './menu';

function Sidebar() {
  return (
    <aside className="main-sidebar">
        <section className="sidebar">
            <Menu />
        </section>
    </aside>
  )
}

export default Sidebar;