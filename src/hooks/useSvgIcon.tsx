import { useEffect, useRef, useState, type ElementType } from 'react'

const useSvgIcon = (name: string) => {
  const importedIconRef = useRef<ElementType>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    setIsLoading(true)

    const importSvgIcon = async (): Promise<void> => {
      try {
        const { ReactComponent } = (await import(`../assets/icons/${name}.svg`)) as {
          ReactComponent: ElementType
        }

        importedIconRef.current = ReactComponent
      } catch (err) {
        if (err instanceof Error) {
          console.log(err)
          setError(err)
        }
      } finally {
        setIsLoading(false)
      }
    }

    importSvgIcon()
  }, [name])

  return { error, isLoading, Icon: importedIconRef.current }
}

export default useSvgIcon
