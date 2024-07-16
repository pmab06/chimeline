import { SidebarButton } from './index';

function Sidebar(type) {

    const leftSidebar = (
        <>
            <h2>Home</h2>
            <SidebarButton icon='Heart_Empty.svg' text='Home' path='/Home' />
            <SidebarButton icon='SendIcon.svg' text='Test Page' path='/TestPage' />
            <SidebarButton icon='Heart_Empty.svg' text='Landing Page' path='/' />
        </>
    )

    const rightSidebar = (
        <>
            <h2>Right sidebar</h2>
        </>
    )

    return <>
        <aside className='d-flex flex-column col-12 col-md-3'>
            <div className='sidebar BorderedContainer'>
                {
                    (type.type == 'left' ? leftSidebar : rightSidebar)
                }
            </div>
        </aside>
    </>
};

export default Sidebar;