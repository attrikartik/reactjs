import { useState,useEffect } from "react"

import { MENU_URL } from "../constant"

const useRestaurantMenu = (resId) => {
  const [resInfo, setRestInfo] = useState(null)

  useEffect(()=>{
      fetchMenuData()
  },[])

  const fetchMenuData = async () =>{
      const data = await fetch(MENU_URL(resId))
      const jsonData = await data.json('')
      setRestInfo(jsonData.data)
  }
  return resInfo
}

export default useRestaurantMenu

   
