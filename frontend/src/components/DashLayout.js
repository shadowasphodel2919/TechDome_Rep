import { Outlet } from "react-router-dom";

const DashLayout = () => {
    return (
        <>
        <div className="dash__container">
            <Outlet />
        </div>
        </>
    )
}
export default DashLayout