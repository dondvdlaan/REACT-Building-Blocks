
import TopBar from "./TopBarII"
import "./DashboardII.css"
import LoadingSpinner from "../shared/LoadingSpinner"

export const DashboardII = () => {

    return (
        <>
            <TopBar />
            <div className="container">
                <p className="title"> DashboardII module</p>
                <p> Responsive top bar</p>
                <br />
                <LoadingSpinner />
            </div>
        </>
    )
}