function SidebarButton({ icon, text, path }) {
	const redirectFunction = () => { window.location.href = path }

	return <>
		<button onClick={redirectFunction} className='SidebarButton d-flex align-items-center mb-2 p-2 justify-items-center'>
			<span className="icon material-symbols-outlined">
				{icon}
			</span>
			<span className="text-label">{text}</span>
		</button>
	</>;
}
export default SidebarButton