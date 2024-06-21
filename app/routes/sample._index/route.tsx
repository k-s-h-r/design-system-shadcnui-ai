import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div className="grid justify-items-start gap-2 p-4">
      <Link to="/sample/login" className="text-primary">
        Login
      </Link>
      <Link to="/sample/dashboard" className="text-primary">
        Dashboard
      </Link>
      <Link to="/sample/dashboard2" className="text-primary">
        Dashboard2
      </Link>
    </div>
  )
}
