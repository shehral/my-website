import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto py-24 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-sora font-extrabold mb-8 text-gradient">404 - Page Not Found</h1>
      <p className="text-xl text-gray-300 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-600"
      >
        Return Home
      </Link>
    </div>
  )
}
