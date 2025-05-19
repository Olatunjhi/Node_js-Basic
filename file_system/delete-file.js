const fs = require('fs');

if (!fs.existsSync('./blog2.txt'))
{
    console.log('file not exit');
}
else
{
    fs.unlink('./blog2.txt', (err) => {
        if (err)
        {
            console.error('deleting file error:', err);
        }
        else
        {
            console.log('file removed successfully');
        }
    })
}