export default function Head() {
  return (
    <>
      {/* Basic favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/s-logo.png" type="image/png" />

      {/* Apple Touch Icon */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Web App Manifest */}
      <link rel="manifest" href="/site.webmanifest" />

      {/* Microsoft Tile */}
      <meta name="msapplication-TileColor" content="#ff0000" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />

      {/* Theme Color */}
      <meta name="theme-color" content="#000000" />
    </>
  )
}
