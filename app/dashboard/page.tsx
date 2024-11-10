import {requireUser} from "@/app/lib/hooks";

export default async function DashboardPage() {
    const session=await requireUser()
    return(
        <>
            <h1>Dashboard Page</h1>
        </>
    )
}