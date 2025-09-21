// File: /app/auth/verify/page.tsx
"use client"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaCheckCircle, FaExclamationTriangle, FaEnvelope } from "react-icons/fa"

export default function VerifyEmailPage() {
  const params = useSearchParams()
  const router = useRouter()
  const token = params.get("token")

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("Verifying your email address...")

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("error")
        setMessage("Invalid verification link. Missing token.")
        return
      }

      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/verify?token=${token}`
        console.log(`Making request to: ${apiUrl}`)

        const response = await fetch(apiUrl, {
          headers: { "Content-Type": "application/json" },
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => null)
          throw new Error(errorData?.message || `HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log("Response data:", data)

        if (data.code === 200) {
          setStatus("success")
          setMessage(data.message || "Your email has been verified successfully! You can now log in.")
        } else {
          setStatus("error")
          setMessage(data.message || "Verification failed. Please try again.")
        }
      } catch (error) {
        console.error("Verification error:", error)
        let errMsg = "Verification failed. Please try again."
        if (error instanceof Error) errMsg = error.message
        setStatus("error")
        setMessage(errMsg)
      }
    }

    verifyEmail()
  }, [token])

  const resendVerification = async () => {
    console.log("Resend verification email")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-6">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-4 border border-green-100">

        {/* Icon Header */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <FaEnvelope className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <h1 className="text-2xl font-extrabold text-green-900 mb-2 text-center">Email Verification</h1>

        {/* Loading */}
        {status === "loading" && (
          <div className="animate-fadeIn">
            <div className="my-6 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
            <p className="text-green-700 text-center">{message}</p>
            <div className="mt-4 bg-green-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full animate-pulse" style={{ width: "65%" }}></div>
            </div>
          </div>
        )}

        {/* Success */}
        {status === "success" && (
          <div className="animate-fadeIn">
            <div className="my-6 flex justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <FaCheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-green-800 mb-2 text-center">Verification Successful!</h2>
            <p className="text-green-700 mb-6 text-center">{message}</p>

            <div className="space-y-3">
              <button 
                onClick={() => router.push("/")}
                className="block w-full text-green-600 py-3 px-4 rounded-xl font-semibold border border-green-600 hover:bg-green-50 transition duration-300"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="animate-fadeIn">
            <div className="my-6 flex justify-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <FaExclamationTriangle className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-red-800 mb-2 text-center">Verification Failed</h2>
            <p className="text-red-700 mb-6 text-center">{message}</p>

            <div className="space-y-3">
              <button 
                onClick={resendVerification}
                className="block w-full bg-gray-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-gray-700 transition duration-300"
              >
                Resend Verification Email
              </button>
              <button 
                onClick={() => router.push("/")}
                className="block w-full text-green-600 py-3 px-4 rounded-xl font-semibold border border-green-600 hover:bg-green-50 transition duration-300"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
