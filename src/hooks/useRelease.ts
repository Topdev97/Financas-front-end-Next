import { useContext } from "react"
import { ReleaseContext } from "@/context/ReleaseProvider"

export const useRelease = () => useContext(ReleaseContext)
