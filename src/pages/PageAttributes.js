import { useEffect } from 'react'

const PageTemplate = ( {bodyID, pageTitle} ) => {

useEffect(() => {
    document.body.setAttribute("id", bodyID)
    document.title = `${pageTitle} | Graph and Co`;
    return () => {
        document.body.removeAttribute("id", bodyID)
    }
}, [bodyID, pageTitle])

    return (
        null
    )
}

export default PageTemplate
