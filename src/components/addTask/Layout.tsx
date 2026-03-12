import Status from "../status/Status"

const Layout = () => {
    return (
        <div className="p-4">
            <input type="text" placeholder="Title here" className="input w-full mt-8" />
            <textarea className="textarea w-full mt-2" placeholder="Task description here"></textarea>
            <select className="select w-full mt-2">
                <option><Status status="pending" /></option>
                <option><Status status="inProgress" /></option>
                <option><Status status="completed" /></option>
            </select>
        </div>

    )
}

export default Layout