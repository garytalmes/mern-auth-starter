import { useState, useEffect } from "react"
import { useUser } from "../utils/UserContext"

const HomePage = (props) => {
  const userCtx = useUser()
  console.log(userCtx)

  return (
    <>
      <h1>Home Page</h1>

      { userCtx !== null && userCtx.user !== undefined && (
        <p>This user is logged in.</p>
      )}
    </>
  )
}

export default HomePage