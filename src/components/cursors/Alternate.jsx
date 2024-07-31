export const Alternate = ({ fill, stroke }) => {
  return (
    <article>
      <svg
        height='32'
        viewBox='0 0 32 32'
        width='32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='none' fillRule='evenodd' transform='translate(10 9)'>
          <path
            d='m11 .0781-10.25.078 3.494 3.12c-.289.312-.527.571-.572.63-.156.203-.781 1.125-.969 1.516-.187.39-.562 1.39-.672 2.031-.1.589-.094 1.656-.078 2.109.015.423.16 1.258.297 1.641.219.609.344.938.625 1.375.316.492.593.767 1.031 1.188.391.375 2.188 1.234 2.188 1.234-.282-.359-.813-1.391-.938-1.75-.066-.19-.239-1.111-.281-1.531-.047-.469-.078-1.125-.063-1.594.014-.409.102-.809.204-1.172.109-.391.428-.907.687-1.266.203-.281.448-.572.797-.906.254-.244.551-.503.854-.727l3.615 3.227z'
            fill={stroke}
          />
          <path
            d='m9.9648 7.2402-.004-6.184-6.161.004 1.798 1.802c-.138.146-.326.345-.437.484-.277.347-.443.537-.61.732-.118.138-.262.317-.377.474-.159.217-.28.43-.361.575-.111.196-.226.46-.367.75-.196.404-.262.746-.319.982-.039.16-.13.571-.166.953-.028.29-.008.624-.008.759 0 .236-.024.52.027.98.047.421.296 1.351.482 1.722.156.313.462.93.462.93s-.17-1.518-.116-2.285c.032-.438.235-1.183.493-1.728.045-.093.053-.21.186-.422.103-.162.24-.386.355-.568.214-.337.654-.875.759-1.015.169-.225.66-.672.938-.917.142-.125.493-.419.793-.668z'
            fill={fill}
          />
        </g>
      </svg>
      <span>Alternate</span>
    </article>
  )
}
