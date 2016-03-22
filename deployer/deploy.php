<?php
$cmd = shell_exec("/usr/sbin/deploy.sh 2>&1");
print str_replace("\n", "<br/>", $cmd);
exit();