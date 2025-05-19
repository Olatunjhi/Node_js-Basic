const fs = require('fs');

if (!fs.existsSync('test'))
{
    fs.mkdir('test', (err) => {
        if (err)
        {
            console.error('making directory error:', err);
        }
        else
        {
            console.log('directory created successfully');
        }
    })
}
else
{
    fs.rmdir('test', (err) => {
        if (err)
        {
            console.error('removing directory error:', err);
        }
        else
        {
            console.log('removed directory successfully');
        }
    })
}