function Loading() {
  return (
    <>
      <div
        className='fixed inset-0 flex h-full w-full items-center justify-center justify-center transition-opacity duration-300'
        style={{ zIndex: 6000 }}
      >
        <img
          src='https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif'
          className='w-80'
          alt=''
        />
      </div>
    </>
  )
}

export default Loading
