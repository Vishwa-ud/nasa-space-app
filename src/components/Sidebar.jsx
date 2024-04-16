export default function Sidebar(props) {
    const { handleToggleModal } = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
            <h2>The Brutal Martin Landscape</h2>
            <div>
                <p>Discription</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
                     ratione possimus et rerum, illo magnam dolor beatae fugiat natus 
                     aliquid dicta? Facilis consequatur nostrum qui, incidunt dignissimos 
                     voluptatibus vel minima?</p>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-angles-right"></i>
            </button>
            </div>
        </div>
    )
}