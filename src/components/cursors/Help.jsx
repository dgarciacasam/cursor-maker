export const Help = ({ fill, stroke }) => {
  return (
    <article>
      <svg height='32' viewBox='0 0 32 32' width='32'>
        <g fill='none' fill-rule='evenodd' transform='translate(12 10)'>
          <path
            d='m2.752 9.863h2.474v2.395h-2.474z'
            stroke={stroke}
            stroke-width='1.5'
          />
          <path
            d='m1.3154.9409c.606-.488 1.73-.875 2.686-.881 1.514-.009 2.311.456 3.026 1.151.688.669 1.004 1.352.953 2.4-.041.853-.267 1.348-.604 1.811-.198.281-.577.641-1.138 1.078l-.533.43c-.33.32-.474.463-.6.82-.094.266-.116.506-.121.922h-1.977c-.003-1.016-.019-1.375.09-1.813.107-.426.502-.734 1.063-1.171l.568-.446c.188-.14.494-.414.608-.581.208-.286.334-.682.351-1.025.016-.323-.081-.699-.344-1.027-.312-.39-.703-.638-1.465-.604-.601.027-1.061.333-1.342.622-.33.34-.474.904-.498 1.35h-1.977c.062-1.484.354-2.312 1.254-3.036z'
            stroke={stroke}
            stroke-width='2'
          />
          <g fill={fill} fill-rule='nonzero'>
            <path d='m3.013 10.016h1.979v1.984h-1.979z' />
            <path d='m1.5156.9209c.697-.449 1.342-.794 2.426-.794 1.617 0 1.983.242 2.812.904.75.599 1.207 1.376 1.207 2.48 0 .677-.364 1.408-.702 1.871-.197.281-.459.56-1.02.998l-.612.47c-.3.234-.598.588-.697.9-.062.198-.058.623-.062 1.039h-1.86c.031-.88.034-1.605.169-1.941s.483-.723 1.044-1.16l.547-.446c.187-.14.475-.354.589-.521.208-.286.389-.701.389-1.045 0-.396.022-.676-.209-1.002-.27-.378-.516-.794-1.678-.814-.905-.016-1.291.447-1.542.847-.252.402-.338.858-.338 1.29h-1.978c.063-1.484.541-2.456 1.515-3.076' />
          </g>
        </g>
      </svg>
      <span>Help</span>
    </article>
  )
}
