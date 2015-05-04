require('shelljs/global');
var temporal = exec('./a.out',{silent:true}).output;
echo("The exec result is:"+temporal);
