import { SidebarButton, ProfileCard } from './index';

function Sidebar(type) {

    const leftSidebar = (
        <>
            <div>
                <img src='../../src/assets/Chimeline.png' style={{ width: '10rem' }} />
                <SidebarButton icon='home' text='Home' path='/home' />
                <SidebarButton icon='labs' text='Test Page' path='/testpage' />
                <SidebarButton icon='tooltip' text='Landing Page' path='/' />
            </div>
            <ProfileCard />
        </>
    )

    const rightSidebar = (
        <>
            <h2>Right sidebar</h2>
        </>
    )

    return <>
        <aside className='sidebar d-none d-lg-flex BorderedContainer'>
            {
                (type.type == 'left' ? leftSidebar : type.type == 'right' ? rightSidebar : '')
            }
        </aside>
    </>
};

export default Sidebar;