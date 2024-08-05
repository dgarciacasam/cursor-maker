export const Cursor = ({ children, name, handleDownload }) => {
  return (
    <article className='relative'>
      <button
        aria-label='Download cursor'
        className='absolute top-2 right-1 p-1 rounded text-white/30 hover:-translate-y-1 hover:text-white  transition'
        onClick={() => handleDownload()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-download'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2' />
          <path d='M7 11l5 5l5 -5' />
          <path d='M12 4l0 12' />
        </svg>
      </button>
      {children}
      <span>{name}</span>
    </article>
  )
}
