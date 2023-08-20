"use client"

import { useContext } from "react"
import { AsyncContext } from "@/context/AsyncProvider"

export const useAsync = () => useContext(AsyncContext)
