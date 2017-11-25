import Head from 'next/head'
const MyHead = () =>(
    <Head>
        <title>DatabaseHunsa | Layout</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* CSS */}
        <link rel="stylesheet" href="/static/css/react-table.css"/>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
        {/* JS */}
        <script src="/static/js/jquery-3.2.1.min.js"></script>
        <script src="/static/js/popper.min.js"></script>
        <script src="/static/js/bootstrap.min.js"></script>
        <script src="/static/js/react-table.js"></script>

        <script>
            var ReactTable = window.ReactTable.default
        </script>
    </Head>
)
export default MyHead