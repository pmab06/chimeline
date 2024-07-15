function SidebarButton({ icon, text, path }) {
	return <div className="SidebarButton d-flex align-items-center mb-2 p-2 justify-items-center">
			<img className="sidebar-button-icon" src={`../../src/assets/${icon}`}/>
			<a href={path}>{text}</a>
	</div>;
}
export default SidebarButton