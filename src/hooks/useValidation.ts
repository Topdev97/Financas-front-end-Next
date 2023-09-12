"use client"

import { useContext } from "react"
import { ValidationContext } from "@/context/ValidationProvider"

export const useValidation = () => useContext(ValidationContext)
