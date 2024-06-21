import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="grid justify-items-start gap-8 p-4">
      <div className="grid justify-items-start gap-2">
        <h2 className="text-lg">Claude生成</h2>
        <Link to="/try-claude-ai/userprofile" className="text-primary">
          UserProfile（テキストで生成指示）
        </Link>
        <Link to="/try-claude-ai/homepage" className="text-primary">
          HomePage（テキストで生成指示）
        </Link>
        <Link to="/try-claude-ai/userregistration" className="text-primary">
          UserRegistration（添付画像から生成、form動作あり）
        </Link>
        <Link to="/try-claude-ai/shadcnui-template" className="text-primary">
          shadcn/uiのサンプルテンプレート（添付画像から生成）
        </Link>
        <Link to="/try-claude-ai/shadcnui-template2" className="text-primary">
          shadcn/uiのサンプルテンプレート（添付画像から生成、添付画像で機能説明）
        </Link>
      </div>

      <div className="grid justify-items-start gap-2">
        <h2 className="text-lg">shadcn/uiサンプルソース実装</h2>
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

      <div className="grid justify-items-start gap-2">
        <h2 className="text-lg">Components実装サンプル</h2>
        <Link to="/components" className="text-primary">
          Components
        </Link>
      </div>
    </div>
  )
}
