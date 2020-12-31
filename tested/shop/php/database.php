<?php
// Define PostgreSQL database server connect parameters.
define('PG_HOST', 'ec2-54-197-34-207.compute-1.amazonaws.com');
define('PG_PORT', 5432);
define('PG_DATABASE', 'dq87v0nvvms9k');
define('PG_USER', 'yuvtmqntkaunsj');
define('PG_PASSWORD', 'eef0909eaec02e2608a983eea33f7a0aa51e54099dcd53fd389497b2114cfda9');
define('ERROR_ON_CONNECT_FAILED', 'Connection failed!');

// Merge connect string and connect db server with default parameters.
function getDB() {
    return pg_pconnect (' host=' . PG_HOST .
                        ' port=' . PG_PORT .
                        ' dbname=' . PG_DATABASE .
                        ' user=' . PG_USER .
                        ' password=' . PG_PASSWORD
                       ) or die (ERROR_ON_CONNECT_FAILED);
}
?>