import { createContext, useContext, useState, ReactNode } from 'react'

type FontSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface FontSizeContextProps {
    fontSize: FontSize
    increaseFontSize: () => void
    decreaseFontSize: () => void
}

const FontSizeContext = createContext<FontSizeContextProps | undefined>(undefined)

const FONT_SIZES: FontSize[] = ['sm', 'md', 'lg', 'xl', '2xl']

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
    const [index, setIndex] = useState(1) // default: md

    const increaseFontSize = () => {
        setIndex((prev) => Math.min(prev + 1, FONT_SIZES.length - 1))
    }

    const decreaseFontSize = () => {
        setIndex((prev) => Math.max(prev - 1, 0))
    }

    return (
        <FontSizeContext.Provider
            value={{
                fontSize: FONT_SIZES[index],
                increaseFontSize,
                decreaseFontSize,
            }}
        >
            {children}
        </FontSizeContext.Provider>
    )
}

export const useFontSize = () => {
    const context = useContext(FontSizeContext)
    if (!context) throw new Error('useFontSize must be used inside FontSizeProvider')
    return context
}