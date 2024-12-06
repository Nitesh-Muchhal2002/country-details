import { useContext } from 'react'
import { ThemeContext } from '../context/Themecontext'


export const useTheme = () => useContext(ThemeContext)