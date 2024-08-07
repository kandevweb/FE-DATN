/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { lazy, Suspense } from 'react'

type LoadableProps = JSX.IntrinsicAttributes

/**
 * Returns a lazy-loaded component.
 *
 * @param path - The path to the component to be loaded.
 *
 */

function Loadable<P extends LoadableProps>(path: string) {
  const newPath = path.split('.').includes('tsx') ? path + '.tsx' : path
  const ComponentLazy = lazy(() => import(`~/pages/${newPath}`))

  const LoadableComponent: React.FC<P> = (props) => (
    <Suspense fallback={<></>}>
      <ComponentLazy {...props} />
    </Suspense>
  )

  return LoadableComponent
}

export default Loadable
