const TrophyBadge = ({ position }) => {
  const gold = '#E0B410'
  const silver = '#099A66'
  const bronze = '#333333'
  const trophyBadgeColor = position === 1 ? gold : position === 2 ? silver : bronze
  const style = { position: 'absolute', top: '.5rem', left: '.5rem' }

  return (
    <>
      <div className='trophy-badge'></div>
      <svg style={style} width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22.2222 2.77778H19.4444V0H5.55556V2.77778H2.77778C1.25 2.77778 0 4.02778 0 5.55556V6.94444C0 10.4861 2.66667 13.375 6.09722 13.8056C6.97222 15.8889 8.84722 17.4583 11.1111 17.9167V22.2222H5.55556V25H19.4444V22.2222H13.8889V17.9167C16.1528 17.4583 18.0278 15.8889 18.9028 13.8056C22.3333 13.375 25 10.4861 25 6.94444V5.55556C25 4.02778 23.75 2.77778 22.2222 2.77778ZM2.77778 6.94444V5.55556H5.55556V10.8611C3.94444 10.2778 2.77778 8.75 2.77778 6.94444ZM22.2222 6.94444C22.2222 8.75 21.0556 10.2778 19.4444 10.8611V5.55556H22.2222V6.94444Z'
          fill={trophyBadgeColor}
        />
      </svg>
    </>
  )
}
export default TrophyBadge
