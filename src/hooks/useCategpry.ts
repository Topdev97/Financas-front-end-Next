"use client"

import { useContext } from "react"
import { CategoryContext } from "@/context/CategoryProvider"

export const useCategory = () => useContext(CategoryContext)
