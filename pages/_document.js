import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    
    return (
      <Html>
        <Head>

          <meta charSet="utf-8"/>  
          <link rel="stylesheet" href="vendors/bootstrap/bootstrap.min.css"/>
          <link rel="stylesheet" href="vendors/fontawesome/css/all.min.css"/>
          <link rel="stylesheet" href="vendors/jquery-nice-select/nice-select.css"/>
          <link rel="stylesheet" href="vendors/OwlCarousel2/owl.carousel.min.css"/>
          <link rel="stylesheet" href="vendors/magnific-popup/css/magnific-popup.css"/>

          <link href="assets/css/style.css" rel="stylesheet"/>
          <link rel="shortcut icon" href="assets/images/favicon.png" type="image/png"/>
          <script type="text/javascript" src="vendors/jQuery/jquery.min.js"/>
          <script type="text/javascript" src="vendors/bootstrap/bootstrap.min.js"/>
          <script type="text/javascript" src="vendors/jquery-nice-select/jquery.nice-select.min.js"/>
          <script type="text/javascript" src="vendors/OwlCarousel2/owl.carousel.min.js"/>
          <script type="text/javascript" src="vendors/counterup/waypoints.min.js"/>
          <script type="text/javascript" src="vendors/counterup/jquery.counterup.min.js"/>
          <script type="text/javascript" src="vendors/magnific-popup/js/magnific-popup.min.js"/>

        </Head>

        <body id="top">

          <Main/>
          <NextScript />
  
        </body>

      </Html>
    )
  }
}

export default MyDocument