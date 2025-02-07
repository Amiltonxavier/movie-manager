import { Outlet } from "react-router";
import { Header } from "../../components/header";

export default function Dashboard() {
    return (
        <div>
            <Header />
            {/* will either be home.tsx or settings.tsx */}
            <div>
                <Outlet />
            </div>

        </div>
    );
}