import { useAuth } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ApplicationTabs } from '../components'

const ApplicationLayout = () => {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!userId) {
      toast.warn("You need to be logged in to access this page");
      navigate("/")
    }
  }, [userId, navigate]);

  if (!isLoaded) return "Loading..."

  return (
    <div className="w-full min-h-screen">
      <div className="w-full">
        <ApplicationTabs />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default ApplicationLayout
