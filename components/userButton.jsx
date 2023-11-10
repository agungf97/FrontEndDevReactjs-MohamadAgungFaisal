import { authUserSession } from "@/libs/authUser"
import Link from "next/link"

const UserActionButton = async() => {
    
    const user = await authUserSession()

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2 items-center">
            {
                user ?
                <Link href="/users/dashboard" className="w-24 px-2 py-2 rounded-lg border bg-gradient-to-r from-transparent via-fuchsia-100 hover:via-fuchsia-200 to-sky-400 hover:to-sky-500 uppercase text-sm text-center" >
                    Profile
                </Link> : null
            }
            <Link href={actionURL} className='w-24 px-2 py-2 rounded-lg border bg-gradient-to-r from-sky-400 hover:from-sky-500 via-fuchsia-100 hover:via-fuchsia-200 to-transparent uppercase text-sm text-center' >{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton